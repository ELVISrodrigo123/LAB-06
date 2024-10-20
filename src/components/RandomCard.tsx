import React, { useState, useEffect } from 'react';
import '../global.css';

const RandomCard= ({url}:{url:string}) => {
    return (
        <div className="card-container">
            <h2>Random Image</h2>
            <img src={url} alt="Random Avatar" className="avatar" />

            <div className="description">
                <p><strong>Descripción:</strong></p>
                <p>Colocar alguna descripción para los personajes</p>
            </div>
        </div>
    );
};

export default RandomCard;
