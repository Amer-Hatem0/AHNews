import React from 'react'
import Loading from '../Loading/Loading'

export default function Cont() {
    
    return (
        <>
<div className="container mb-5">
<div className="row">
<div className="col-md-8 m-auto">
                {/* Contact Start */}
            <div className=" Contact-Start mt-5 pt-3">
                <div className="">
                    <div className="row">
                        <div className="col-lg-12 ">
                           
                            <div className="bg-white icont border border-top-0 mb-3">
                                <div className="mb-4">
                                    <h5 className="text-uppercase  Contact-info ">Contact Info</h5>
                                    <p className="mb-4 pcont p-4 ">For any inquiries or assistance, feel free to reach out to us using the provided contact details. We are available to answer your questions and provide support whenever needed.</p>
                                    <div className="mb-3 ms-4">
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="fa fa-map-marker-alt text-primary mr-2" />
                                            <h6 className="pcont mb-0">Our Office</h6>
                                        </div>
                                        <p className="m-0 small">123 Street, New York, USA</p>
                                    </div>
                                    <div className="mb-3 ms-4">
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="fa fa-envelope-open text-primary mr-2" />
                                            <h6 className="pcont mb-0">Email Us</h6>
                                        </div>
                                        <p className="m-0 small">info@example.com</p>
                                    </div>
                                    <div className="mb-3 ms-4">
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="fa fa-phone-alt text-primary mr-2" />
                                            <h6 className="pcont mb-0">Call Us</h6>
                                        </div>
                                        <p className="m-0 small">+012 345 6789</p>
                                    </div>
                                </div>
                                <h6 className="text-uppercase font-weight-bold Contact-info mb-3">Contact Us</h6>
                                <form className='p-4'>
                                    <div className="form-row">
                                        <div className="col-md-6 in">
                                            <div className="form-group ">
                                                <input type="text" className=" form-control p-4" placeholder="Your Name" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 in">
                                            <div className="form-group">
                                                <input type="email" className="form-control p-4" placeholder="Your Email" required="required" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" placeholder="Subject" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" rows={4} placeholder="Message" required="required" defaultValue={""} />
                                    </div>
                                    <div>
                                        <button className="btn sendbtn in font-weight-semi-bold px-4" style={{ height: 50 }} type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                                              </div></div></div></div>
</div>

<div className="col-md-3 mt-5">
            {/* Social Follow Start */}
            <div className="mb-3 mt-3">
                <div className="bg-white py-2 pb-3 section-title mb-0">
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


           
            {/* Contact End */}</div>
</div>
</div>

        </>
    )
}
