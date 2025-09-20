import React from 'react'
import PropTypes from 'prop-types'

const PropTypeComponent = ({}) => {



  return (
    <div>
      
    </div>
  )
}

PropTypeComponent.propTypes = {
    name: PropTypes.string,
    usn: PropTypes.number.isRequired
}
export default PropTypeComponent
