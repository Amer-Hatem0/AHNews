import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import axios from 'axios'
import One from './One';
import Swal from 'sweetalert2'
export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
  };


  const settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings2: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings2: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings2: {
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


  let [trand, settrand] = useState([])
  async function getTrendings() {
    let { data } = await axios.get(' https://newsapi.org/v2/everything?q=apple&from=2023-06-15&to=2023-06-15&sortBy=popularity&apiKey=1d8a55dd32754ac2a53f63a870e1e0da');
    settrand(data.articles);
  }

  useEffect(() => {
    getTrendings()
  }, [])


  let [headlines, setMoveis] = useState([])
  async function getTrendingMovies() {
    let { data } = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1d8a55dd32754ac2a53f63a870e1e0da');
    setMoveis(data.articles);
  }

  useEffect(() => {
    getTrendingMovies()
  }, [])


  let [Tesla, setTesla] = useState([])
  async function getTesla() {
    let { data } = await axios.get('https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=1d8a55dd32754ac2a53f63a870e1e0da');
    setTesla(data.articles);
  }

  useEffect(() => {
    getTesla()
  }, [])

  // //////////////////////////////////////////////////

  let [TechCrunch, setTechCrunch] = useState([])
  async function getTechCrunch() {
    let { data } = await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1d8a55dd32754ac2a53f63a870e1e0da');
    setTechCrunch(data.articles);
  }

  useEffect(() => {
    getTechCrunch()
  }, [])

  let [usa, setusa] = useState([])
  async function getusa() {
    let { data } = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1d8a55dd32754ac2a53f63a870e1e0da');
    setusa(data.articles);
  }

  useEffect(() => {
    getusa()
  }, [])
  // ///////////////////////////////////////////////

  // let [Last, setLast] = useState([])
  // async function getLast() {
  //   let { data } = await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1d8a55dd32754ac2a53f63a870e1e0da');
  //   setLast(data.articles);
  // }

  // useEffect(() => {
  //   getLast()
  // }, [])


  let [science, setscience] = useState([])
  async function getscience() {
    let { data } = await axios.get('http://api.mediastack.com/v1/news?access_key=fb0205bd85cb4bf4b340149e00629bf9&keywords=tennis&countries=us,gb,de');
    setscience(data.data);
  }

  useEffect(() => {
    getscience()
  }, [])
  const [showCode, setShowCode] = useState(false);

  const handleShowCode = () => {
    setShowCode(true);
  };
  const handleNoneCode = () => {
    setShowCode(false);
  };


  return <>
    <div className="row sliderhome">
      <div className="Breaking d-none mb-2 d-md-block">
        <span>Breaking News</span>
        {TechCrunch.length > 1 && (



          <marquee className="news-ticker">

            <p className='me-5'>{TechCrunch[1].content}</p>
          </marquee>



        )}
      </div>
      <div className="col-lg-7  ">
        <Slider {...settings}>
          <div id="carouselExampleIndicators" className="carousel slide ">
            <div className="row">
              <div className="col-lg-12 p-0 px-0">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item item active">
                    <div className="">
                      <div className="position-relative overflow-hidden" >
                        {TechCrunch.length > 0 && (
                          <div className='caro-div'>
                            <img className=" w-100 h-100" src={TechCrunch[1].urlToImage} alt={TechCrunch[1].title} onClick={() => successAlert(TechCrunch[1].description, TechCrunch[1].url)} />
                            <div className="overlay">
                              <h3>{TechCrunch[1].title.split(" ").slice(0, 3).join(" ")}</h3>
                              <p> {TechCrunch[1].publishedAt}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item item active">
                    <div className="">
                      <div className="position-relative overflow-hidden" >
                        {TechCrunch.length > 0 && (
                          <div className='caro-div'>
                            <img className=" w-100 h-100" src={TechCrunch[0].urlToImage} alt={TechCrunch[3].title} />
                            <div className="overlay">
                              <h3>{TechCrunch[0].title.split(" ").slice(0, 3).join(" ")}</h3>
                              <p> {TechCrunch[0].publishedAt}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>



                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon " aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>

              </div>


            </div>

          </div>

        </Slider >

      </div>



      <div className="col-lg-5 ">

        <div className="row mx-0">
          <div className="col-md-6 px-0">
            <div className="position-relative overflow-hidden" style={{ height: 250 }}>

              {usa.length > 0 && (

                <>
                  <img className="img-fluid w-100 h-100" src={usa[4].urlToImage} alt={usa[4].title} style={{ objectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <h3>{usa[4].title.split(" ").slice(0, 3).join(" ")}</h3>
                    </div>
                    <p> {usa[4].publishedAt}</p>
                  </div>


                </>

              )}


            </div>
          </div>
          <div className="col-md-6  px-0">
            <div className="position-relative overflow-hidden" style={{ height: 250 }}>

              {usa.length > 0 && (

                <>
                  <img className="img-fluid w-100 h-100" src={usa[1].urlToImage} alt={usa[1].title} style={{ objectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <h3>{usa[1].title.split(" ").slice(0, 3).join(" ")}</h3>
                    </div>
                    <p> {usa[1].publishedAt}</p>
                  </div>


                </>

              )}


            </div>
          </div>
          <div className="col-md-6  px-0">
            <div className="position-relative overflow-hidden" style={{ height: 250 }}>

              {usa.length > 0 && (

                <>
                  <img className="img-fluid w-100 h-100" src={usa[2].urlToImage} alt={usa[2].title} style={{ objectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <h3>{usa[2].title.split(" ").slice(0, 3).join(" ")}</h3>
                    </div>
                    <p className=''> {usa[2].publishedAt}</p>
                  </div>


                </>

              )}


            </div>
          </div>
          <div className="col-md-6  px-0">
            <div className="position-relative overflow-hidden" style={{ height: 250 }}>

              {usa.length > 0 && (

                <>
                  <img className="img-fluid w-100 h-100" src={usa[3].urlToImage} alt={usa[3].title} style={{ objectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <h3>{usa[3].title.split(" ").slice(0, 3).join(" ")}</h3>
                    </div>
                    <p> {usa[3].publishedAt}</p>
                  </div>


                </>

              )}


            </div>
          </div>


        </div>
      </div>
    </div>






    <div className="container-fluid pt-5 mb-3">

      <div className="container rev2">
        <div className="section-title">
          <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
        </div>
        <One />
      </div>
    </div>

    <div className="container-fluid rev2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row lastnews">
              <div className="col-12">
                <div className="section-title">
                  <h4 className="m-0 text-uppercase font-weight-bold">Latest News</h4>

                </div>
              </div>

              {Tesla.length > 6 && (
                <>
                  {[...Array(6)].map((_, index) => {
                    const incrementedIndex = index + 1;
                    return (
                      <div className="col-lg-6 imgnews" key={index}>
                        <div className="position-relative mb-3">
                          <div className='last-div '>
                            {/* class="button" */}
                            <div className="imghome ">
                              <div className="button">
                                <img className="w-100 h-100" src={Tesla[incrementedIndex].urlToImage} alt={Tesla[incrementedIndex].title} onClick={() => successAlert(Tesla[incrementedIndex].description, Tesla[incrementedIndex].url)} />
                              </div>
                            </div>
                            <div className="bg-white border border-top-0 p-4">
                              <div className="overla">

                                <h3 className='text-dark tesla-h3 fz-18 fw-500 '>{Tesla[incrementedIndex].title.split(" ").slice(0, 3).join(" ")}</h3>
                                <p className='small tesla-p'>{Tesla[incrementedIndex].publishedAt}</p>
                                <Link to={`/${Tesla[incrementedIndex].source.name}`}>
                                  <div class="fancy" href="#">
                                    <span class="top-key"></span>
                                    <span class="text-black more">More</span>
                                    <span class="bottom-key-1"></span>
                                    <span class="bottom-key-2"></span>
                                  </div>
                                </Link>

                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}





              {/*    <div class="col-lg-4 cardm my-5 pt-5 py-2">
                        <div class="card">
                     
                          <img className="" src={Tesla[incrementedIndex].urlToImage} alt={Tesla[incrementedIndex].title} onClick={() => successAlert(Tesla[incrementedIndex].description, Tesla[incrementedIndex].url)} />
                          <Link to={`/${Tesla[incrementedIndex].source.name}`}>  More</Link> 
                            
                        </div>
                     
                        <div class="card2">
                        <div className="upper"> 
                        <h3 className='text-dark tesla-h3 fz-18 fw-500 '>{Tesla[incrementedIndex].title.split(" ").slice(0, 3).join(" ")}</h3>
                              </div>

                          <div class="lower">
                          <p className=''>{Tesla[incrementedIndex].publishedAt}</p> 


                            <div class="card3"> 
                              <Link to={`/${Tesla[incrementedIndex].source.name}`}>  More</Link> 
                            
                            </div>
                          </div>
                        </div>

                      </div> */}



              {/*   onClick={() => successAlert(headlines[incrementedIndex].description, headlines[incrementedIndex].url)}  */}

              <div className="col-lg-12">
                {headlines.length > 0 && (

                  <div className="row news-lg mx-0 mb-3">
                    <div className="col-md-6 imgnews2 px-0">
                      <img className="" src={headlines[2].urlToImage} style={{ objectFit: 'cover' }} onClick={() => successAlert(headlines[2].description, headlines[2].url)} />
                    </div>
                    <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                      <p className="p-3 text-black">{headlines[2].title}</p>
                      <p className="p-3 ">{headlines[2].description}</p>

                      <div className="mt-auto p-4">

                        <div className="mb-2">
                          <a className="text-body" href><small className='tesla-p'> {headlines[2].publishedAt}</small></a>
                        </div>

                      </div>

                    </div>
                  </div>)}
              </div>

              <div className="col-lg-12  m-auto">




                {showCode && (
                  <pre>
                    {science.length > 6 && (
                      <>
                        {[...Array(6)].map((_, index) => {
                          const incrementedIndex = index + 11;
                          return (
                            <div className="col-lg-12 imgnews rev2" key={index}>
                              <div className="position-relative mb-3">
                                <div className='last-div '>
                                  <div className="imghome">
                                    <img
                                      className="w-100 h-100"
                                      onClick={() => successAlert(science[incrementedIndex].description, science[incrementedIndex].url)}
                                      src={science[incrementedIndex].image}
                                      alt={science[incrementedIndex].title}
                                    />
                                  </div>
                                  <div className="bg-white border border-top-0 p-4">
                                    <div className="overla">
                                      <h3 className='text-dark tesla-h3 fw-500 '>{science[incrementedIndex].title.split(" ").slice(0, 3).join(" ")}</h3>
                                      <p className='tesla-p small'>{science[incrementedIndex].published_at}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </pre>
                )}
                <div className="b  ">
                  <button className='more-less' onClick={handleShowCode}>Load More</button>
                  <button className='more-less' onClick={handleNoneCode}>Hide</button>

                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {/* Social Follow Start */}
            <div className="mb-3">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">Follow Us</h4>
              </div>
              <div className="bg-white border border-top-0 p-3">
                <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#39569E' }}>
                  <i className="fab fa-facebook-f text-center py-4 mr-3" style={{ width: 65, background: 'rgba(0, 0, 0, .2)' }} />
                  <span className="font-weight-medium">12,345 Fans</span>
                </a>
                <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#52AAF4' }}>
                  <i className="fab fa-twitter text-center py-4 mr-3" style={{ width: 65, background: 'rgba(0, 0, 0, .2)' }} />
                  <span className="font-weight-medium">12,345 Followers</span>
                </a>
                <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#0185AE' }}>
                  <i className="fab fa-linkedin-in text-center py-4 mr-3" style={{ width: 65, background: 'rgba(0, 0, 0, .2)' }} />
                  <span className="font-weight-medium">12,345 Connects</span>
                </a>
                <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#C8359D' }}>
                  <i className="fab fa-instagram text-center py-4 mr-3" style={{ width: 65, background: 'rgba(0, 0, 0, .2)' }} />
                  <span className="font-weight-medium">12,345 Followers</span>
                </a>
                <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#DC472E' }}>
                  <i className="fab fa-youtube text-center py-4 mr-3" style={{ width: 65, background: 'rgba(0, 0, 0, .2)' }} />
                  <span className="font-weight-medium">12,345 Subscribers</span>
                </a>
                <a href className="d-block w-100 text-white text-decoration-none" style={{ background: '#055570' }}>
                  <i className="fab fa-vimeo-v text-center py-4 mr-3" style={{ width: 65, background: 'rgba(0, 0, 0, .2)' }} />
                  <span className="font-weight-medium">12,345 Followers</span>
                </a>
              </div>
            </div>
            {/* Social Follow End */}
            {/* Ads Start */}
            <div className="mb-3 rev2">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">Advertisement</h4>
              </div>
              <div className="bg-white text-center border border-top-0 p-3">
                <p>Advertise here</p> </div>
            </div>
            {/* Ads End */}

            <div className="mb-3 rev2">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">Tranding News</h4>
              </div>
              <div className="bg-white trand-img border border-top-0 p-3">


                {/*    onClick={() => successAlert(trand[incrementedIndex].description, trand[incrementedIndex].url)} */}
                {trand.length > 6 && (
                  <div className="row rev2">
                    {[...Array(6)].map((_, index) => {
                      const incrementedIndex = index + 1;
                      return (
                        <div className="d-flex align-items-center bg-white mb-3" style={{ height: 110 }} key={index}>

                          <img className="w-100 h-100" src={trand[incrementedIndex].urlToImage} alt={trand[incrementedIndex].title} onClick={() => successAlert(trand[incrementedIndex].description, trand[incrementedIndex].url)} />
                          <div className="w-50 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                            <div className="mb-2 overflow-hidden">
                              <h3 className='text-dark small fz-18 fw-500 '>{trand[incrementedIndex].title.split(" ").slice(0, 3).join(" ")}</h3>
                              <p className='small tesla-p fz-xs'>{trand[incrementedIndex].publishedAt}</p>
                            </div>
                          </div>
                        </div>

                      );
                    })}
                  </div>
                )}


              </div>
            </div>

            {/* Newsletter Start */}
            <div className="mb-3 rev2">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">Newsletter</h4>
              </div>
              <div className="bg-white text-center border border-top-0 p-3">
                <p>Discover more about our exciting new project and message us!</p>
                <div className="input-group mb-2" style={{ width: '100%' }}>
                  <input type="text" className="form-control form-control-lg" placeholder="Your Email" />
                  <div className="input-group-append">
                    <button className="btn btn-primary font-weight-bold px-3"> <Link to='register' className='text-white'>Sign Up</Link> </button>
                  </div>
                </div>

              </div>
            </div>
            {/* Newsletter End */}

          </div>
        </div>
      </div>
    </div>



  </>

}




