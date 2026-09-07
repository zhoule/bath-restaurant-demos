import Link from "next/link";

type SiteFooterProps = {
  venueName?: string;
  sources?: { label: string; url: string }[];
};

export function SiteFooter({ venueName, sources }: SiteFooterProps) {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-stone-600">
        <p className="font-medium text-stone-800">
          Disclaimer
        </p>
        <p className="mt-2 max-w-2xl leading-relaxed">
          {venueName
            ? `This page is an unofficial demo redesign of ${venueName}. It is not affiliated with or endorsed by the venue. Content is based on publicly available information and clearly labelled placeholders — do not treat menu items, hours, or contact details as guaranteed.`
            : "These pages are unofficial demo redesigns. They are not affiliated with or endorsed by the venues shown. Always confirm details with the official business."}
        </p>
        {sources && sources.length > 0 && (
          <p className="mt-4">
            Sources:{" "}
            {sources.map((s, i) => (
              <span key={s.url}>
                {i > 0 && " · "}
                <a
                  href={s.url}
                  className="underline decoration-stone-300 underline-offset-2 hover:text-stone-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              </span>
            ))}
          </p>
        )}
        <p className="mt-6">
          <Link href="/" className="underline decoration-stone-300 underline-offset-2 hover:text-stone-900">
            ← All demos
          </Link>
        </p>
      </div>
    </footer>
  );
}
