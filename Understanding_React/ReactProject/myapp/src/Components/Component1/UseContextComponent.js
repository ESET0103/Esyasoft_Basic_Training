import React, { useContext } from 'react'
import { Context } from '../../App'
const UseContextComponent = () => {

    const {theme, setTheme} = useContext(Context)

  return (
    <div>
      Use context component {theme}
    </div>
  )
}

export default UseContextComponent
