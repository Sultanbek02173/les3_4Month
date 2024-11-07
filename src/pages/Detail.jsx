import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../app.css';

export const Detail = () => {

    const [product, setProduct] = useState({});
    const item = useParams();
    console.log(item);
    

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${item.id}`).then(({data}) => {
            setProduct(data)
        })
    }, [item])
    return (
        <div>
            <h1>Detail</h1>
            {
                product && (
                    <div>
                        <img className="image" src={product.image} alt="Product img" />
                        <p>{product.category}</p>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button>Buy</button>
                    </div>
                )
            }
        </div>
    );
}

