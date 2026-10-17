// Tiny helpers for writing article bodies. Each returns one content block.
// Rendered by components/LearnBody.js and measured by lib/readtime.js.

export const p = (text) => ({ t: "p", text });                 // paragraph
export const h2 = (text) => ({ t: "h2", text });                // section heading (also feeds the table of contents)
export const ul = (...items) => ({ t: "list", items });         // bullet list
export const ol = (...items) => ({ t: "steps", items });        // numbered list
export const code = (lang, text) => ({ t: "code", lang, text }); // code sample
export const note = (text) => ({ t: "callout", text });         // highlighted note
export const qa = (...pairs) => ({ t: "qa", items: pairs.map(([q, a]) => ({ q, a })) }); // FAQ: qa(["Question?", "Answer."], ...)
export const formula = (text, legend = []) => ({ t: "formula", text, legend }); // equation with a "where" legend
