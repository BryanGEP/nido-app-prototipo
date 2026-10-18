import { createFileRoute } from "@tanstack/react-router";
import { Screen } from "@/components/Screen";
import data from "@/screens/comunidad";

export const Route = createFileRoute("/comunidad")({
  head: () => ({
    meta: [
      { title: "Comunidad — Nido" },
      { name: "description", content: "Eventos, vecinos y tablón de la comunidad." },
      { property: "og:title", content: "Comunidad — Nido" },
      { property: "og:description", content: "Eventos, vecinos y tablón de la comunidad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ComunidadPage,
});

function ComunidadPage() {
  return <Screen data={data} />;
}
