/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

// 1. Create a context for the filter state
// That context will be used to consume the filter state
export const FiltersContext = createContext();

// 2. Create a provider component to provide the context
// That provider will be used to provide the filter state
export function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
    })
    
    return (
        <FiltersContext.Provider value={{
            // 2.1. Provide the initial values of the context
            filters,
            setFilters
        }}>
            { /* 2.2. Wrap the children inside of FilterContext */ }
            {children}
        </FiltersContext.Provider>
    )
}