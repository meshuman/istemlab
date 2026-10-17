"use client";

import { useState } from "react";

const field = "mt-1 w-full border border-hair bg-transparent px-4 py-3 focus:border-brand-ink";

// There is no mail server behind this site, so the form prepares a complete email to `to` and hands it
// to the visitor's mail app. If nothing opens, the message can be copied or sent from any mail account.
export default function ContactForm({ to, services }) {
  const [state, setState] = useState({ status: "idle", mailto: "", text: "", copied: false });

  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k) => String(f.get(k) || "").trim();
    const subject = `Discovery call request: ${get("service") || "General enquiry"} (${get("name")})`;
    const text = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Organization: ${get("organization") || "-"}`,
      `Interested in: ${get("service") || "-"}`,
      "",
      get("message"),
    ].join("\n");
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    setState({ status: "ready", mailto, text, copied: false });
    window.location.href = mailto;
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(state.text);
      setState((s) => ({ ...s, copied: true }));
    } catch {}
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-medium">
          Work email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Organization
        <input name="organization" autoComplete="organization" className={field} />
      </label>
      <label className="block text-sm font-medium">
        What can we help with?
        <select name="service" className={field} defaultValue="">
          <option value="" disabled>Choose a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </label>
      <label className="block text-sm font-medium">
        Tell us about your goal
        <textarea name="message" rows={5} required placeholder="What are you trying to achieve, and by when?" className={field} />
      </label>
      <button type="submit" className="btn btn-solid">Request discovery call</button>

      {state.status === "ready" ? (
        <div role="status" className="border-l-2 border-brand bg-soft p-5 text-[15px]">
          <p className="font-medium">Your email is ready to send.</p>
          <p className="mt-1 text-muted">
            Your mail app should have opened with the message addressed to {to}. Press send there to finish. If nothing opened:
          </p>
          <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            <a href={state.mailto} className="text-brand-ink underline underline-offset-4">Open email again</a>
            <button type="button" onClick={copy} className="text-brand-ink underline underline-offset-4">
              {state.copied ? "Copied" : "Copy the message"}
            </button>
            <span className="text-muted">then send it to {to}</span>
          </p>
        </div>
      ) : (
        <p className="text-xs text-muted">We reply within two business days. We never share your details.</p>
      )}
    </form>
  );
}
