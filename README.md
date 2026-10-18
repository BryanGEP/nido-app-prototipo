# 🏡 Nido · Prototipo funcional

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Lovable](https://img.shields.io/badge/Hecho_con-Lovable-FF5C8A?style=for-the-badge)

### ▶️ [Abrir la demo en vivo](https://design-screen-companion.lovable.app)
> Se ve mejor desde el celular o con el navegador en modo móvil (F12 → ícono de dispositivo).

Prototipo navegable de **Nido**, el concepto de app para residentes de coliving que diseñé en **[nido-app-diseno](https://github.com/BryanGEP/nido-app-diseno)**. Este repo es el último paso del flujo: llevar el diseño de pantallas estáticas a una app web que se puede recorrer de principio a fin.

La marca "Nido" es ficticia y el proyecto no tiene relación con ninguna empresa real. Los datos (residentes, precios, eventos) son de ejemplo.

## 🔄 Del diseño a la app

| 1. Generación | 2. Sistema de diseño | 3. Prototipo |
|:---:|:---:|:---:|
| **Google Stitch** | **Figma + Claude** | **Lovable** |
| Pantallas a partir de prompts | Variables, estilos y componentes | App navegable publicada |

A Lovable le pasé el HTML exportado de Stitch y las capturas de cada pantalla. Después revisé y corregí la navegación, el logotipo y la marca hasta que todo el recorrido funcionara.

## 📱 Pantallas y recorrido

| Bienvenida | Iniciar sesión | Verificación | Inicio | Explorar | Comunidad | Perfil |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| <img src="https://raw.githubusercontent.com/BryanGEP/nido-app-diseno/main/assets/v2/bienvenida.png" width="120"> | <img src="https://raw.githubusercontent.com/BryanGEP/nido-app-diseno/main/assets/v2/iniciar-sesion.png" width="120"> | <img src="https://raw.githubusercontent.com/BryanGEP/nido-app-diseno/main/assets/v2/verificacion.png" width="120"> | <img src="https://raw.githubusercontent.com/BryanGEP/nido-app-diseno/main/assets/v2/inicio.png" width="120"> | <img src="https://raw.githubusercontent.com/BryanGEP/nido-app-diseno/main/assets/v2/explorar.png" width="120"> | <img src="https://raw.githubusercontent.com/BryanGEP/nido-app-diseno/main/assets/v2/comunidad.png" width="120"> | <img src="https://raw.githubusercontent.com/BryanGEP/nido-app-diseno/main/assets/v2/perfil.png" width="120"> |

```
Bienvenida ─┬─ Iniciar sesión ─┐
            └─ Registro ───────┴─ Verificación ── Inicio
                                                    │
                     Barra inferior: Inicio · Explorar · Comunidad · Perfil
                                                    │
                                     Explorar ── Detalle de la residencia
```

| Ruta | Pantalla |
|---|---|
| `/` | Bienvenida |
| `/login` | Iniciar sesión |
| `/registro` | Registro |
| `/verificar` | Código de verificación |
| `/inicio` | Inicio del residente |
| `/residencias` | Explorar residencias |
| `/residencia` | Detalle de una residencia |
| `/comunidad` | Comunidad |
| `/perfil` | Perfil |

## 🧱 Cómo está hecho

- **TanStack Start + React 19:** una ruta por pantalla (`src/routes/`).
- **Tailwind CSS 4:** con los tokens de color y tipografía de Material 3 que generó Stitch.
- **`src/screens/`:** el contenido de cada pantalla.
- **`src/components/Screen.tsx`:** las pantallas se escribieron como HTML, así que este componente intercepta los clics en botones y enlaces y los lleva a la ruta correcta (barra inferior, "Iniciar sesión", "Verificar e ingresar", "Ver suite", regresar).
- **Pruebas con Vitest** (`src/test/`): comprueban que la barra inferior abra Inicio, Explorar, Comunidad y Perfil desde cada pantalla, tanto al tocar el ícono como el texto.

## 💻 Correrlo en local

Requiere [Node.js](https://nodejs.org) o [Bun](https://bun.sh).

```sh
git clone https://github.com/BryanGEP/nido-app-prototipo.git
cd nido-app-prototipo
bun install      # o: npm install
bun run dev      # o: npm run dev
bun run test     # pruebas de navegación
```

## ⚠️ Limitaciones

- Es un **prototipo de interfaz**: no hay backend, inicio de sesión real ni base de datos.
- Las fotografías se generaron con Stitch y se cargan desde servidores de Google.
- Las pantallas vienen de HTML generado, no de componentes de React reutilizables. El siguiente paso sería convertirlas en componentes, igual que hice en Figma.

## 🔗 Relacionado

- 🎨 **Diseño y sistema en Figma:** [nido-app-diseno](https://github.com/BryanGEP/nido-app-diseno)
- 🛠️ **Editor de Lovable:** este repo se sincroniza con el proyecto de Lovable en ambos sentidos.

---

👤 **Bryan Gael Esquivel Pérez** — Ingeniería en Sistemas Computacionales, TecNM Jiquilpan
[LinkedIn](https://www.linkedin.com/in/bryan-esquivel-perez) · [GitHub](https://github.com/BryanGEP)
