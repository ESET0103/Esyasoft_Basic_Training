import { useEffect, useState } from "react"
import React from 'react'

const CallAnApiComponent = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const getData = () => {
        setLoading(true)
        let a = fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => data.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => {setError(error)})
        .finally(setLoading(false))
    
    }


    useEffect(getData,[])


  return (
    <div>
      {
        error != null ? <>{error.messsage}</>:<></>
      }
      {
        loading && <>Loading...</>
      }
      {
        data.map((element) => 
            <div key={element.id} >
                {element.id} {element.title}
            </div>
        )
      }
    </div>
  )
}

export default CallAnApiComponent
