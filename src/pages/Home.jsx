import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactoCard from "../components/ContactoCard.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
		<ContactoCard/>
		</div>
	);
}; 

// He importado el componente ContactoCard en el archivo Home.jsx para poder reutilizarlo
//  y mostrar la tarjeta de contacto en la página principal de la aplicación.