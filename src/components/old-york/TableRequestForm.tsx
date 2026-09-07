"use client";

import { FormEvent, useState } from "react";

type Props = {
  phone: string;
  telHref: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/jack.zxzhou@gmail.com";

export function TableRequestForm({ phone, telHref }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const date = String(fd.get("date") || "").trim();
    const party = String(fd.get("party") || "").trim();
    const guestPhone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const notes = String(fd.get("notes") || "").trim();

    const payload: Record<string, string> = {
      name,
      preferred_date: date,
      party_size: party,
      phone: guestPhone,
      notes: notes || "(none)",
      _subject: `Table request — Old York Tea Room (${name || "guest"})`,
      _template: "table",
      // AJAX path has no captcha page; FormSubmit requires this off for fetch.
      _captcha: "false",
    };
    if (email) payload.email = email;

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as {
        success?: string | boolean;
        message?: string;
      } | null;

      const ok =
        res.ok &&
        (data?.success === true ||
          data?.success === "true" ||
          String(data?.message || "")
            .toLowerCase()
            .includes("success"));

      if (!ok) {
        throw new Error(
          data?.message ||
            "Could not send your request. Please call the tea room instead.",
        );
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please call to reserve.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-[#6B3E2E]/25 bg-[#F5EDE4] p-5"
        role="status"
      >
        <p
          className="text-lg text-stone-900"
          style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
        >
          Request sent — we&apos;ll confirm by phone
        </p>
        <p className="mt-2 text-sm leading-relaxed text-stone-700">
          Your table request is on its way. This is a{" "}
          <strong className="font-semibold">request only</strong> — the room is
          small, walk-ins are welcome, and the tea room will confirm by phone.
          Prefer to speak now? Call{" "}
          <a href={telHref} className="font-semibold text-[#6B3E2E] underline">
            {phone}
          </a>
          .
        </p>
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
        Walk-ins welcome. This form sends a{" "}
        <strong className="font-semibold text-stone-800">request</strong> only —
        the upstairs room is small (~14 covers). The tea room will confirm by
        phone. Prefer a sure thing? Call{" "}
        <a href={telHref} className="font-semibold text-[#6B3E2E] underline">
          {phone}
        </a>
        .
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
            required
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
            required
            placeholder="e.g. 2"
            className="mt-1 w-full rounded-xl border border-[#E8DFD4] bg-white px-3 py-2.5 text-stone-900 outline-none ring-[#6B3E2E]/30 focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-stone-800">Phone</span>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="So we can confirm"
            className="mt-1 w-full rounded-xl border border-[#E8DFD4] bg-white px-3 py-2.5 text-stone-900 outline-none ring-[#6B3E2E]/30 focus:ring-2"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-medium text-stone-800">
            Email <span className="font-normal text-stone-500">(optional)</span>
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="mt-1 w-full rounded-xl border border-[#E8DFD4] bg-white px-3 py-2.5 text-stone-900 outline-none ring-[#6B3E2E]/30 focus:ring-2"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="font-medium text-stone-800">Notes</span>
        <textarea
          name="notes"
          rows={3}
          placeholder="Occasion, dietary needs, preferred time…"
          className="mt-1 w-full rounded-xl border border-[#E8DFD4] bg-white px-3 py-2.5 text-stone-900 outline-none ring-[#6B3E2E]/30 focus:ring-2"
        />
      </label>

      {status === "error" && (
        <div
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
          role="alert"
        >
          <p className="font-medium">Couldn&apos;t send the request</p>
          <p className="mt-1">{errorMsg}</p>
          <p className="mt-2">
            Please call{" "}
            <a href={telHref} className="font-semibold underline">
              {phone}
            </a>{" "}
            instead.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex rounded-full bg-[#6B3E2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5a3426] disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "Sending request…" : "Send table request"}
      </button>
    </form>
  );
}
