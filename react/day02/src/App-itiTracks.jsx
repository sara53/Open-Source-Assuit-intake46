import ShowInfo from "./components/ShowInfo"


function App() {

  const itiTracks = [
    {
      id: 1,
      trackName: 'OS Track',
      students: [ "Ahmed", "Ali", "Mohamed" ],
      supName: "Mona salah"
    },
    {
      id: 2,
      trackName: 'PD Track',
      students: [ "Alaa", "Nancy", "Hoda", "Kareem" ],
      supName: "Ahmed hady",
      msg: "You may enjoy with us",
      msgLabel: "bg-green-400"
    }, {
      id: 3,
      trackName: 'Front Track',
      students: [ "Alaa", "Nancy", "Hoda", "Kareem" ],
      supName: "Amr hady",
      msg: "Happy Life",
      msgLabel: "bg-red-400"
    }
  ]
  const itiCards = itiTracks.map( ( track => {
    return <ShowInfo key={track.id} trackData={track} />
  } ) )

  return (

    <>

      {itiCards}

      {/* {
        itiTracks.map( track => {
          return ( <div key={track.id} className="bg-light">
            <h1>{track.trackName}</h1>
            <p>{track.msg}</p>
          </div> )
        } )//[h1,h1,h2]
      } */}
      {/* <ShowInfo trackData={itiTracks[ 0 ]}>
        <button className="btn btn-dark mx-3">Show More Details</button>
        <button className="btn btn-danger mx-3">Delete Track</button>
      </ShowInfo>
      <ShowInfo trackData={itiTracks[ 1 ]} />
      <ShowInfo trackData={itiTracks[ 2 ]} >
        <p className="alert alert-warning">Lorem ipsum dolor sit amet elit. Odit, illum?</p>
      </ShowInfo> */}


      {/* <ShowInfo welcomeMsg='Hello at iti' trackName={x} supName={supName} students={students} /> */}
      {/* <ShowInfo /> */}

    </>
  )
}

export default App
