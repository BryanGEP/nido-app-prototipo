import { createFileRoute } from "@tanstack/react-router";
import { Screen } from "@/components/Screen";
import data from "@/screens/perfil";

export const Route = createFileRoute("/perfil")({
  head: () => ({
    meta: [
      { title: "Mi perfil — Nido" },
      { name: "description", content: "Tu perfil, servicios y facturas." },
      { property: "og:title", content: "Mi perfil — Nido" },
      { property: "og:description", content: "Tu perfil, servicios y facturas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PerfilPage,
});

function PerfilPage() {
  return <Screen data={data} />;
}
