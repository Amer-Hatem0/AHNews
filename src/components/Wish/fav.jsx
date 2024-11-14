import React, { useState, useEffect } from 'react';

export default function SavedArticles() {
    const [savedArticles, setSavedArticles] = useState([]);

    useEffect(() => {
        // Retrieve saved articles from local storage
        const savedArticlesFromStorage = JSON.parse(localStorage.getItem('savedArticles')) || [];
        setSavedArticles(savedArticlesFromStorage);
        
    }, []);

    return (
        <div>
            <h1>Saved Articles</h1>
            
            {savedArticles.length > 0 ? (
                <ul>
                    {savedArticles.map((article, index) => (
                        <li key={index}>
                                console.log(article.title)
                            <h2>{article.title}</h2>
                            
                            <p>{article.content}</p>
                            <a href={article.url}>Read More</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No articles saved.</p>
            )}
        </div>
    );
}
