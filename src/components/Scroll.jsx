import React from "react"

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', scrollbarWidth: 'none', borderTop: '1px solid black', height: '740px'}}>
            {props.children}
        </div>
    )
}

export default Scroll