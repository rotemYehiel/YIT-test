import React from 'react';

const Card = (props) => {
    const { card, currCategory } = props;
    return (
        <div className="card">
            <div className="container">
                <img className="imgArea" src={card.imgSrc} alt="card img" />
            </div>
            <div className="category" id="text-start" style={{ backgroundColor: currCategory.color }}>
                <span>{card.category}</span>
            </div>
            <div className="title" id="text-start">{card.title}</div>
            <div className="subTitle" id="text-start">{card.subTitle}</div>
            <div className="author" id="text-start">{card.author}</div>
        </div>
    )
}

export default Card;

