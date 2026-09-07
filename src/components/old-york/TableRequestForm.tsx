"use client";

import { FormEvent, useState } from "react";

type Props = {
  phone: string;
  telHref: string;
};

export function TableRequestForm({ phone, telHref }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const date = String(fd.get("date") || "").trim();
    const party = String(fd.get("party") || "").trim();
    const contact = String(fd.get("contact") || "").trim();
    const notes = String(fd.get("notes") || "").trim();
    const lines = [
      name && `Name: ${name}`,
      date && `Preferred date: ${date}`,
      party && `Party size: ${party}`,
      contact && `Phone / email: ${contact}`,
      notes && `Notes: ${notes}`,
    ].filter(Boolean);
    setSummary(lines.join(" · "));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-[#6B3E2E]/25 bg-[#F5EDE4] p-5"
        role="status"
      >
        <p
          className="text-lg text-stone-900"
          style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
        >
          Request noted — please call to confirm
        </p>
        <p className="mt-2 text-sm leading-relaxed text-stone-700">
          This preview form only keeps your details on this device. We don&apos;t
          send bookings online. Call{" "}
          <a href={telHref} className="font-semibold text-[#6B3E2E] underline">
            {phone}
          </a>{" "}
          to reserve larger parties.
        </p>
        {summary && (
          <p className="mt-3 text-xs leading-relaxed text-stone-500">
            Your notes: {summary}
          </p>
        )}
        <a
          href={telHref}
          className="mt-5 inline-flex rounded-full bg-[#6B3E2E] px-5 py-2.5 text-sm font-semibold text-white"
        >
          Call {phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <p className="text-sm leading-relaxed text-stone-600">
        Optional request — this preview copies your details on-screen only. Call{" "}
        {phone} to confirm. No online booking backend.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-stone-800">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-1 w-full rounded-xl border border-[#E8DFD4] bg-white px-3 py-2.5 text-stone-900 outline-none ring-[#6B3E2E]/30 focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-stone-800">Preferred date</span>
          <input
            name="date"
            type="date"
            className="mt-1 w-full rounded-xl border border-[#E8DFD4] bg-white px-3 py-2.5 text-stone-900 outline-none ring-[#6B3E2E]/30 focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-stone-800">Party size</span>
          <input
            name="party"
            type="number"
            min={1}
            max={14}
            placeholder="e.g. 2"
            className="mt-1 w-full rounded-xl border border-[#E8DFD4] bg-white px-3 py-2.5 text-stone-900 outline-none ring-[#6B3E2E]/30 focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-stone-800">Phone or email</span>
          <input
            name="contact"
            autoComplete="tel"
            className="mt-1 w-full rounded-xl border border-[#E8DFD4] bg-white px-3 py-2.5 text-stone-900 outline-none ring-[#6B3E2E]/30 focus:ring-2"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="font-medium text-stone-800">Notes</span>
        <textarea
          name="notes"
          rows={3}
          placeholder="Occasion, dietary needs…"
          className="mt-1 w-full rounded-xl border border-[#E8DFD4] bg-white px-3 py-2.5 text-stone-900 outline-none ring-[#6B3E2E]/30 focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="inline-flex rounded-full bg-[#6B3E2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5a3426]"
      >
        Save request on this device
      </button>
    </form>
  );
}
