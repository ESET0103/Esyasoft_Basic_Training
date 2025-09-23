import React from 'react'
import UseFetch from '../Hooks/UseFetch'

const ApiPage = () => {

    
    const [loading, data, error] = UseFetch("httsp://jsonplaceholder.typicode.com/posts")

    
  return (
      <div style={{textAlign:'center', color:'green'}}>
      <h1>Api Page</h1>
      {
        loading && <>loading...</>
      }
      {
        !loading && error && <>{error.message}</>
      }
      {
        !loading && !error && data && data.map((ele) => <div key={ele.key}>{ele.id} {ele.title}</div>)
      }
    </div>
  )
}

export default ApiPage
