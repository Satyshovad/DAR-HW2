import React from "react";
import { movies, actors } from "../../mock";
import MoviesList from "../../components/moviesList/MoviesList";
import ActorsList from "../../components/actorsList/ActorsList";

const Main = () => {

    return <div>
        <h2>Movies ({movies.length})</h2>
        <MoviesList movies={movies}/>

        <h2>Actors ({actors.length})</h2>
        <ActorsList actors={actors} />
        
    </div>
};

export default Main;