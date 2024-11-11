import { useEffect, useState } from "react";
import axios from 'axios';
import './Casual.css';
import { Link } from "react-router-dom";
import ReactStars from 'react-stars'

export const Casual = () => {

    const [data, setData] = useState();

    useEffect(() => {
        axios('https://fakestoreapi.com/products')
        .then(({data}) => {
            setData(data)
            console.log(data);
        })
    }, [])

    return (
        <div className="casualBlock">
            <h1>Casual</h1>  
            <div className="flexItem">
                {
                    data && 
                    data.map((product) => (
                        <div key={product.id} className="product">
                            <div className="item">
                                <img className="image" src={product.image} alt="Product img" />
                            </div>
                            <div className="description">
                                <h2><Link to={`/detail/${product.id}`}>{product.title}</Link></h2>
                                <div className="rating">
                                    <ReactStars
                                        count={5}
                                        value={product.rating.rate}  
                                        isHalf={true}          
                                        size={18}       
                                        edit={false}    
                                        activeColor="#ffd700" 
                                        inactiveColor="#ffffff"
                                    />
                                    <p>{product.rating.rate}/5</p>
                                </div>
                                
                                <h3>${product.price}</h3>
                                <button>Buy</button>
                            </div>
                        </div>
                        
                    ))
                }
            </div>
            
        </div>
    );
}