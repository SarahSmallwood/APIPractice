import React from 'react'

function Pet(props) {
    
    return (
    <div>
        {props.allInfo.map((data)=>{
            return <h1 className='animal'>{data.animals}</h1>
        })}
    </div>
    )
}

export default Pet