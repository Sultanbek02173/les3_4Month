import { useEffect, useState } from "react";
import axios from 'axios';
import './Casual.css';
import { Link } from "react-router-dom";

export const Casual = () => {

    const [data, setData] = useState();

    useEffect(() => {
        axios('https://fakestoreapi.com/products')
        .then(({data}) => {
            setData(data)
            console.log(data);
        })
    }, [])
    // console.log(data);

    return (
        <div className="casualBlock">
            <h1>Casual</h1>  
            <div className="flexItem">
                {
                    data && 
                    data.map((product) => (
                        <div key={product.id} className="item">
                            <img className="image" src={product.image} alt="Product img" />
                            <p>{product.category}</p>
                            <h2><Link to={`/detail/${product.id}`}>{product.title}</Link></h2>
                            {/* <p>{product.description}</p> */}
                            <p>{product.price}</p>
                            <button>Buy</button>
                        </div>
                    ))
                }
            </div>
            
        </div>
    );
}

