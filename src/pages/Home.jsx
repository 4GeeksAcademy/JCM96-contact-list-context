import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactoCard from "../components/ContactoCard.jsx";
import { useEffect } from "react";



export const Home = () => {
	
	const {store, dispatch} =useGlobalReducer()
	
	useEffect(() => {
		fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda_slug}/contacts`)
			
			.then(response => {
				if (!response.ok) {
					throw new Error("response.statusText");
				}
				return response.json();
			})
			.then(data => {
				dispatch({
					type: 'set_contacts',
					payload: data.contacts
				});
			})
			.catch(error => console.error("Error al obtener contactos:", error));
	}, [store.agenda_slug]);

	const handleDelete = (contactId) => {
		// 1. Mostrar confirmación antes de eliminar
        if (!window.confirm("¿Estás seguro de que quieres eliminar este contacto?")) {
            return;
        }

		// 2. Llamada a la API para eliminar
		fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda_slug}/contacts/${contactId}`, {
			method: "DELETE"
		})
		.then(response => {
			if (response.status !== 204) { // 204 respuesta esperada para el DELETE exitoso
				throw new Error("Error al eliminar el contacto. Estado: " + response.status);
			}
			// 3. Si se elimina en la API, se actualiza el store local
			dispatch({ type: 'delete_contact', payload: contactId });
		})
		.catch(error => console.error("Error al eliminar el contacto:", error));
	};

	return (
		<div className="text-center mt-5">
		{store.contacts.map((contact) => (
			<ContactoCard 
                    key={contact.id} // Es mejor usar el 'id' del contacto que el 'index'
                    {...contact}
					onDelete={handleDelete} />
		))}
		</div>
	);
}; 

// He importado el componente ContactoCard en el archivo Home.jsx para poder reutilizarlo
//  y mostrar la tarjeta de contacto en la página principal de la aplicación.