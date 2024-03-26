import { useState } from "react";
import { Products } from "@/components/Products/Products";
import { useFilters } from "@/hooks/useFilters";
import { CartProvider } from "@/context/cart";
import { products as initialProducts } from "./mocks/products.json";
import { IS_DEVELOPMENT } from "./config";
import Header from "@/components/Headers/Header";
import Footer from "@/components/Footer/Footer";
import Cart from "@/components/Cart/Cart";
import ContainerGradient from "@/components/ContainerGradient/ContainerGradient";

const App = () => {

    const [products] = useState(initialProducts)
    const { filters, filterProducts } = useFilters()
    const filteredProducts = filterProducts(products)

    return (
        <CartProvider>
            <ContainerGradient/>
            <Header />
            <Cart />
            <Products products = { filteredProducts }/>
            { IS_DEVELOPMENT && <Footer filters = { filters }/> }
        </CartProvider>
    )
}

export default App
