import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMobile, faEnvelope, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

const ContactoCard = ({ nombre, direccion, telefono, email }) => {
    return (
        <div className="container border py-3 my-3 rounded-3 shadow-lg">
            <div className="row w-100 align-items-center">
                <div className="col-sm-3 d-flex justify-content-center align-items-center mb-3 mb-sm-0 pt-4">
                    <img src="https://picsum.photos/200" alt="Imagen de perfil" className="rounded-circle" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                </div>
                <div className="col-sm-9">
                    <div className="d-flex justify-content-end mb-2">
                        <button className="btn btn-primary m-1" aria-label="Editar"><FontAwesomeIcon icon={faPencil} /></button>
                        <button className="btn btn-danger m-1" aria-label="Eliminar"><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                    <div className="text-start">
                        <h2 className="mb-3">{nombre}</h2>
                        <p className="text-muted mb-2"><FontAwesomeIcon icon={faHouse} className="me-3" />{direccion || "123 Fake St, Anytown, USA"}</p>
                        <p className="text-muted mb-2"><FontAwesomeIcon icon={faMobile} className="me-3" />{telefono || "(800) 555-1234"}</p>
                        <p className="text-muted mb-2"><FontAwesomeIcon icon={faEnvelope} className="me-3" />{email || "jhon@example.com"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactoCard;
// he finalizado el código frontend de este componente ContactoCard.jsx
// falto agregar la lógica para manejar los eventos de los botones de editar y eliminar, pero la estructura visual está completa.
// ademas , he utilizado FontAwesome para los iconos y Bootstrap para el diseño y estilo del componente.
// y por ultimo voy a nececesitar importar este componente en el archivo principal de la aplicación para poder re-utilizarlo.