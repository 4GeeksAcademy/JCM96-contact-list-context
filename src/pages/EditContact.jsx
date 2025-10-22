import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const EditContact = () => {
    const { store, dispatch } = useGlobalReducer();
    const { theid } = useParams(); // Obtiene el ID del contacto de la URL
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    // Efecto para cargar los datos del contacto cuando el componente se monta o el ID cambia
    useEffect(() => {
        if (theid) {
            fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda_slug}/contacts/${theid}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("No se pudo cargar el contacto.");
                    }
                    return response.json();
                })
                .then(data => {
                    // Asegúrate de que los nombres de las propiedades coincidan con tu API
                    setFormData({
                        name: data.name || "",
                        email: data.email || "",
                        phone: data.phone || "",
                        address: data.address || ""
                    });
                })
                .catch(error => console.error("Error al cargar el contacto:", error));
        }
    }, [theid, store.agenda_slug]); // Dependencias: theid y agenda_slug

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda_slug}/contacts/${theid}`, {
            method: "PUT", // Usamos PUT para actualizar un recurso existente
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Hubo un error al actualizar el contacto");
            }
            return response.json();
        })
        .then(data => {
            console.log("Contacto actualizado:", data);
            // Opcional: podrías despachar una acción para actualizar el contacto en el store local
            // o simplemente recargar los contactos en la página principal.
            navigate('/'); // Navega de vuelta a la lista de contactos
        })
        .catch(error => console.error("Error al actualizar el contacto:", error));
    };

    return (
        <div className="justify-content-center mt-5 mx-5">
            <h1 className="pb-3 text-center">Edit Contact</h1>
            <form className="d-flex row gap-3 px-5 text-start" onSubmit={handleSubmit}>
                <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                <label htmlFor="email" className="form-label fw-bold">Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                <button className="btn btn-success mt-3" type="submit">Save Changes</button>
                <Link to={"/"} className="mt-3 d-block">Back to contacts</Link>
            </form>
        </div>
    );
};

export default EditContact;