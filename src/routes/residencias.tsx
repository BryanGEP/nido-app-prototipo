import { createFileRoute } from "@tanstack/react-router";
import { Screen } from "@/components/Screen";
import data from "@/screens/residencias";

export const Route = createFileRoute("/residencias")({
  head: () => ({
    meta: [
      { title: "Explorar residencias — Nido" },
      { name: "description", content: "Encuentra tu suite en Guadalajara." },
      { property: "og:title", content: "Explorar residencias — Nido" },
      { property: "og:description", content: "Encuentra tu suite en Guadalajara." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResidenciasPage,
});

function ResidenciasPage() {
  return <Screen data={data} />;
}
