import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactoCard from "../components/ContactoCard.jsx";
import { useEffect } from "react";



export const Home = () => {
	
	const {store, dispatch} =useGlobalReducer()
	
	useEffect(() => {
		fetch("https://playground.4geeks.com/contact/agendas/JCM96/contacts")
			
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
	}, []);
// ¡Agrega esta línea!
    console.log("Contactos en el store:", store.contacts);
	return (
		<div className="text-center mt-5">
		{store.contacts.map((contact) => (
			<ContactoCard 
                    key={contact.id} // Es mejor usar el 'id' del contacto que el 'index'
                    {...contact}
					/>
			// <ContactoCard key={index} {...contact}/>
		))}
		</div>
	);
}; 

// He importado el componente ContactoCard en el archivo Home.jsx para poder reutilizarlo
//  y mostrar la tarjeta de contacto en la página principal de la aplicación.