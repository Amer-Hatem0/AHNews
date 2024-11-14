import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import img from './home.jpg'
import axios from 'axios'
import Swal from 'sweetalert2'
const One = () => {


// http://api.mediastack.com/v1/news?access_key=a34c4e85f7a868ddf51aa3923a7d9d18&sources=cnn,bbc

  let [trand2, settrand2] = useState([])
  async function getTrendings2() {
    let { data } = await axios.get('http://api.mediastack.com/v1/news?access_key=fb0205bd85cb4bf4b340149e00629bf9&sources=cnn');
    settrand2(data.data);
  }

  useEffect(() => {
    getTrendings2()
  }, [])



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const successAlert = (description, url) => {
    Swal.fire({
        title: description,
        text: url,

    });
};

  return (
    <div>

      <Slider {...settings} className='one-img'>

{/*  onClick={() => successAlert(trand2[0].description, trand2[0].url)}
                                                                */}
        {trand2.length > 0 && (
          <>
            <div className='upinfo ' >
              <img src={trand2[0].image} alt="Image 1"  />
              <div className="infoimg overlay overlay" onClick={() => successAlert(trand2[0].description, trand2[0].url)}>
                <h3>{trand2[0].title.split(" ").slice(0, 3).join(" ")}</h3>
                <p> {trand2[0].category}</p></div>
            </div>
          </>
        )}
        {trand2.length > 0 && (
          <>
            <div className='upinfo' >
              <img src={trand2[1].image} alt="Image 1"   />
              <div className="infoimg overlay" onClick={() => successAlert(trand2[1].description, trand2[1].url)}>
                <h3>{trand2[1].title.split(" ").slice(0, 3).join(" ")}</h3>
                <p> {trand2[1].category}</p></div>
            </div>
          </>
        )}
        {trand2.length > 0 && (
          <>
            <div className='upinfo' >
              <img src={trand2[3].image} alt="Image 1" />
              <div className="infoimg overlay"  onClick={() => successAlert(trand2[3].description, trand2[3].url)}>
                <h3>{trand2[3].title.split(" ").slice(0, 3).join(" ")}</h3>
                <p> {trand2[3].category}</p></div>
            </div>
          </>
        )}
        {trand2.length > 0 && (
          <>
            <div className='upinfo' >
              <img src={trand2[4].image} alt="Image 1"   />
              <div className="infoimg overlay" onClick={() => successAlert(trand2[4].description, trand2[4].url)}>
                <h3>{trand2[4].title.split(" ").slice(0, 3).join(" ")}</h3>
                <p> {trand2[4].category}</p></div>
            </div>
          </>
        )}
        {trand2.length > 0 && (
          <>
            <div className='upinfo' >
              <img src={trand2[2].image} alt="Image 1" />
              <div className="infoimg overlay"  onClick={() => successAlert(trand2[2].description, trand2[2].url)}>
                <h3>{trand2[2].title.split(" ").slice(0, 3).join(" ")}</h3>
                <p> {trand2[2].category}</p></div>
            </div>
          </>
        )}
        {trand2.length > 0 && (
          <>
            <div className='upinfo' >
              <img src={trand2[6].image} alt="Image 1"  />
              <div className="infoimg overlay" onClick={() => successAlert(trand2[6].description, trand2[6].url)} >
                <h3>{trand2[6].title.split(" ").slice(0, 3).join(" ")}</h3>
                <p> {trand2[6].category}</p></div>
            </div>
          </>
        )}
        {trand2.length > 0 && (
          <>
            <div className='upinfo' >
              <img src={trand2[10].image} alt="Image 1" />
              <div className="infoimg overlay"  onClick={() => successAlert(trand2[10].description, trand2[10].url)}>
                <h3>{trand2[10].title.split(" ").slice(0, 3).join(" ")}</h3>
                <p> {trand2[10].category}</p></div>
            </div>
          </>
        )}
        {trand2.length > 0 && (
          <>
            <div className='upinfo' >
              <img src={trand2[8].image} alt="Image 1" />
              <div className="infoimg overlay"  onClick={() => successAlert(trand2[8].description, trand2[8].url)}>
                <h3>{trand2[8].title.split(" ").slice(0, 3).join(" ")}</h3>
                <p> {trand2[8].category}</p></div>
            </div>
          </>
        )}



  

      </Slider>
    </div>
  );
};

export default One;
