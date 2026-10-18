import { useNavigate } from "@tanstack/react-router";
import type { MouseEvent } from "react";

type ScreenData = { html: string; css: string; bodyClass: string };

type ScreenDestination = "/" | "/login" | "/registro" | "/verificar" | "/inicio" | "/residencias" | "/comunidad" | "/perfil" | "/residencia";

const menuDestinations: Record<string, ScreenDestination> = {
  inicio: "/inicio",
  explorar: "/residencias",
  "explorar-espacios": "/residencias",
  comunidad: "/comunidad",
  perfil: "/perfil",
};

const rules: [RegExp, ScreenDestination | "back"][] = [
  [/^arrow_back/, "back"],
  [/Iniciar Sesi[oó]n|^login/i, "/login"],
  [/Registrarme|Crear cuenta/i, "/registro"],
  [/Ingresar a mi suite|Activar estancia|Llave Digital|Workspace|Apple ID|Google|^Apple/, "/verificar"],
  [/Verificar e Ingresar|Continuar/, "/inicio"],
  [/^cottage\s*Inicio/, "/inicio"],
  [/^apartment\s*Explorar|Reservar estancia/, "/residencias"],
  [/^forum\s*Comunidad|local_cafe/, "/comunidad"],
  [/^account_circle\s*Perfil|Cerrar sesi/, "/perfil"],
  [/Ver suite/, "/residencia"],
];

export function Screen({ data }: { data: ScreenData }) {
  const navigate = useNavigate();
  const onClick = (e: MouseEvent) => {
    if (!(e.target instanceof Element)) return;
    const el = (e.target as HTMLElement).closest("a,button");
    if (!el) return;
    const menuPath = el.getAttribute("data-path");
    const destination = menuPath ? menuDestinations[menuPath] : undefined;
    if (destination) {
      e.preventDefault();
      navigate({ to: destination });
      return;
    }
    const text = (el.textContent || "").replace(/\s+/g, " ").trim();
    if (/Cerrar sesi/.test(text)) { e.preventDefault(); navigate({ to: "/" }); return; }
    for (const [re, to] of rules) {
      if (re.test(text)) {
        e.preventDefault();
        if (to === "back") window.history.back();
        else navigate({ to });
        return;
      }
    }
    if (el.tagName === "A" && el.getAttribute("href")?.startsWith("#")) e.preventDefault();
  };
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: data.css }} />
      <div className={data.bodyClass} onClick={onClick} dangerouslySetInnerHTML={{ __html: data.html }} />
    </>
  );
}
