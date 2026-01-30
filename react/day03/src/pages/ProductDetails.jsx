import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../api/productApi";

export function ProductDetails() {
    const { id } = useParams();
    const [ product, setProduct ] = useState( {} )

    useEffect( () => {
        getProductById( id ).then( response => {
            setProduct( response.data )
        } ).catch( console.log )
    }, [] )
    return (
        <div className="mt-5 container">
            <h1>Product Details</h1>
            <p className="lead mt-3">Product Name :<strong>{product?.name}</strong></p>
            <p className="lead mt-3">Product price <strong>{product?.price}</strong> $</p>
            <Link to="/products" className="btn btn-dark mt-2">Back to Products</Link>
        </div>
    )
}
