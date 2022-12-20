import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app); 

async function CreateAccount(email,password){
  const result = await createUserWithEmailAndPassword(auth,email,password)
  return result;
}

async function SignInEmailAndPassword(email,password){
  const result = await signInWithEmailAndPassword(auth,email,password)
  return result;
}

async function EmailAndPasswordSignOut() {
  const result = await signOut(auth);
  return result;
};

function getUser(){
  const user = auth.currentUser
  return user
}

export { getUser, CreateAccount, SignInEmailAndPassword, EmailAndPasswordSignOut};
