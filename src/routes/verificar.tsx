import { createFileRoute } from "@tanstack/react-router";
import { Screen } from "@/components/Screen";
import data from "@/screens/verificar";

export const Route = createFileRoute("/verificar")({
  head: () => ({
    meta: [
      { title: "Verificación — Nido" },
      { name: "description", content: "Verifica tu identidad con tu código." },
      { property: "og:title", content: "Verificación — Nido" },
      { property: "og:description", content: "Verifica tu identidad con tu código." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VerificarPage,
});

function VerificarPage() {
  return <Screen data={data} />;
}
