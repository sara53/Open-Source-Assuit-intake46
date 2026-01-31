
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, ProductDetails, Products, NotFound, ProductForm, Counter } from '../pages'

import { Sharedlayout } from "./Sharedlayout";



export default function Mainlayout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sharedlayout />} >
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="counter" element={<Counter />} />
                    <Route path="products/:id" element={<ProductDetails />} />
                    <Route path="products/:id/edit" element={<ProductForm />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
