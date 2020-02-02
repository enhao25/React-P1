import React from 'react';
import Card from "./Card";
import {weather} from "./weather";

const CardList = (props) => {
    const cardsArray = weather.map((user, i) => {
        return <Card key={i} id={weather[i].id} name={weather[i].name} value={weather[i].value} />
    })
    return (
        <div>
            {cardsArray}
        </div>
    )
}

export default CardList;