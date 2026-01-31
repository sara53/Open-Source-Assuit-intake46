import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../store/slices/counterSlice";
import { movieActions } from "../store/slices/movieSlice";


function createAction( data ) {
    return {
        type: "INCREASE",
        payload: data
    }
}
export function Counter() {

    const { add } = movieActions
    const { increase, decrease } = counterActions
    const { count } = useSelector( ( state ) => state.counterSlice )
    const movies = useSelector( ( state ) => state.movieSlice )

    const dispatch = useDispatch();

    console.log( movies )


    // const increaseHandler = () => {

    //     dispatch( createAction( 5 ) )
    // }
    const increaseHandler = () => {
        dispatch( increase( 10 ) )

    }
    const decreaseHandler = () => {
        dispatch( decrease( 5 ) )


    }


    return (
        <div className="container mt-5">
            <h1 className="text-center">Counter app</h1>
            <p className="lead"> Count : {count} </p>
            <button className="btn btn-success mx-1" onClick={increaseHandler}>Increase</button>
            <button className="btn btn-danger mx-1" onClick={decreaseHandler}>decrease</button>
            <button className="btn btn-dark mx-1" onClick={() => dispatch( add() )}>Add To Movies</button>

            {movies.map( movie => <h1 className="bg-amber-100 p-2 mt-3" key={movie.id}>{movie.name}</h1> )}

        </div>
    )
}
