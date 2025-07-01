
function ListaDeseados(){
    return(
        <><h1>Lista de deseados de User</h1><div>
        <input type="text" placeholder="buscar por nombre" />
        <div className="menu">
            <strong>Ordenar por:</strong>
            <ul className="submenu">
                <li>Nombre</li>
                <li>Precio</li>
                <li>Puntuacion</li>
            </ul>
        </div>
        </div></>
    );
}
export default ListaDeseados;