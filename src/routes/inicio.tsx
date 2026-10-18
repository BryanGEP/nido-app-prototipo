import { createFileRoute } from "@tanstack/react-router";
import { Screen } from "@/components/Screen";
import data from "@/screens/inicio";

export const Route = createFileRoute("/inicio")({
  head: () => ({
    meta: [
      { title: "Inicio — Nido" },
      { name: "description", content: "Tu suite, pagos y comunidad en un lugar." },
      { property: "og:title", content: "Inicio — Nido" },
      { property: "og:description", content: "Tu suite, pagos y comunidad en un lugar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InicioPage,
});

function InicioPage() {
  return <Screen data={data} />;
}
