import React, {useState, useEffect} from 'react';
import Card from '../Card/Card.component';
import "./FeaturedBrands.styles.scss";
import axios from 'axios'

const FeaturedBrands = ({ heading, brandName }) => {
    const [data, setData] = useState();
    const [cards, setCards] = useState();

    useEffect(() =>{
        axios.get(`http://localhost:5001/api/getproducts/${brandName}`)
        .then(res =>{
            const data = res.data;
            console.log(data)
            setData(data)
            setCards(data.slice(-10).map(shoe =>(<Card id={shoe._id}  key={shoe._id} name={shoe.brand +' '+ shoe.name} discount={shoe.price} price={ + shoe.price - shoe.discount} images={shoe.images[0]}/>)))
        })
        .catch(err =>{
            console.log(err);
        })
    },[])

    return (
        <>
        <h2>{heading}</h2>
        <h3>{brandName}</h3>
        <div className='products-container'>
                {cards}
        </div>
        </>
    );
};

export default FeaturedBrands;