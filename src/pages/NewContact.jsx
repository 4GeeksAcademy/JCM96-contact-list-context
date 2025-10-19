import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";




export const NewContact = () => {

  const {store, dispatch} =useGlobalReducer()

    return (
        <>
            <div className="justify-content-center mt-5 mx-5">
                    <h1 className="pb-3 text-center">Add a New Contact</h1>
                <form className="d-flex row gap-3 px-5 text-start">
                    <label htmlFor="fullName" className="form-label fw-bold">Full Name</label>
                    <input type="text" className="form-control" name="fullName" placeholder="Full Name"/>
                    <label htmlFor="email" className="form-label fw-bold">Email</label>
                    <input type="email" className="form-control fw-bold" name="email" placeholder="Email" />
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control fw-bold" name="phone" placeholder="Phone"/>
                    <label htmlFor="address" className="form-label ">Address</label>
                    <input type="text" className="form-control fw-bold" name="address" placeholder="Address"/>
                    <button className=" btn btn-primary mt-3" type="submit">Add Contact</button>
                    <Link to={"/"} className="mt-3 d-block">Back to contacts</Link>
                </form>
            </div>


            {/* <div className="justify-content-center text-center mt-5 mx-5">
                <h1 className="">Add a New Contact</h1>
                <form className="d-flex row gap-3 px-5">
                    full Name: <input type="text" name="fullName" placeholder="fullName" /><br />
                    email: <input type="email" name="email" placeholder="Email" /><br />
                    phone: <input type="text" name="phone" placeholder="Phone"/><br />
                    address: <input type="text" name="address" placeholder="Adress"/><br />
                    <button className=" btn btn-primary" type="submit">Add Contact</button>
                    <Link to={"/"} className="">Back to contacts</Link>
                </form>
            </div> */}
        </>

    );
}
export default NewContact;

// He creado un  llamado NewContact.jsx
// Este componente contiene un formulario básico para agregar un nuevo contacto con campos para nombre completo, correo electrónico, teléfono y dirección.
// También incluye un botón para enviar el formulario y un enlace para volver a la página principal de contactos.
// Aún falta implementar la lógica para manejar el envío del formulario y actualizar el estado global con el nuevo contacto.