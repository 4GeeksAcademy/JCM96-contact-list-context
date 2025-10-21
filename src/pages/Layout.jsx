import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar"
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
const noNavbarRoutes = ["/newcontact"];

export const Layout = () => {
    const location = useLocation();
    const { store } = useGlobalReducer();
    const showNavbar = !noNavbarRoutes.includes(location.pathname);

    // Este efecto se ejecuta una sola vez para crear la agenda si no existe.
    useEffect(() => {
        // Primero, intentamos obtener la agenda.
        fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda_slug}`)
        .then(response => {
            // Si la respuesta es 404, la agenda no existe, entonces la creamos.
            if (response.status === 404) {
                console.log(`Agenda '${store.agenda_slug}' no encontrada. Creando...`);
                return fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda_slug}`, { 
                    method: "POST" 
                });
            }
            return response;
        })
        .then(response => console.log(`Estado de la agenda '${store.agenda_slug}':`, response.status))
        .catch(error => console.error("Error al verificar/crear la agenda:", error));
    }, [store.agenda_slug]); // Se ejecuta si el slug de la agenda cambia.

    return (
        <>
            {showNavbar && <Navbar />}
            <Outlet />
        </>
    )
}