# Arroyo Seco Resolve — PWA Turística Comunitaria (Offline-First)

## Descripción
PWA para la comunidad de Arroyo Seco orientada a turismo local (alojamiento, gastronomía, tours y artesanías). Construida con React y preparada para operar con conectividad limitada mediante Service Worker y fallback offline.

## Stack
- Frontend: React (Create React App), React Router.
- PWA: `manifest.json`, `public/sw.js` (caché app shell + offline.html).
- Assets: `public/` (íconos, offline.html).

## Scripts
```bash
npm install       # Instala dependencias
npm start         # Levanta el servidor en desarrollo
npm run build     # Compila producción
```

## Estructura inicial
- `src/components/Splash.js`: pantalla de bienvenida y redirección a `/home`.
- `src/components/Home.js`: portada con categorías placeholder.
- `public/sw.js`: cacheo básico y fallback a `offline.html`.
- `public/manifest.json`: metadatos de la PWA (nombre, colores, íconos).

## Próximos pasos sugeridos
- Añadir rutas: Servicios, Detalle, Reservas, Perfil.
- Integrar IndexedDB para cola offline y sincronización.
- Definir API BFF (Node/Express) y contratos (OpenAPI).
- Configurar Nginx y despliegue en VPS.

## Autoría
Equipo IDSG 11 — Comunidad Arroyo Seco
