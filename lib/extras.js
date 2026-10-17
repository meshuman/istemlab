// Merges the extra sections (worked examples, FAQs) into each article, just before its closing paragraph.
// Keeping them in separate files keeps the main article files easy to read and edit.

import { conceptExtras } from "./extras-concepts";
import { otherExtras } from "./extras-others";

const EXTRAS = { ...conceptExtras, ...otherExtras };

export function withExtras(item) {
  const extra = EXTRAS[item.slug];
  if (!extra || !extra.length) return item;
  const body = [...item.body];
  const closing = body.pop(); // keep the closing paragraph last
  return { ...item, body: [...body, ...extra, closing] };
}
