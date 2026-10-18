import { createFileRoute } from "@tanstack/react-router";
import { Screen } from "@/components/Screen";
import data from "@/screens/landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nido — Coliving todo incluido" },
      { name: "description", content: "Suites equipadas y comunidad activa en Guadalajara." },
      { property: "og:title", content: "Nido — Coliving todo incluido" },
      { property: "og:description", content: "Suites equipadas y comunidad activa en Guadalajara." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return <Screen data={data} />;
}
