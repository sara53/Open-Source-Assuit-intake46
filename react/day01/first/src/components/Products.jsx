import ProductCard from "./ProductCard";//

export default function Products() {

    const trackName = {
        name: "Front Track"
    }
    const myInlineStyle = {
        color: "red",
        backgroundColor: "#000",
        padding: "10px"
    }


    return (
        <div className="bg-light p-5">
            <h1 className="text-center">{trackName.name}</h1>

            <div className="container">
                <p style={myInlineStyle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, non.</p>
                <div className="row g-3">
                    <ProductCard />
                    <ProductCard></ProductCard>
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}
