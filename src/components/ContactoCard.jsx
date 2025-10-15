import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHouse, faMobile, faEnvelope  } from '@fortawesome/free-solid-svg-icons'

const ContactoCard = ({ nombre, direccion,  telefono,   email}) => {

   return(
        <>
        {/* cada linea debe tener su icon 
        fontAwsome debe tener los svg de los 
        iconos */}
            <h1>{nombre}</h1>
            <p><FontAwesomeIcon icon={faHouse} />{direccion}</p>
            <p><FontAwesomeIcon icon={faMobile} />{telefono}</p>       
            <p><FontAwesomeIcon icon={faEnvelope} />{email}</p>       

        </>
   )
}


export default ContactoCard;