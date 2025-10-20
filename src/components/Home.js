import { useEffect, useState } from "react";
import "../components/Home.css";

export default function Home() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const cargarLibros = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const datos = [
        { id: 1, titulo: "Orgullo y prejuicio", autor: "Jane Austen", genero: "Romance"},
        { id: 2, titulo: "Heist", autor: "Ariana Godoy", genero: "Juvenil"},
        { id: 3, titulo: "Sigue mi voz", autor: "Ariana Godoy", genero: "Romance"},
        { id: 4, titulo: "Las cadenas del rey", autor: "Karine Bernal Lobo", genero: "Romance"},
        { id: 5, titulo: "Damian", autor: "Alex Mirez", genero: "Suspenso"}
      ];
      setLibros(datos);
    };

    cargarLibros();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{background: "linear-gradient(90deg, #6a0dad, #023E8A, #007a74ff)", color: "white", padding: "1rem", textAlign: "center"}}>
        <h1>Biblioteca Digital</h1>
        <p>Imagina, crea y vive entre páginas</p>
      </header>

      {/* Lista de libros */}
      <main className="main-content">
        <h2>Libros disponibles</h2>

        {libros.length === 0 ? (
          <p className="loading">Cargando libros...</p>
        ) : (
          <div className="grid-propiedades">
            {libros.map(l => (
              <div key={l.id} className="tarjeta">
                <h3>{l.titulo}</h3>
                <p><strong>Autor:</strong> {l.autor}</p>
                <p><strong>Género:</strong> {l.genero}</p> 
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#333", color: "white", textAlign: "center", padding: "1rem" }}>
        <p>
          Contáctanos:{" "}
          <br />
          <a href="biblioteca@gmail.com" style={{ color: "white", textDecoration: "underline", marginRight: "1rem" }}>
            Correo electrónico: contacto@biblioteca.com
          </a>
          <br />
          <a href="https://wa.me/5211234567890" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>
            Teléfono: 123456789123
          </a>
        </p>
        <p>© 2025 Biblioteca Digital - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
