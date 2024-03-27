/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Products } from "@/components/Products/Products";
import { useFilters } from "@/hooks/useFilters";
import { CartProvider } from "@/context/cart";
import { FiltersProvider } from '@/context/filters';
import { products as initialProducts } from "@/mocks/products.json";
import { IS_DEVELOPMENT } from "@/config";
import Header from "@/components/Headers/Header";
import Footer from "@/components/Footer/Footer";
import Cart from "@/components/Cart/Cart";
import Pagination from "@/components/Pagination/Pagination";
import ContainerGradient from "@/components/ContainerGradient/ContainerGradient";

const Home = () => {

    const [ products ]                  = useState(initialProducts)
    const [ filterData, setFilterData ] = useState([]);
    const [ page, setPage ]             = useState(0);
    const { filters, filterProducts }   = useFilters()
    const filteredProducts              = filterProducts(filterData || products)

    const n = 10;

    useEffect(() => {
        setFilterData(
            products.filter((item, index) => {
                return (index >= page * n) & (index < (page + 1) * n);
            })
        );
    }, [ page ]);

    return (
        <FiltersProvider>
            <CartProvider>
                <ContainerGradient/>
                <Header />
                <Cart />
                <Products products = { filteredProducts }/>
                <Pagination 
                    setPage   = { setPage }
                    products  = { products }
                    quantity  = { n }
                />
                { IS_DEVELOPMENT && <Footer filters = { filters }/> }
            </CartProvider>
        </FiltersProvider>
    )
}

export default Home;
