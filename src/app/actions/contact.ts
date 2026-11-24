"use server";

import { allServices } from "@/lib/services";
import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "service" | "message", string>>;
  values?: Record<string, string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real users never fill this hidden field.
  if (String(formData.get("company_website") ?? "")) {
    return { status: "success", message: "Thank you! We'll be in touch soon." };
  }

  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    service: String(formData.get("service") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address.";
  const validServices = [...allServices.map((s) => s.title), "Other / not sure"];
  if (!validServices.includes(values.service)) errors.service = "Please choose a service.";
  if (values.message.length < 10) errors.message = "Please tell us a little more (at least 10 characters).";
  if (values.message.length > 5000) errors.message = "Message is too long.";

  if (Object.keys(errors).length) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "ASIATLAS Website <onboarding@resend.dev>";

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Email service not configured. Submission:", values);
      return {
        status: "success",
        message: "Thank you! (Dev mode: the message was logged to the server console.)",
      };
    }
    return {
      status: "error",
      message: `Our form is temporarily unavailable. Please email us at ${site.email}.`,
      values,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `New enquiry: ${values.service} from ${values.name}`,
        text: `Name: ${values.name}\nEmail: ${values.email}\nService: ${values.service}\n\n${values.message}`,
      }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
  } catch (err) {
    console.error("[contact] Failed to send:", err);
    return {
      status: "error",
      message: `Sorry, something went wrong. Please try again or email ${site.email}.`,
      values,
    };
  }

  return { status: "success", message: "Thank you! Your message has been sent. We'll get back to you shortly." };
}
