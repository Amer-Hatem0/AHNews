import React, { useState, useEffect } from 'react';


export default function Sav() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    // Retrieve saved articles from local storage
    const savedArticlesFromStorage = JSON.parse(localStorage.getItem('savedArticles')) || [];
    setSavedArticles(savedArticlesFromStorage);

  }, []);
  const handleDelete = (index) => {
    // Remove the article from local storage
    const updatedArticles = [...savedArticles];
    updatedArticles.splice(index, 1);
    setSavedArticles(updatedArticles);
    localStorage.setItem('savedArticles', JSON.stringify(updatedArticles));
  };
  const handleDelete2 = (index) => {
    // Remove the article from local storage
    const updatedArticles = [...savedArticles];
    updatedArticles.splice(index, 1);
    setSavedArticles(updatedArticles);
    localStorage.setItem('savedArticles', JSON.stringify(updatedArticles));
  };

  const savedArticlesCount = savedArticles.length; // Number of saved articles

  return (
    <div className="row">
  <div className="col-xs-12 mt-2 d-flex">
     <h3 className='pt-3 ps-5'>My Favourites    <span className='pt-3 psave  me-5 ps-1'> <span className='numsave'>{savedArticlesCount}</span> </span>
    </h3>
    {/* <p className='pt-3 psave ms-auto me-5 ps-3'><i class="fa-solid fa-heart heart "></i> <span className='numsave'>{savedArticlesCount}</span> </p>
    
        */}
      </div>
      {savedArticles.length > 0 ? (
        < >
          {savedArticles.map((article, index) => (
            <div className='col-md-4 fav-div' key={index}>
              <div className=" fav-son">
                {/*  */}
                <img className=" p-2" src={article.urlToImage} />
                <h2 className=" p-2">{article.title.split(" ").slice(0, 3).join(" ")}</h2>

                <p className="tesla-p px-2">{article.publishedAt}</p>
                <a href={article.url}>
                  <div class="card__arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                      <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                    </svg>
                  </div>
                </a>
                <div className="bb">
                  <button onClick={() => handleDelete(index)}><i class="fa-solid fa-trash trash"></i></button>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>No articles saved.</p>
      )}
    </div>
  );
}
