import "../components/Home.css";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{background: "linear-gradient(90deg, #0f766e, #023E8A, #007a74)", color: "white", padding: "1rem", textAlign: "center"}}>
        <h1>Arroyo Seco Resolve</h1>
        <p>Turismo comunitario, cultura y naturaleza</p>
      </header>

      {/* Contenido principal */}
      <main className="main-content">
        <h2>Explora servicios locales</h2>

        <div className="grid-propiedades">
          <div className="tarjeta">
            <h3>Alojamiento</h3>
            <p>Próximamente: hospedajes y casas de familia.</p>
          </div>
          <div className="tarjeta">
            <h3>Gastronomía</h3>
            <p>Próximamente: comida típica y restaurantes locales.</p>
          </div>
          <div className="tarjeta">
            <h3>Tours y Experiencias</h3>
            <p>Próximamente: recorridos guiados y actividades.</p>
          </div>
          <div className="tarjeta">
            <h3>Artesanías</h3>
            <p>Próximamente: artesanías y productos locales.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#333", color: "white", textAlign: "center", padding: "1rem" }}>
        <p>
          Contacto:
          <br />
          <a href="mailto:contacto@arroyoseco.local" style={{ color: "white", textDecoration: "underline", marginRight: "1rem" }}>
            Correo: contacto@arroyoseco.local
          </a>
          <br />
          <a href="https://wa.me/5211234567890" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>
            WhatsApp: +52 1 123 456 7890
          </a>
        </p>
        <p>© 2025 Arroyo Seco — Comunidad</p>
      </footer>
    </div>
  );
}
