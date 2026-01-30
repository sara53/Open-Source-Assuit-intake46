import { useState } from "react"
import Counter from "./components/Counter-useEffect"
import Login from "./components/Login"
import UserProfile from "./components/UserProfile"

function App() {


  const [ isLoggedIn, setIsLoggeddIn ] = useState( false )
  const [ user, setUser ] = useState( null )
  return (

    <>
      {!isLoggedIn && <Login setIsLoggeddIn={setIsLoggeddIn} setUser={setUser} />}
      {isLoggedIn && <UserProfile setIsLoggeddIn={setIsLoggeddIn} user={user} />}
    </>
  )
}

export default App
