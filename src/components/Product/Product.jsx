import React, { useEffect, useState } from 'react'

import axios from 'axios'
export default function Product() {
  let [movies, setMoveis] = useState([])
  async function getTrendingMovies() {
    let { data } = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-05-16&sortBy=publishedAt&apiKey=1d8a55dd32754ac2a53f63a870e1e0da');
    setMoveis(data.articles);
  }
  
  useEffect(() => {
    getTrendingMovies()
  }, [])
  return (
    <div>
    
      <div className='container'>
        <h2 className='mb-3 mt-5'>Movies</h2>
        <div className="row">
          {
            movies.map((movie,index)=>{
return    <div className="col-md-3 my-3" key={index}>
<div className="card p-2">
  <img className='rounded' src={movie.urlToImage} alt={movie.description} />
  <h3>{movie.content.split(" ").slice(0,3).join(" ")}</h3>
  <p>Votes:{movie.publishedAt}</p>
</div>
</div>
            })
          }
       
        </div>
      </div>
    </div>

  )
}
