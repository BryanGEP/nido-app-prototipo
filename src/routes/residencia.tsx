import { createFileRoute } from "@tanstack/react-router";
import { Screen } from "@/components/Screen";
import data from "@/screens/residencia";

export const Route = createFileRoute("/residencia")({
  head: () => ({
    meta: [
      { title: "Nido Americana Living — Nido" },
      { name: "description", content: "Detalle de residencia y reservas." },
      { property: "og:title", content: "Nido Americana Living — Nido" },
      { property: "og:description", content: "Detalle de residencia y reservas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResidenciaPage,
});

function ResidenciaPage() {
  return <Screen data={data} />;
}
