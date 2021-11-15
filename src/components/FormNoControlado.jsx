import { useRef } from "react";

const FormNoControlado = () => {
    const formulario = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const datos = new FormData(formulario.current);

        // console.log(...datos.entries());

        const objetoDatos = Object.fromEntries([...datos.entries()]);
        console.log(objetoDatos);

        const { todoDescripcion, todoName } = objetoDatos;
        if (!todoDescripcion.trim() || !todoName.trim()) {
            console.log("noooopoooo está vacio");
            return;
        }

        console.log("pasó validaciones");
    };

    return (
        <>
            <h2>No controlado</h2>
            <form ref={formulario} onSubmit={handleSubmit}>
                <input
                    name="todoName"
                    placeholder="Ingrese Todo"
                    type="text"
                    className="form-control mb-2"
                    defaultValue="Tarea #01"
                />
                <textarea
                    name="todoDescripcion"
                    className="form-control mb-2"
                    placeholder="Ingrese descripcion del todo"
                    defaultValue="Descripcion Tarea #01"
                />
                <select
                    className="form-control mb-2"
                    name="todoEstado"
                    defaultValue="pendiente"
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>
                <button className="btn btn-primary" type="submit">
                    Agregar
                </button>
            </form>
        </>
    );
};

export default FormNoControlado;
