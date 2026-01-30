import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addNewProduct, editProduct, getProductById } from "../api/productApi";
import { useNavigate, useParams } from "react-router-dom";

export function ProductForm() {
    const [ product, setProduct ] = useState( {
        name: '',
        price: ''
    } )

    const navigate = useNavigate();
    const { id } = useParams()


    useEffect( () => {
        if ( id != 0 ) {
            getProductById( id ).then( response => {
                setProduct( response.data )
            } ).catch( console.log )
        }

    }, [] )

    const getProductValue = ( e ) => {

        setProduct( {
            ...product,
            [ e.target.name ]: e.target.value,
        } )
    }

    const productHandler = ( e ) => {
        e.preventDefault()
        if ( id == 0 ) {
            addNewProduct( product ).then( () => {
                navigate( "/products" )
            } ).catch( () => { } )
        } else {
            editProduct( id, product ).then( () => {
                navigate( "/products" )
            } ).catch( () => { } )
        }

    }

    return (
        <div className="mt-5 container">
            <h1 className="text-center text-muted mb-4">Product Form</h1>
            <Form onSubmit={productHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control name="name" onChange={getProductValue} value={product.name} type="text" placeholder="Enter Product Price" />
                    <Form.Text className="text-danger">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control onChange={getProductValue} name="price" value={product.price} type="number" placeholder="Enter Product Name" />
                </Form.Group>

                <Button variant="dark" type="submit">
                    {id == 0 ? "Add New Product" : "Edit Product"}
                </Button>
            </Form>
        </div>
    )
}



