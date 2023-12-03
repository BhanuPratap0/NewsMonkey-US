import React from 'react'
import gif from './giphy.gif'

const Loading=()=>{

    return (
      <div className='text-center my-3'>
        <img style={{height:"220px",width:"220px"}} src={gif} alt="loading" />
      </div>
    )
    }

export default Loading
