import { createContext, ReactNode, useContext, useEffect, useState } from "react";


interface ProductContextType {
    products: ProductSchema[]
    filteredProducts: ProductSchema[]
    searchTerm: string
    category: string
    setSearchTerm: (term: string) => void
    setCategory: (category: string) => void
    updateProducts: (newProducts: ProductSchema[]) => void
}

const defaultContextValue: ProductContextType = {
    products: [],
    filteredProducts: [],
    searchTerm: '',
    category: '',
    setSearchTerm: () => { },
    setCategory: () => { },
    updateProducts: () => { }
}

export const ProductContext = createContext<ProductContextType>(defaultContextValue);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<ProductSchema[]>([])
    const [filteredProducts, setFilteredProducts] = useState<ProductSchema[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [category, setCategory] = useState('')

    useEffect(() => {
        const storedProducts = localStorage.getItem('products')
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts))
        }
    }, [products])

    useEffect(() => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (category === '' || product.category === category)
        )
        setFilteredProducts(filtered)
    }, [products, searchTerm, category])

    const updateProducts = (newProducts: ProductSchema[]) => {
        setProducts(newProducts)
        localStorage.setItem('products', JSON.stringify(newProducts))
    }

    return (
        <ProductContext.Provider
            value={{
                products,
                filteredProducts,
                searchTerm,
                category,
                setSearchTerm,
                setCategory,
                updateProducts
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
};