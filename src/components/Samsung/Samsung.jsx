


import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import './sam.js'

import { Link } from 'react-router-dom';
import axios from 'axios'

export default function TechCrunch() {



    let [Tesla, setTesla] = useState([])
    async function getTesla() {
        let { data } = await axios.get('https://newsapi.org/v2/everything?q=samsung&sortBy=popularity&apiKey=1d8a55dd32754ac2a53f63a870e1e0da');
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
                    <div className="col-lg-10">
                        <div className="row lastnews">
                            <div className="col-12">
                                <div className="section-title">
                                    <h4 className="m-0 text-uppercase font-weight-bold"><Link to="technology">Technology/</Link>Samsung</h4>

                                </div>
                            </div>

                            {Tesla.length > 6 && (
                                <>
                                    {[...Array(6)].map((_, index) => {
                                        const incrementedIndex = index + 1;
                                        return (<>
                                            <div className="col-lg-3 rev imgnews" key={index}>
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
                                                                <h3 className='text-dark tesla-h3 fw-500 '>  {Tesla[incrementedIndex].title.split(" ").slice(0, 3).join(" ")}</h3>
                                                                <p className='tesla-p small'>{Tesla[incrementedIndex].publishedAt}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-lg-6 rev imgnews" key={index}>
                                                <div className="position-relative mb-3">
                                                    <div className='last-div '>
                                                        <div className="imghome">
                                                            <img
                                                                className="w-100 h-100"
                                                                onClick={() => successAlert(Tesla[incrementedIndex + 10].description, Tesla[incrementedIndex + 10].url)}
                                                                src={Tesla[incrementedIndex + 10].urlToImage}
                                                                alt={Tesla[incrementedIndex + 10].title}
                                                            />
                                                        </div>
                                                        <div className="bg-white border border-top-0 p-4">
                                                            <div className="overla">
                                                                <h3 className='text-dark tesla-h3 fw-500 '>{Tesla[incrementedIndex + 10].title.split(" ").slice(0, 3).join(" ")}</h3>
                                                                <p className='tesla-p small'>{Tesla[incrementedIndex + 10].publishedAt}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 rev imgnews" key={index}>
                                                <div className="position-relative mb-3">
                                                    <div className='last-div '>
                                                        <div className="imghome">
                                                            <img
                                                                className="w-100 h-100"
                                                                onClick={() => successAlert(Tesla[incrementedIndex+12].description, Tesla[incrementedIndex+12].url)}
                                                                src={Tesla[incrementedIndex+12].urlToImage}
                                                                alt={Tesla[incrementedIndex+12].title}
                                                            />
                                                        </div>
                                                        <div className="bg-white border border-top-0 p-4">
                                                            <div className="overla">
                                                                <h3 className='text-dark tesla-h3 fw-500 '>{Tesla[incrementedIndex+12].title.split(" ").slice(0, 3).join(" ")}</h3>
                                                                <p className='tesla-p small'>{Tesla[incrementedIndex+12].publishedAt}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                        </>
                                        );
                                    })}
                                </>
                            )}

                            <div className="col-lg-12 rev mb-5">
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



                    <div className="col-lg-2 Social-sam">
                        {/* Social Follow Start */}
                        <div className="mb-3 rev">
                            <div className="section-title mb-0">
                                <h4 className="m-0 text-uppercase font-weight-bold">Follow Us</h4>
                            </div>

                            <div className="bg-white rev border border-top-0 p-3">
                                <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#39569E' }}>
                                    <i className="fab fa-facebook-f text-center py-4 mr-3" style={{ width: 35, background: 'rgba(0, 0, 0, .2)' }} />
                                    <span className="font-weight-medium">12,345 Fans</span>
                                </a>
                                <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#52AAF4' }}>
                                    <i className="fab fa-twitter text-center py-4 mr-3" style={{ width: 35, background: 'rgba(0, 0, 0, .2)' }} />
                                    <span className="font-weight-medium">12,345 Followers</span>
                                </a>
                                <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#0185AE' }}>
                                    <i className="fab fa-linkedin-in text-center py-4 mr-3" style={{ width: 35, background: 'rgba(0, 0, 0, .2)' }} />
                                    <span className="font-weight-medium">12,345 Connects</span>
                                </a>
                                <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#C8359D' }}>
                                    <i className="fab fa-instagram text-center py-4 mr-3" style={{ width: 35, background: 'rgba(0, 0, 0, .2)' }} />
                                    <span className="font-weight-medium">  12,345 Followers</span>
                                </a>

                                <a href className="d-block w-100 text-white text-decoration-none" style={{ background: '#055570' }}>
                                    <i className="fab fa-vimeo-v text-center py-4 mr-3" style={{ width: 35, background: 'rgba(0, 0, 0, .2)' }} />
                                    <span className="font-weight-medium">12,345 Followers</span>
                                </a>
                            </div>
                        </div>
                        {/* Social Follow End */}
                        {/* Ads Start */}
                        <div className="mb-3 rev">
                            <div className="section-title mb-0">
                                <h4 className="m-0 text-uppercase Advertisement font-weight-bold">Advertisement</h4>
                            </div>
                            <div className="bg-white text-center border border-top-0 p-3">
<p>Advertise here</p>
                            </div>
                        </div>
                        {/* Ads End */}

                        <div className="mb-3 rev">
                            <div className="section-title mb-0">
                                <h4 className="m-0 text-uppercase Tranding font-weight-bold">Tranding News</h4>
                            </div>
                            <div className="bg-white trand-img border border-top-0 p-3">



                                {Tesla.length > 6 && (
                                    <div className="row rev">
                                        {[...Array(6)].map((_, index) => {
                                            const incrementedIndex = index + 10;
                                            return (
                                                <div className="d-flex summ align-items-center position-relative   bg-white mb-3" style={{ height: 110 }} key={index}>

                                                    <img className="w-100 h-100" onClick={() => successAlert(Tesla[incrementedIndex].description, Tesla[incrementedIndex].url)} src={Tesla[incrementedIndex].urlToImage} alt={Tesla[incrementedIndex].title} />
                                                    <div className="overlay2  m-auto">
                                                       
                                                            <h3>{Tesla[incrementedIndex].title.split(" ").slice(0, 3).join(" ")}</h3>
                                                        
                                                        <p> {Tesla[incrementedIndex].publishedAt}</p>
                                                    </div>
                                                </div>

                                            );
                                        })}
                                    </div>
                                )}


                            </div>
                        </div>

                 

                    </div>
                </div>
            </div>
        </div>



    </>

}

