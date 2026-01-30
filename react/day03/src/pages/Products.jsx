import { Link } from "react-router-dom";
import ProductsList from "../components/ProductsList";

export function Products() {
    return (
        <div className="container mt-5">
            <h1 className="text-center text-muted">Our Products</h1>
            <div className="header mt-4 bg-zinc-100 p-2 rounded d-flex justify-between">
                <Link to="/products/0/edit" className="btn btn-dark">Add New Button</Link>
                <input type="text" placeholder="Search ...." className="form-control w-25" />
            </div>
            <ProductsList />
        </div>
    )
}
