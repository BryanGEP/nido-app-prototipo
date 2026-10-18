import { createFileRoute } from "@tanstack/react-router";
import { Screen } from "@/components/Screen";
import data from "@/screens/login";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Iniciar sesión — Nido" },
      { name: "description", content: "Ingresa a tu suite Nido." },
      { property: "og:title", content: "Iniciar sesión — Nido" },
      { property: "og:description", content: "Ingresa a tu suite Nido." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return <Screen data={data} />;
}
