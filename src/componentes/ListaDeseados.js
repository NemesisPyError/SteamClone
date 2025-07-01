import { useState } from "react";

function ListaDeseados() {
  const juegosOriginales = [
    { nombre: "Cyberpunk 2077", precio: 29.99, puntuacion: 8.5 },
    { nombre: "The Witcher 3", precio: 19.99, puntuacion: 9.5 },
    { nombre: "Hades", precio: 14.99, puntuacion: 9.0 },
    { nombre: "Stardew Valley", precio: 9.99, puntuacion: 8.8 }
  ];

  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState("nombre");
  const [juegos, setJuegos] = useState(juegosOriginales);

  const juegosFiltrados = juegos
    .filter(juego =>
      juego.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
    .sort((a, b) => {
      if (orden === "nombre") return a.nombre.localeCompare(b.nombre);
      if (orden === "precio") return a.precio - b.precio;
      if (orden === "puntuacion") return b.puntuacion - a.puntuacion;
      return 0;
    });

  return (
    <>
      <h1>Lista de deseados de User</h1>
      <div>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <div className="menu">
          <strong>Ordenar por:</strong>
          <ul className="submenu">
            <li onClick={() => setOrden("nombre")}>Nombre</li>
            <li onClick={() => setOrden("precio")}>Precio</li>
            <li onClick={() => setOrden("puntuacion")}>Puntuación</li>
          </ul>
        </div>

        <ul>
          {juegosFiltrados.map((juego, index) => (
            <li key={index}>
              <strong>{juego.nombre}</strong> – ${juego.precio} – ⭐ {juego.puntuacion}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListaDeseados;
