import React from 'react'
import { Link } from 'react-router-dom';

import './mai.js'


export default function Navbar({ user, logout }) {
  const date = new Date();

  // Format the date using toLocaleDateString
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <>
      <div id="myElement">
        <div className="fixed-top navv">
          <div className=" navone  d-none d-lg-flex">
            <ul className="d-flex navone-ul  ms-4">


              <li className=''><span className=" navoneli  "> {formattedDate} </span></li>

              <li > <Link className=" navoneli " to="contact" >Contact us  </Link></li>
              <li> <span className=" navoneli " to="" >Call Us Now: <span>(+001) 123 456 789</span> </span></li>
              {user !== null ?
                <>
                </> : <>


                  <Link className=" navoneli " to="register" > Register</Link>

                  <Link className="navoneli    " to="login" >Login</Link>

                </>
              }

              {user !== null ?
                <>
                  <span className=" navoneli " style={{ cursor: 'pointer' }}
                    onClick={() => logout()} > </span>


                  <Link className=" navoneli " to="product" ></Link>



                </> : <>
                  <Link className=" navoneli" to="register" ></Link>


                  <Link className=" active navoneli " to="login" ></Link>

                </>
              }

            </ul>

            {user !== null ?
              <>
                <button class="Btn ms-auto" onClick={() => logout()}>
  
  <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div class="text">Logout</div>
</button>



              </> : <>

              </>
            }

          </div>
          <nav className="nav  py-4">

            <i className="fa-solid fa-bars-staggered uil uil-bars navOpenBtn" />

            <h1 class="AH text-uppercase ">AH<span class="News">News</span></h1>
   <ul className="nav-links pt-5" style={{ overflowY: 'scroll', maxHeight: '100%' }}>
              <li className="nav-item d-md-none ">
                <Link className="nav-link active text-white mt-2" to="" >Home </Link>
              </li>
              {/* Favourites  */}


              <li><Link to="Tesla" className="nav-link d-md-none  text-white mt-2">Tesla </Link></li>
              <li> <Link className="nav-link d-md-none  text-white mt-2" to="business" >Business   </Link></li>
              <li><Link to="Temperature" className="nav-link d-md-none  text-white mt-2">Temperature </Link></li>
              <li> <Link className="nav-link d-md-none  text-white mt-2" to="entertainment" >Entertainment  </Link></li>
              <li><Link to="health" className="nav-link d-md-none  text-white mt-2">Health  </Link></li>
              <li> <Link className="nav-link d-md-none  text-white mt-2" to="science" >Science    </Link></li>
              <li><Link to="Sports" className="nav-link d-md-none  text-white mt-2">Sports </Link></li>
              <li> <Link className="nav-link d-md-none  text-white mt-2" to="technology " >Technology    </Link></li>
              <li> <Link className="nav-link d-md-none  text-white mt-2" to="Old" > The last 6 months   </Link></li>
              <li><Link to="contact" className="nav-link d-md-none  text-white mt-2">Contact</Link></li>
              <li><Link to="sav" className="nav-link d-md-none  text-white mt-2">Favourites</Link></li>
              <i className="fa-solid fa-xmark uil uil-times navCloseBtn" />


              {user !== null ?
                <>   <li className="nav-item d-md-none ">
                  <span className="nav-link text-white mt-2 " style={{ cursor: 'pointer' }}
                    onClick={() => logout()} >Logout </span>
                </li>
                  <li className="nav-item d-md-none ">
                    <Link className="nav-link text-white mt-2 " to="product" ></Link>
                  </li>


                </> : <> <li className="nav-item d-md-none ">
                  <Link className="nav-link text-white mt-2" to="register" >Register </Link>
                </li>
                  <li className="nav-item d-md-none ">
                    <Link className="nav-link active text-white mt-2 " to="login" >Login </Link>
                  </li>
                </>
              }
              <li></li>
            </ul>
            <form className="d-flex form-ser-nav d-none ms-auto d-md-flex " role="search">
              <input className="form-control inputnav py-3" type="search" placeholder="Search...." aria-label="Search" />
              <button className="btn ser-nav py-1" type="submit">
                <i class="fa-solid  fa-magnifying-glass"></i></button>


            </form>
         



            <i className="fa-solid fa-magnifying-glass d-block d-md-none d-lg-none uil uil-search search-icon" id="searchIcon" />

            <div className="search-box">
              <i className="fa-solid  fa-magnifying-glass uil uil-search search-icon" />


              <input type="text" placeholder="Search here..." />
            </div>
          </nav>


        </div>
        <div className="navtwo   d-none d-lg-flex">
          <ul className="d-flex  ms-4">
            <li className="nav-item d-flex bar">
              <i class="fa-solid fa-bars"></i>
              <h3>All Categories</h3>
              <div className="dropdown-content">
                <div className="aa">
                  <p><Link to="Tesla" className="    mt-1">Tesla </Link></p>
                  <p> <Link className="    mt-1" to="business" >Business   </Link></p>
                  <p> <Link className="    mt-1" to="entertainment" >Entertainment  </Link></p>
                  <p><Link to="health" className="    mt-1">Health  </Link></p>
                  <p> <Link className="    mt-1" to="science" >Science    </Link></p>
                  <p><Link to="Sports" className="    mt-1">Sports </Link></p>
                  <p className='position-relative p-tech'> <Link className="    mt-1" to="technology " >Technology</Link>
                  <i class="fa-solid fa-caret-right ms-auto"></i>
                    <div className="tech-menu ps-3">
                    
  <Link className="d-block py-1 " to="apple" >Apple</Link>
  <Link className="d-block py-2" to="samsung" >Samsung</Link>
  <Link className="d-block py-2" to="sony" >Sony</Link>


                    </div>
{/* Favourites */}

                  </p>
                  <p> <Link className="    mt-1" to="Old" > The last 6 months   </Link></p>
                  <p><Link to="contact" className="    mt-1">Contact</Link></p>
                  <p><Link to="sav" className="    mt-1">Favourites</Link></p>
                </div>
              </div>
            </li>


            <li className="nav-item"> <Link className="nav-link active text-white mt-2" to="" >Home </Link></li>
            <li><Link to="Temperature" className="nav-link text-white mt-2">Temperature</Link></li>

            <li> <Link className="nav-link text-white mt-2" to="sav" >Favourites  </Link></li>
            <li> <Link className="nav-link text-white mt-2" to="contact" >Contact us  </Link></li>
            



            {user !== null ?
              <>   <li className="nav-item">
                <span className="nav-link text-white mt-2 " style={{ cursor: 'pointer' }}
                  onClick={() => logout()} > </span>
              </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mt-2 " to="product" ></Link>
                </li>


              </> : <> <li className="nav-item">
                <Link className="nav-link text-white mt-2" to="register" ></Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link active text-white mt-2 " to="login" ></Link>
                </li>
              </>
            }
            <li></li>
          </ul>



        </div>

      </div>
    </>


    // fixed-top

  )
}
