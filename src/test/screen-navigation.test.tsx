import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Screen } from "@/components/Screen";
import inicio from "@/screens/inicio";
import residencias from "@/screens/residencias";
import comunidad from "@/screens/comunidad";
import perfil from "@/screens/perfil";

const { navigate } = vi.hoisted(() => ({ navigate: vi.fn() }));
vi.mock("@tanstack/react-router", () => ({ useNavigate: () => navigate }));

afterEach(cleanup);
beforeEach(() => navigate.mockClear());

describe.each([
  ["inicio", inicio],
  ["residencias", residencias],
  ["comunidad", comunidad],
  ["perfil", perfil],
] as const)("Navigation from %s", (_name, data) => {
  it.each([
    ["inicio", "/inicio"],
    ["explorar", "/residencias"],
    ["comunidad", "/comunidad"],
    ["perfil", "/perfil"],
  ])("opens %s when clicking its icon or label", (path, destination) => {
    const { container } = render(<Screen data={data} />);
    const link = container.querySelector(`nav a[data-path="${path}"]`)
      ?? (path === "explorar" ? container.querySelector('nav a[data-path="explorar-espacios"]') : null);
    if (!link) throw new Error(`Missing navigation destination: ${path}`);
    const icon = link.querySelector(".material-symbols-outlined");
    const label = link.lastElementChild;
    if (!icon || !label) throw new Error("Missing navigation icon or label");

    fireEvent.click(icon);
    expect(navigate).toHaveBeenLastCalledWith({ to: destination });
    navigate.mockClear();
    fireEvent.click(label);
    expect(navigate).toHaveBeenCalledExactlyOnceWith({ to: destination });
  });
});