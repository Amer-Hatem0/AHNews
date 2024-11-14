import React, { useState, useEffect } from 'react';

const musicItem = [
    { name: "Under the influence", artist: "Chris Brown" },
    { name: "Time N Affection", artist: "Rema ft Chris Brown" },
    { name: "Earth Song", artist: "Mickael Jackson" },
];



const MyApp = () => {
    const [music] = useState(musicItem);
    const [favorite, setFavorite] = useState([]);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const musicFavorites = JSON.parse(localStorage.getItem('fav'));
        setFavorite(musicFavorites || []);
    }, []);

    const saveFav = (item) => {
        localStorage.setItem('fav', JSON.stringify(item));
    };

    const addFavorite = (element) => {
        if (favorite.indexOf(element) !== -1) return;
        const newFavorite = [...favorite, element];
        setFavorite(newFavorite);
        saveFav(newFavorite);
    };

    const removeFavorite = (element) => {
        const newFavorite = favorite.filter((fav) => fav !== element);
        setFavorite(newFavorite);
        saveFav(newFavorite);
    };

    return (
        <section>
            <Nav setShow={setShow} />
            {show ? (
                <MoviesList music={music} handleFavorite={addFavorite} />
            ) : (
                <FavoritesList favorite={favorite} handleFavorite={removeFavorite} />
            )}
        </section>
    );
};

const Nav = ({ setShow }) => {
    return (
        <nav>
            <h1>Music App</h1>
            <ul>
                <li onClick={() => setShow(true)}>Home</li>
                <li onClick={() => setShow(false)}>Favorite</li>
            </ul>
        </nav>
    );
};

const MoviesList = ({ music, handleFavorite }) => {
    return (
        <div className="bloc_card">
            {music.map((data, i) => {
                return (
                    <div className="card" key={i}>
                        <div>{data.name}</div>
                        <div>{data.artist}</div>
                        <button type="button" onClick={() => handleFavorite(data.name)}>
                            <HeartIcon />
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

const FavoritesList = ({ favorite, handleFavorite }) => {
    return (
        <div className="bloc_favorite">
            <h2>Favorite</h2>
            <div className="bloc_card">
                {favorite.map((data, i) => {
                    return (
                        <div className="card" key={i}>
                            <div>{data}</div>
                            <button type="button" onClick={() => handleFavorite(data)}>
                                <TrashIcon />
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const HeartIcon = () => {
    return (
        <div>
            <svg viewBox="0 0 512 512" width="20" title="heart">
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
            </svg>
        </div>
    );
};

const TrashIcon = () => {
    return (
        <div>
            <svg viewBox="0 0 448 512" width="14" title="trash-alt">
                <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
            </svg>
        </div>
    );
};

export default MyApp;
