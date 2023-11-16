import React, { useEffect, useState } from 'react'
import './rowpost.css'
 import axios from 'axios'
 import {imgURL} from '../constants/constants'

function RowPost(props) {
  const [movie,setMovie]=useState([])
  useEffect(()=>{
    axios.get(props.url)
  .then((res)=>{
    setMovie(res.data.results)
  })
  })
  
  return (
    <div className='row'>
      <h3>{props.title}</h3>
      <div className="posters">
         { 
         movie.map((m)=>{
            return(
              <div>
                <img className={props.isSmall?'smallposter':'poster'} src={imgURL+m.backdrop_path} alt="not added" />
                {props.isSmall?'':<h4 className='h4'>{m.title}</h4>}
                
              </div>
            )
          })
          }
        
      </div>
    </div>
  )
}

export default RowPost