import React from 'react';
import "../../styles/DashBoard.css"

const CardItem = (props) => {

    return (
        <div className="card-item-container"
            onClick={props.onClick}
        >
            <img 
                className="card-item-image"
                src={props.imgUrl}/>
            <h3 className="card-item-title">{props.title}</h3>
            <p className="card-item-subtitle">{props.subtitleOne}</p>
            <p className="card-item-subtitle">{props.subtitleTwo}</p>
            <p className="card-item-subtitle">{props.subtitleThree}</p>
        </div>
    )
}


export default CardItem