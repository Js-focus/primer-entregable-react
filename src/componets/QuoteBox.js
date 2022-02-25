import React from 'react';
import { useState } from 'react';
import '../App.css'
import quotes from'../quotes.json'
import IconQuote from './IconQuote';

const getNumberAleatory = () => Math.floor(Math.random() * quotes.length);
const randomColor = () => Math.floor(Math.random()*16777215).toString(16);
                 


const QuoteBox = () => {
    const [aleatory, setAleatory] = useState(getNumberAleatory);
    const [color, setColor] = useState(randomColor);
    document.body.style.backgroundColor = "#" + color;
    

    const changeQuoteAndColor = () => {
        setAleatory(getNumberAleatory)
        setColor(randomColor)
        document.body.style.backgroundColor = "#" + setColor;
    }

    return (
        <div className='quote-box'>
            
            <div style= {{color: "#" + color}}>
                <div className='quote'>
                    <IconQuote/>
                    <p>{quotes[aleatory].quote}</p>
                    
                </div>
                <p>{quotes[aleatory].author}</p>
            </div>
            <div className='button'>
                <button onClick={changeQuoteAndColor} style={{background: "#" + color}}>
                <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
        </div>
    );
};

export default QuoteBox;