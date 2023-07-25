import React from 'react'

function Organization() {
  return (
    <div> {props.allInfo.map((data)=>{
        return <h2 className='organization'>{data.organization_id}</h2>
    })}
    </div>
  )
}

export default Organization