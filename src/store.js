export const initialStore=()=>{
  return{
    // El nombre único para tu agenda en la API.
    // ¡Puedes cambiar "JCM96" por el que prefieras!
    agenda_slug: "JCM96",
    // Los contactos se cargarán desde la API.
    contacts: [],
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
