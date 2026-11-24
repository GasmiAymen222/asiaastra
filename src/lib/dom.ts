// Next keeps previously visited pages mounted but hidden, so the same id can
// exist more than once. These helpers return the copy that is actually visible.
export function visibleById(id: string): HTMLElement | null {
  const els = Array.from(document.querySelectorAll<HTMLElement>(`[id="${id}"]`));
  return els.find((el) => (el.checkVisibility ? el.checkVisibility() : el.offsetParent !== null)) ?? null;
}
