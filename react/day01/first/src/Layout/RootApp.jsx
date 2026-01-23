
import Footer from "../components/Footer";
import Header from "../components/Header";
import MySlider from "../components/MySlider";
import Products from "../components/Products";


function RootApp() {
    return (
        <>
            <Header />
            <MySlider />
            <Products />
            <h3 className="underline bg-amber-600">Hello Tailwind</h3>
            <Footer />
        </>

    )
}
/**
 * products
 * productCard
 * product.css
 * -----------------------------------
 * //element - products --  p
 * // element-productCard
 * //
 * 
 */
export default RootApp;

