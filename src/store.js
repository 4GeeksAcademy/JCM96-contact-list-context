export const initialStore=()=>{
  return{
    contacts: [
      {
        id: 1,
        nombre: "JCM96",
        telefono: "123456789",
        email: "asd@gmail.com",
      },
      {
        id: 2,
        nombre: "Nacho",
        telefono: "123451234",
        email: "Nacho@gmail.com",
      }
    ],
    // contacto: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
   case 'set_contacts':
      return {
        ...store,
        contacts: action.payload,
      };
    
    default:
      throw Error('Unknown action.');
  }    
}
