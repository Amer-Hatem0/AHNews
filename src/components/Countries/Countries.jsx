
// import { useParams } from 'react-router-dom';
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// export default function Countries() {
//   const [Tesla, setTesla] = useState([]);

//   async function getTesla() {
//     let { data } = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-05-29&sortBy=publishedAt&apiKey=5ff59e229b4249fab65ee00203cc5104');
//     setTesla(data.articles);
//   }

//   useEffect(() => {
//     getTesla();
//   }, []);

//   const { id } = useParams();

//   console.log(id);

//   const filteredArticles = Tesla.filter((article) => article.source.name === id);

//   return (
//     <div>
//       <div className='countr mt-5'>
//         {filteredArticles.map((article) => (
//           <div key={article.title}>
//             <div className="row imghome p-5  ">
//               <div className="col-md-6 mb-3 ">

//                 <img
//                   className=""
//                   src={article.urlToImage}
//                   alt={article.title}
//                 /></div>

//               <div className="col-md-6  ">
//                 <div className="  ">
//                   <div className="overla">
//                     <div class="card bg-white pb-3 mt-0">
//                       <h3 className="text-dark py-2 ">
//                         {article.title}
//                         <p className="small pt-3  tesla-p">{article.publishedAt}</p> </h3>
//                       <p class="card__content ">{article.description} </p>
//                       <p class="card__content">{article.content} </p>
//                       <div class="card__date">
//                         <p className="small tesla-p">{article.author}</p>

//                       </div>  <a href={article.url} >
//                         <div class="card__arrow">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
//                             <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>

//                           </svg>
//                         </div></a>
//                     </div>


//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Countries() {
  const [Tesla, setTesla] = useState([]);

  async function getTesla() {
    let { data } = await axios.get('https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=5ff59e229b4249fab65ee00203cc5104');
    setTesla(data.articles);
  }

  useEffect(() => {
    getTesla();
  }, []);

  const { id } = useParams();

  console.log(id);

  const filteredArticles = Tesla.filter((article) => article.source.name === id);

  const saveArticle = (article) => {
    // Save the article to local storage
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
    savedArticles.push(article);
    localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
    console.log(article.title)
  };

  return (
    <div>
      <div className='countr mt-5'>
        {filteredArticles.map((article) => (
          <div key={article.title}>
            <div className="row imghome p-5">
              <div className="col-md-6 mb-3">
                <img
                  className=""
                  src={article.urlToImage}
                  alt={article.title}
                />
              </div>
              <div className="col-md-6">
                <div className="">
                  <div className="overla">
                    <div class="card bg-white pb-3 mt-0">
                      <h3 className="text-dark py-2">
                        {article.title}
                        <p className="small pt-3 tesla-p">{article.publishedAt}</p>
                      </h3>
                      <p class="card__content">{article.description}</p>
                      <p class="card__content">{article.content}</p>
                      <div class="card__date">
                        <p className="small tesla-p">{article.author}</p>
                      </div>
                      <a href={article.url}>
                        <div class="card__arrow">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                            <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                          </svg>
                        </div>
                      </a>
                      <button class="btnn" onClick={() => saveArticle(article)}>
    <span className='spansave '>Save</span>
</button>
                     {/* <button className='btn ' onClick={() => saveArticle(article)}>Save</button>  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
