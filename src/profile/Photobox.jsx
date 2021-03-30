import React, { useState } from "react";

import { augustaService } from "@/_services";



function Photobox({ match }){
    const [photoCards, setPhotoCards] = useState([]);

    //Map each augusta to a React component that will display its information
    function handleAugustas(augusta){
        setPhotoCards( augusta.map(aug => <PhotoCard augusta={aug} />) );
    }

    //If we have already loaded some augustas, dont keep requesting
    //If we dont do this, React will send a request every time this component renders, which is many times per second
    if(photoCards.length === 0) {
        augustaService.getMine()
            .then(handleAugustas)
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            {photoCards}
        </div>
    );
}

function PhotoCard(props){
    const { source, name, _id, keywords } = props.augusta;

    return (
        <div className="container border p-3" key={_id}>
            <div className="col">
                <img src={source} alt={`Picture of '${name}'`} />
            </div>
            <div className="col">
                <p>
                    {name}
                </p>
                <p>
                    Tags: {keywords.join(", ")}
                </p>
            </div>
        </div>
    );
}

export {Photobox};