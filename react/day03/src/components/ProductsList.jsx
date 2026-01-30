
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProduct } from "../api/productApi";

export default function ProductsList() {

    const [ products, setProducts ] = useState( [] )
    const [ error, setErrors ] = useState( {} )
    // Error State
    useEffect( () => {
        getAllProduct().then( response => {
            setProducts( response.data )
        } ).catch( console.log )
    }, [] )

    const deleteHandler = ( productId ) => {
        deleteProduct( productId ).then( response => {
            const filteredProducts = products.filter( product => product.id != productId )
            setProducts( filteredProducts )
        } ).catch( ( e ) => {
            setErrors( e )
        } )
    }

    return (
        <div className="mt-3">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map( ( product => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}$</td>
                                <td>
                                    <Link to={`${product.id}/edit`}>
                                        <i className="fs-3 mx-1 text-info bi bi-pencil-square"></i>

                                    </Link>
                                    <Link to={`${product.id}`}>

                                        <i className="fs-3 mx-1 text-warning bi bi-eye-fill"></i>
                                    </Link>
                                    <i onClick={() => deleteHandler( product.id )} className="fs-3 mx-1 text-danger bi bi-trash-fill"></i>
                                </td>
                            </tr>
                        )
                    } ) )}


                </tbody>
            </Table>


        </div>
    )
}
