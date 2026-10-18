import { createFileRoute } from "@tanstack/react-router";
import { Screen } from "@/components/Screen";
import data from "@/screens/registro";

export const Route = createFileRoute("/registro")({
  head: () => ({
    meta: [
      { title: "Crear cuenta — Nido" },
      { name: "description", content: "Crea tu cuenta de residente Nido." },
      { property: "og:title", content: "Crear cuenta — Nido" },
      { property: "og:description", content: "Crea tu cuenta de residente Nido." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RegistroPage,
});

function RegistroPage() {
  return <Screen data={data} />;
}
