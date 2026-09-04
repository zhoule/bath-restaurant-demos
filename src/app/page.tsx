import { VenueCard } from "@/components/VenueCard";
import { venues } from "@/data/venues";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-stone-200/80 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-wider text-stone-500">
            Bath, UK
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Restaurant & cafe demos
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
            Content-driven Next.js redesigns for hospitality venues in Bath.
            Each demo is clearly labelled as unofficial — warm hospitality UI
            with honest placeholders where public details are incomplete.
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <h2 className="text-lg font-semibold text-stone-900">Demos</h2>
        <p className="mt-1 text-sm text-stone-500">
          {venues.length} venue{venues.length === 1 ? "" : "s"} in the registry
        </p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {venues.map((venue) => (
            <li key={venue.id}>
              <VenueCard venue={venue} />
            </li>
          ))}
        </ul>
      </main>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-stone-600">
          <p>
            Unofficial demos for portfolio / experiment use. Not affiliated
            with the venues. Confirm hours and menus with the official
            businesses.
          </p>
        </div>
      </footer>
    </div>
  );
}
