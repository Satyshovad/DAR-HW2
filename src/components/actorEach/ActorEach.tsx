import { BlobOptions } from "buffer";
import React, { useState } from "react";
import { Actor } from "../../types";

type Props = {
    actor: Actor;
};
const ActorEach: React.FC<Props> =({actor}) =>{
    const [addedToWatchLater, setaddedToWatchLater] = useState(false);

    const watchLaterClick = () => {
        setaddedToWatchLater(true);
        console.log('Actor clicked', addedToWatchLater)
    }
    return(
        <div className="actor-each" style={{marginBottom:'1rem'}}>
            <img src={actor.image} alt={actor.name} style={{width: '200px', height: '200px'}}/>
            <div>{actor.name}</div>  
            <div>{actor.film}</div>
            <div>{actor.duration /60} hours</div>
            <button onClick={watchLaterClick}>{addedToWatchLater ? 'Added to list' : 'Watch later'}</button>
        </div>
    );
};

export default ActorEach;