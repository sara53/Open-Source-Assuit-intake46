import { Children, useEffect, useState } from "react";

export default function Counter() {

    /**
     * no dependancy arr -- didMount,after change any state
     * [] == (callbackfunction) ==> only one
     * [stateName] == componentDidMount , after change StateName
     * [stateName1,StateName2] componenDidMount , , after change StateName1 & ,  StateName2
     * ---------------------------------------------------------------------------------------
     * -- cleanup function
     * 
     */
    const [ count, setCount ] = useState( 0 )
    const [ title, setTitle ] = useState( "Counter app" )

    const increaseHandler = () => setCount( ( prev ) => prev + 1 )

    const decreaseHandler = () => {
        setCount( count - 1 )

    }
    const changeTitle = ( e ) => {

        setTitle( "New Title" )

    }

    useEffect( () => {

        // console.log( "callback in useEffect" )
        // setTimeOutim()
        console.log( 'SetTimeout' )
        return () => {
            console.log( "Clear timeout" )
            // console.log( "Clean up function" )
        }
        // promise
    }, [ count, title ] )

    // useEffect( () => {
    //     console.log( "Send request to api" )
    // }, [] )


    return (
        <div className="container alert alert-light p-3 mt-5">
            {console.log( "Render" )}
            <h1 className="text-center">{title}</h1>
            <input type="text" className="form-control" />
            <p className="lead mx-3">Count : <strong className="text-danger"> {count} </strong></p>
            {( count >= 5 ) && <p className="bg-green-600 w-40 rounded  text-center text-light">Free Shipping</p>}
            <button className="btn  btn-outline-primary mx-3" onClick={increaseHandler}> Increase</button>
            <button className="btn  btn-outline-primary mx-3" onClick={() => setCount( 0 )}> Rest</button>
            <button className="btn  btn-outline-danger mx-3" onClick={decreaseHandler}> Decrease</button>
            <button className="btn  btn-outline-dark mx-3" onClick={changeTitle}> Change Title</button>
        </div>
    )
}
// useEffect

