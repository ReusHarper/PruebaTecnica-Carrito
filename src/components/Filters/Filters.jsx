/* eslint-disable react/prop-types */
import { useId } from 'react';
import { useFilters } from '@/hooks/useFilters';
import './Filters.css';

const Filters = () => {
    const { filters, setFilters } = useFilters();
    
    // const [minPrice, setMinPrice] = useState(0) // estado local
    
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event) => {
        
        setFilters( prevState => ({
            ...prevState,
            minPrice: event.target.value
        }));
    }

    const handleChangeCategory = (event) => {
        // aqui algo huele mal
        // estamos pasando la funcion de actualizar el estado
        // nativa de react a un componente hijo
        setFilters( prevState => ({
            ...prevState,
            category: event.target.value
        }));
    }

    return (
        <section className = 'filters'>
            <div>
                <label htmlFor = "price">Precio mínimo:</label>
                <input 
                    type     = "range"
                    id       = {minPriceFilterId}
                    min      = "0"
                    max      = "1000"
                    onChange = {handleChangeMinPrice}
                    value    = {filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor = {categoryFilterId}>Categoría</label>
                <select id = {categoryFilterId} onChange = {handleChangeCategory}>
                    <option value = "all">Todas</option>
                    <option value = "laptops">Portátiles</option>
                    <option value = "smartphones">Celuláres</option>
                    <option value = "fragrances">Perfúmes</option>
                    <option value = "skincare">Salud y Belleza</option>
                </select>
            </div>
        </section>
    )
}

export default Filters;