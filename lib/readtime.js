// Reading time is calculated from the real article text, never typed in by hand.
// Prose is read at 200 words per minute (a comfortable pace for technical writing);
// each line of code adds 6 seconds, because code is read more slowly than prose.

const WORDS_PER_MINUTE = 200;
const SECONDS_PER_CODE_LINE = 6;

export const countWords = (s = "") => s.trim().split(/\s+/).filter(Boolean).length;

/** Words of prose and lines of code in an article (takeaways + body). */
export function measure({ takeaways = [], body = [] }) {
  let words = takeaways.reduce((n, t) => n + countWords(t), 0);
  let codeLines = 0;

  for (const b of body) {
    if (typeof b === "string") words += countWords(b);
    else if (b.t === "code") codeLines += b.text.split("\n").length;
    else if (b.t === "list" || b.t === "steps") words += b.items.reduce((n, t) => n + countWords(t), 0);
    else if (b.t === "qa") words += b.items.reduce((n, x) => n + countWords(x.q) + countWords(x.a), 0);
    else if (b.t === "formula") words += b.legend.reduce((n, t) => n + countWords(t), 0);
    else words += countWords(b.text);
  }
  return { words, codeLines };
}

/** Whole minutes to read, minimum 1. */
export function readingMinutes(article) {
  const { words, codeLines } = measure(article);
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE + (codeLines * SECONDS_PER_CODE_LINE) / 60));
}
