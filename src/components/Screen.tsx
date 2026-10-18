import { useNavigate } from "@tanstack/react-router";
import type { MouseEvent } from "react";

type ScreenData = { html: string; css: string; bodyClass: string };

const rules: [RegExp, string][] = [
  [/^arrow_back/, "back"],
  [/Iniciar Sesi[oó]n|^login/i, "/login"],
  [/Registrarme|Crear cuenta/i, "/registro"],
  [/Ingresar a mi suite|Activar estancia|Llave Digital|Workspace|Apple ID|Google|^Apple/, "/verificar"],
  [/Verificar e Ingresar|Continuar/, "/inicio"],
  [/^cottage Inicio/, "/inicio"],
  [/^apartment Explorar|Reservar estancia/, "/residencias"],
  [/^forum Comunidad|local_cafe/, "/comunidad"],
  [/^account_circle Perfil|Cerrar sesi/, "/perfil"],
  [/Ver suite/, "/residencia"],
];

export function Screen({ data }: { data: ScreenData }) {
  const navigate = useNavigate();
  const onClick = (e: MouseEvent) => {
    const el = (e.target as HTMLElement).closest("a,button");
    if (!el) return;
    const text = (el.textContent || "").replace(/\s+/g, " ").trim();
    if (/Cerrar sesi/.test(text)) { e.preventDefault(); navigate({ to: "/" }); return; }
    for (const [re, to] of rules) {
      if (re.test(text)) {
        e.preventDefault();
        if (to === "back") window.history.back();
        else navigate({ to: to as "/" });
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
