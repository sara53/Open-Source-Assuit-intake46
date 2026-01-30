import { useEffect, useState } from "react"


export default function Login( props ) {

    // useRef

    const { setIsLoggeddIn, setUser } = props
    const [ msg, setMsg ] = useState( "Welcome at ITI" )
    const [ inputValue, setInputValue ] = useState( '' )
    const loginHandler = () => {
        setIsLoggeddIn( true )
        setUser( inputValue );
    }

    const getInputValue = ( e ) => {
        setInputValue( e.target.value )
    }
    useEffect( () => {
        const id = setTimeout( () => {
            setMsg( 'You may be happy' )
        }, 1000 )
        return () => {
            clearTimeout( id )
            console.log( "clean up" )
        }
    }, [] )

    console.log( inputValue )
    return (

        <div className="container p-3 mt-5 border rounded">
            <h1 className="text-center">Login form</h1>
            <p className="w-40 bg-green-400 rounded text-center ">{msg}</p>
            <input name="username" value={inputValue} onChange={getInputValue} type="text" className="form-control mt-3" placeholder="Enter Your Name" />
            <button className="btn btn-dark mt-3" onClick={loginHandler}>Login</button>
        </div>
    )
}
