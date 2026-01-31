
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProduct } from "../api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAction, getAllProductAction } from "../store/slices/productSlice";

export default function ProductsList() {

    const { products, errors, isLoading } = useSelector( state => state.productSlice )

    const dispatch = useDispatch();
    useEffect( () => {
        dispatch( getAllProductAction() )

    }, [] )

    const deleteHandler = ( productId ) => {
        dispatch( deleteProductAction( productId ) )
    }

    return (
        <div className="mt-3">
            {isLoading && <h1 className="alert alert-light mt-3">Loading ...........</h1>}
            {
                !isLoading &&
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

            }

        </div>
    )
}
