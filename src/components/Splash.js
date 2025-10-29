import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => navigate("/home"), 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div style={{ textAlign: "center", marginTop: "20vh" }}>
            <h1>Arroyo Seco Resolve</h1>
            <p>Conectando experiencias locales. Cargando...</p>
        </div>
    );
}
