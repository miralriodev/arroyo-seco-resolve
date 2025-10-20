# Biblioteca Digital — PWA de Libros

## Descripción general
Esta aplicación es una Progressive Web App (PWA) que permite a los usuarios leer, escribir y calificar libros desde cualquier dispositivo.
Funciona sin conexión gracias al Service Worker y almacenamiento en caché del App Shell.

## Tipo: Híbrida (Serverless + Microservicios)

Frontend (React PWA):

Interfaz instalable (manifest.json + service worker).

Contenido dinámico: libros, autores y calificaciones.

Grid responsivo de tarjetas para mostrar los libros.

Backend Serverless (Firebase Functions):

CRUD de libros y calificaciones.

Gestión de usuarios y autenticación.

Microservicios:

books-service: manejo de lectura y escritura de libros.

ratings-service: calificaciones y reseñas.

user-service: administración de cuentas y preferencias.

Base de datos (Firestore):

Almacena libros, usuarios y calificaciones.

## Diagrama textual de arquitectura:
# Clonar el repositorio:
   ```bash
[ Usuario ]
     │
     ▼
 [ PWA React ]
     │        (fetch / HTTPS)
     ▼
 ┌──────────────┬───────────────┐
 │ books-service│ ratings-service│
 └──────┬───────┴───────────────┘
        │
        ▼
 [ Base de Datos Firebase ]
   ```

## Configuración e instalación
1. Clonar el repositorio
   ```bash
   git clone https://github.com/tuusuario/pwa-libros.git
   cd pwa-libros
   ```

2. Instalar dependencias
   ```bash
   npm install
   ```

3. Ejecutar en modo desarrollo
   ```bash
   npm start
   ```

4. Compilar para producción
   ```bash
   npm run build
   ```
## Componentes principales

| Componente         | Descripción                                     |
|-------------------|------------------------------------------------|
| `Home.js`          | Vista principal con lista de libros.          |
| `BookList.js`      | Lista dinámica de libros.                      |
| `BookDetail.js`    | Permite leer, calificar y ver reseñas.        |
| `WriteBook.js`     | Formulario para crear o editar libros.        |
| `manifest.json`    | Define íconos, colores y nombre de la PWA.    |
| `service-worker.js`| Gestiona caché para funcionamiento offline.   |

## Funcionamiento sin conexión

El **Service Worker**:

- Al instalarse, guarda en caché los archivos esenciales (`index.html`, CSS, JS, `manifest.json`, íconos).
- Cuando no hay conexión, el usuario aún puede:
  - Navegar entre vistas previamente visitadas.
  - Leer libros descargados previamente.
  - Escribir o calificar libros (almacenado temporalmente en `localStorage` o `IndexedDB`).
  - Sincronizar automáticamente al reconectarse.

---

## Cómo probar sin conexión

1. Abrir la app en Chrome.
2. Abrir **DevTools → Application → Service Workers**.
3. Activar la opción **“Offline”**.
4. Recargar la página.
5. Verificar que:
   - El App Shell (menú, header, footer y vistas básicas) sigue visible.
   - Los libros carguen desde caché.
   - Se puedan escribir o calificar libros (si están guardados en caché/localStorage).

---

## Tecnologías utilizadas

- **Frontend:** React, HTML5, CSS3  
- **Backend:** Node.js con Serverless Functions (Firebase / AWS Lambda)  
- **Base de Datos:** Firestore 
- **Arquitectura:** Microservicios + Serverless  
- **PWA Core:** Service Worker + `manifest.json` + HTTPS  

---

## Autor

**María Dolores Salinas Jiménez**  
Desarrollador Fullstack — 2025   
