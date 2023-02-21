import React from "react";
import "./Cards_Style.css";
import axios from "axios";
import { useEffect } from "react";

const Cards = async () => {
    // const urlMovies = "https://movies-app.prakashsakari.repl.co/api/movies";
    try {
        // const movies = await axios.get(urlMovies);
        // console.log(movies);
    } catch (err) {
        // console.log(err);
    }

    // useEffect(() => {
    //     // Cards()
    // }, []);

    return (
        <div className="movie_container">
            <div className="movie_container_cards">
                <h2>Movies Cards</h2>
                <img
                    src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0"
                    alt="No Movies Data"
                    srcset=""
                />
            </div>
            <div>
                <span>The Movie</span>
            </div>
            <div>
                <span>Genre: Drama</span>
            </div>
            <div>
                <span>Rating: 4.8</span>
                <span>142 min</span>
            </div>
        </div>
    );
};

export default Cards;
