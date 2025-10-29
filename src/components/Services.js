import "./Home.css";

export default function Services() {
  return (
    <main className="main-content">
      <h2>Servicios Locales</h2>
      <div className="grid-propiedades">
        <div className="tarjeta">
          <h3>Alojamiento</h3>
          <p>Hospedajes y casas de familia.</p>
        </div>
        <div className="tarjeta">
          <h3>Gastronomía</h3>
          <p>Restaurantes y comida típica.</p>
        </div>
        <div className="tarjeta">
          <h3>Tours y Experiencias</h3>
          <p>Recorridos guiados y actividades.</p>
        </div>
        <div className="tarjeta">
          <h3>Artesanías</h3>
          <p>Productos locales y arte.</p>
        </div>
      </div>
    </main>
  );
}