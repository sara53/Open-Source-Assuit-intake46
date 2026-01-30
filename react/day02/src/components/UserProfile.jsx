
export default function UserProfile( props ) {
    const { setIsLoggeddIn, user } = props

    return (
        <div className="container p-3 mt-5 border rounded">
            <h2 className="text-center">Profile Details</h2>
            <p className="lead  ml-3 mt-3">Welcome : <strong>{user || "Default Name"}</strong></p>
            <p className="bg-light p-3 my-3 rounded">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequuntur numquam quae tenetur, voluptates et?</p>
            <button className="btn btn-danger" onClick={() => setIsLoggeddIn( false )}>Logout</button>
        </div>
    )
}
