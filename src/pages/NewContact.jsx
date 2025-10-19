// 1. Asegúrate de importar 'useState' y 'useNavigate'
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react"; // <--- ¡Asegúrate de que 'useState' esté importado!

export const NewContact = () => {

    const { store, dispatch } = useGlobalReducer();
    // 2. Llama al hook useNavigate
    const navigate = useNavigate(); 
    
    const [formData, setFormData] = useState({
        // OJO: La API espera "name", "phone", "email", "address"
        // Asegurémonos de que tu estado coincida con los nombres de la API
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    // 3. Esta es la función que maneja el envío
    const handleSubmit = (e) => {
        // 3.1. Previene que la página se recargue
        e.preventDefault();

        // 3.2. Aquí está el 'fetch' para ENVIAR (POST) datos
        fetch("https://playground.4geeks.com/contact/agendas/JCM96/contacts", {
            method: "POST", // Le decimos que queremos CREAR
            headers: {
                "Content-Type": "application/json" // Le decimos que enviaremos JSON
            },
            // 3.3. Aquí convertimos tu objeto de estado a un string JSON
            body: JSON.stringify(formData) 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Hubo un error al crear el contacto");
            }
            return response.json();
        })
        .then(data => {
            // 3.4. ¡Éxito! El contacto fue creado en la API
            console.log("Contacto creado:", data);
            
            // 3.5. Navegamos de vuelta a la lista de contactos
            navigate('/'); 
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <>
            <div className="justify-content-center mt-5 mx-5">
                <h1 className="pb-3 text-center">Add a New Contact</h1>
                
                {/* 4. Conectamos la función al 'onSubmit' del formulario */}
                <form className="d-flex row gap-3 px-5 text-start" onSubmit={handleSubmit}>

                    {/* 5. IMPORTANTE: Asegúrate de que el 'value' y el 'onChange' coincidan con el estado */}
                    <label htmlFor="nombre" className="form-label fw-bold">Nombre</label>
                    <input type="text" className="form-control" placeholder="Full Name" 
                           value={formData.name} 
                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />

                    <label htmlFor="email" className="form-label fw-bold">Email</label>
                    <input type="email" className="form-control" placeholder="Email" 
                           value={formData.email}
                           onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />

                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" placeholder="Teléfono" 
                           value={formData.phone}
                           onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />

                    <label htmlFor="dirección" className="form-label">Dirección</label>
                    <input type="text" className="form-control" placeholder="Dirección" 
                           value={formData.address}
                           onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />

                    <button className="btn btn-primary mt-3" type="submit">Add Contact</button>
                    <Link to={"/"} className="mt-3 d-block">Back to contacts</Link>
                </form>
            </div>
        </>
    );
}

export default NewContact;