import { fireDB } from "./database";
import { collection, addDoc } from "firebase/firestore";

async function registerUser(data){
    const docRef = await addDoc(collection(fireDB, "prueba"), data);
      console.log("Document written with ID: ", docRef.id);
}

export {registerUser}
