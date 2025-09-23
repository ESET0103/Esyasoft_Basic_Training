import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    const getData = async() => {
        try{
            setLoading(true);
            const res = await axios.get(url)
            setData(res.data)

        }
        catch(error){
            setError(error.message)
        }
        finally{
            setLoading(false)
        }

    }

    useEffect(() => {getData()},[]);
  return [loading,data, error]
}

export default UseFetch
