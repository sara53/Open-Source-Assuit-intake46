import { Children, useState } from "react";

export default function Counter() {

    // {}
    // const [ state, setState ] = useState({
    //     count: 0,
    //     title:'counter app'
    //})
    const [ count, setCount ] = useState( 0 )
    const [ title, setTitle ] = useState( "Counter app" )

    const increaseHandler = () => setCount( ( prev ) => prev + 1 )

    const decreaseHandler = () => {
        setCount( count - 1 )
        // setCount({...state,count:count+1})
    }
    const changeTitle = ( e ) => {

        setTitle( "New Title" )
        // setState({...state,title:"new Title"})
    }

    return (
        <div className="container alert alert-light p-3 mt-5">
            {console.log( "Render" )}
            <h1 className="text-center">{title}</h1>
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

