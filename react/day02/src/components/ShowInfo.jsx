
export default function ShowInfo( props ) {

    console.log( props )

    const { trackData } = props


    return (
        <div className="container mt-5 bg-zinc-300 p-3 rounded-md">
            <h1 className="text-center underline">{trackData?.trackName || "Section Title"}</h1>
            <span className={`ml-4 ${trackData.msgLabel || 'bg-amber-300'} p-1 rounded-2xl text-center`}>{trackData?.msg || "Welcome"}</span>
            <p className="bg-light p-3 m-3 rounded"><strong className="text-danger mx-2">SupName : {trackData?.supName}</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam hic voluptatum laudantium modi facilis, aperiam quasi expedita! Reiciendis repudiandae et quisquam dolorem dicta reprehenderit vel consectetur doloremque dolorum quo.</p>
            <ul>
                {trackData.students.map( ( student ) => {
                    return <li>{student}</li>
                } )}
            </ul>
            {props.children}
        </div>
    )
}
