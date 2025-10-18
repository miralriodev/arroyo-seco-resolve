import { useEffect, useState } from "react";

export default function Home() {

    return (
        <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

            {/* Header */}
            <header style={{ backgroundColor: "#023E8A", color: "white", padding: "1rem", textAlign: "center" }}>
                <h1>Alojamiento - Arroyo Seco </h1>
                <p>Tu hogar lejos de casa.</p>
            </header>

            {/* Lista de propiedades */}
            <main style={{ flex: 1, padding: "0 2rem" }}>
                <h2>Propiedades</h2>
            </main>

            {/* Footer */}
            <footer style={{ backgroundColor: "#333", color: "white", textAlign: "center", padding: "1rem" }}>
            <p>
                Contáctanos:{" "}
                <a href="mailto:contacto@tudominio.com" style={{ color: "white", textDecoration: "underline", marginRight: "1rem" }}>Correo electronico: correo@gmail.com</a>
                <a href="https://wa.me/5211234567890" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>Telefono: 123456789123</a>
            </p>
            <p>© 2025 Todos los derechos reservados</p>
            </footer>
        </div>
    );
}
