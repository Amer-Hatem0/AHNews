


import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'


import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Business() {



  let [Tesla, setTesla] = useState([])
  async function getTesla() {
    let { data } = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d37baf4052524cff8cae927d24123632');
    setTesla(data.articles);
  }

  useEffect(() => {
    getTesla()
  }, [])


  const successAlert = (description, url) => {
    Swal.fire({
      title: description,
      text: url,

    });
  };




  return <>



    <div className="container-fluid mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row lastnews">
              <div className="col-12">
                <div className="section-title">
                  <h4 className="m-0 text-uppercase font-weight-bold">Business</h4>

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
                            <div className="imghome">
                              <img
                                className="w-100 h-100"
                                onClick={() => successAlert(Tesla[incrementedIndex].description, Tesla[incrementedIndex].url)}
                                src={Tesla[incrementedIndex].urlToImage}
                                alt={Tesla[incrementedIndex].title}
                              />
                            </div>
                            <div className="bg-white border border-top-0 p-4">
                              <div className="overla">
                                <h3 className='text-dark tesla-h3 fw-500 '>{Tesla[incrementedIndex].title.split(" ").slice(0, 3).join(" ")}</h3>
                                <p className='tesla-p small'>{Tesla[incrementedIndex].publishedAt}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}

              <div className="col-lg-12">
                {Tesla.length > 0 && (

                  <div className="row news-lg mx-0 mb-3">
                    <div className="col-md-6 imgnews2 px-0">
                      <img className="" src={Tesla[2].urlToImage} style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                      <p className="p-3  text-black">{Tesla[2].title}</p>
                      <p className="p-3 ">{Tesla[2].description}</p>

                      <div className="mt-auto ps-4">

                        <div className="mb-2">
                          <a className="text-body" href><small> {Tesla[2].publishedAt}</small></a>
                        </div>

                      </div>

                    </div>
                  </div>)}
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
            <div className="mb-3">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">Advertisement</h4>
              </div>
              <div className="bg-white text-center border border-top-0 p-3">

              </div>
            </div>
            {/* Ads End */}

            <div className="mb-3">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">Tranding News</h4>
              </div>
              <div className="bg-white trand-img border border-top-0 p-3">



                {Tesla.length > 6 && (
                  <div className="row">
                    {[...Array(6)].map((_, index) => {
                      const incrementedIndex = index + 10;
                      return (
                        <div className="d-flex align-items-center bg-white mb-3" style={{ height: 110 }} key={index}>

                          <img className="w-100 h-100" src={Tesla[incrementedIndex].urlToImage} alt={Tesla[incrementedIndex].title} />
                          <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                            <div className="mb-2">
                              <h3 className='text-dark small fz-18 fw-500 '>{Tesla[incrementedIndex].title.split(" ").slice(0, 3).join(" ")}</h3>
                              <p className='small fz-xs'>{Tesla[incrementedIndex].publishedAt}</p>
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
            <div className="mb-3">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">Newsletter</h4>
              </div>
              <div className="bg-white text-center border border-top-0 p-3">
                <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                <div className="input-group mb-2" style={{ width: '100%' }}>
                  <input type="text" className="form-control form-control-lg" placeholder="Your Email" />
                  <div className="input-group-append">
                    <button className="btn btn-primary font-weight-bold px-3"> <Link to='register' className='text-white'>Sign Up</Link> </button>
                  </div>
                </div>
                <small>Lorem ipsum dolor sit amet elit</small>
              </div>
            </div>
            {/* Newsletter End */}

          </div>
        </div>
      </div>
    </div>



  </>

}

