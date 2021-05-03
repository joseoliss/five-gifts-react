import React from 'react';
import './Gif.css';

export default function Gif({ id, title = "Not title", url }) {
    return (
        <div className="Gif">
            <h4>{title}</h4>
            <img className="img" alt={title} src={url} />
        </div>
    )
}