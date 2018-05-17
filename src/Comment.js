import React from 'react'
import PropTypes from 'prop-types'

export default function Comment({comments}){
    return (
        <div>
            <h4>{comments.user}</h4>
            <p>{comments.text}</p>
        </div>
    )
}

Comment.propTypes = {
    comments: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}