import React from "react";
import { Actor } from "../../types";
import ActorsEach from "../actorEach/ActorEach";

type Props ={
    actors: Actor[];
}

const ActorsList: React.FC<Props> =({ actors}) => {
    return(
        <div className="actor-list">
            {actors.map((actor) =>
                <ActorsEach key={actor.id} actor={actor}/>
            )}
        </div>
    );

};

export default ActorsList;