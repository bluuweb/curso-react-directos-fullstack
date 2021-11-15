import { useState } from "react/cjs/react.development";

const Formulario = () => {
    const [todo, setTodo] = useState({
        todoName: "",
        todoDescripcion: "",
        todoEstado: "pendiente",
        todoCheck: false,
    });

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const { todoName, todoDescripcion } = todo;

        if (!todoDescripcion.trim() || !todoName.trim()) {
            setError(true);
            return;
        }

        setError(false);

        console.log(todo);

        setTodo({
            todoName: "",
            todoDescripcion: "",
            todoEstado: "pendiente",
            todoCheck: false,
        });
    };

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const PintarError = () => (
        <div className="alert alert-danger">Campos obligatorios</div>
    );

    return (
        <>
            <h2>No controlado</h2>

            {error && <PintarError />}

            <form onSubmit={handleSubmit}>
                <input
                    name="todoName"
                    placeholder="Ingrese Todo"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.todoName}
                />
                <textarea
                    name="todoDescripcion"
                    className="form-control mb-2"
                    placeholder="Ingrese descripcion del todo"
                    onChange={handleChange}
                    value={todo.todoDescripcion}
                />
                <select
                    className="form-control mb-2"
                    name="todoEstado"
                    onChange={handleChange}
                    value={todo.todoEstado}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>

                <div className="form-check">
                    <input
                        id="flexCheckDefault"
                        className="form-check-input"
                        type="checkbox"
                        name="todoCheck"
                        checked={todo.todoCheck}
                        onChange={handleChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Dar prioridad
                    </label>
                </div>

                <button className="btn btn-primary" type="submit">
                    Agregar
                </button>
            </form>
        </>
    );
};

export default Formulario;
