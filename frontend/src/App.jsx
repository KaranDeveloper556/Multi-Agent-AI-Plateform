import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../utils/firebase"

const App = () => {

  const googleLogin = async () => {
    const data = await signInWithPopup(auth, googleProvider);
    console.log(data);
  }

  return (
    <div>
      <button className='px-6 py-4 m-10 bg-blue-600 rounded-2xl cursor-pointer' onClick={googleLogin}>Continue with Google</button>
    </div>
  )
}

export default App