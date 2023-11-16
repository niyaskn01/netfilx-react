import React, { useEffect,useState } from 'react'
 import './banner.css'
 import axios from 'axios'
 import { API_KEY, baseULR ,imgURL } from '../constants/constants'

function Banner() {
  const [film,setFilm]=useState()
    useEffect(()=>{
    axios.get(baseULR+'/trending/all/week?api_key='+API_KEY)
  .then((res)=>{
    const randomIndex = Math.floor(Math.random() * res.data.results.length);
    
     setFilm(res.data.results[randomIndex])
     console.log(res.data.results[randomIndex]);
  })
  },[])

  return (
    <div className='banner'
    style={{backgroundImage: `url(${film?imgURL+film.backdrop_path:''})`}}>
      <div className="content">
        <h1 className="title">
          {film?film.title:''}
        </h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h2 className='description'>{film?film.overview:''}.</h2>
      </div>
      <div className="fade">
        
      </div>
    </div>
  )
}

export default Banner