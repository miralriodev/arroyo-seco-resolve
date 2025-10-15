# Experiencias Únicas

**Plataforma de gestión de servicios turísticos** que conecta a anfitriones con visitantes para ofrecer experiencias locales únicas, alojamiento, alimentos, recorridos y guías.

## Estructura del proyecto

```
experiencias-unicas/
├── backend/ → Servidor (Node.js + Express)
└── frontend/ → Aplicación web (React + Vite)
```

## Cómo iniciar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/experiencias-unicas.git
   cd experiencias-unicas
   ```

2. Instalar dependencias:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. Ejecutar entornos de desarrollo:
   ```bash
   # Backend
   cd backend && npm run dev

   # Frontend
   cd frontend && npm run dev
   ```

## Flujo de trabajo (Git)

- `main` → rama estable para producción
- `develop` → integración de nuevas funciones
- `feature/*` → desarrollo de características
- `hotfix/*` → corrección de errores urgentes