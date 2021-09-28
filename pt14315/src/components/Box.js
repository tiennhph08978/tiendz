import React from 'react'
import PropTypes from 'prop-types'
import './Box.css'

const Box = props => {
    return (
        <div className="box" style={{background: props.color}}>
            
        </div>
    )
}

Box.propTypes = {

}

export default Box
