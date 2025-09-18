import React, { useEffect, useState } from 'react'

const suggestionMaster = ["laptop","mobile","phone"];

const UseEffectComponent = () => {
    const [search, setSearch] = useState("")
    const [recommendation, setRecommendation] = useState(suggestionMaster);

    useEffect(
        () => {
          setRecommendation(suggestionMaster.filter((ele) => ele.includes(search)))
        } ,[search]
    )

  return (
    <div>
    <h1>jdoifnsoief</h1>
      <input value={search} onChange={(e) => setSearch(e.target.value)}/>
      {
        recommendation.map( (ele) => 
            <div>{ele}</div>
        )
      }
    </div>
  )
}

export default UseEffectComponent
