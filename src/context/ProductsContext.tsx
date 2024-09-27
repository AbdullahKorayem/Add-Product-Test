import { createContext, ReactNode, useContext, useEffect, useState } from "react";


interface ProductContextType {
    products: ProductSchema[]
    filteredProducts: ProductSchema[]
    searchTerm: string
    category: string
    setSearchTerm: (term: string) => void
    setCategory: (category: string) => void
}

const defaultContextValue = {
    products: [],
    filteredProducts: [],
    searchTerm: '',
    category: '',
    setSearchTerm: () => { },
    setCategory: () => { }

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
    }, [])

    useEffect(() => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) && (category === '' || product.category === category)
        )
        setFilteredProducts(filtered)
    }, [products, searchTerm, category])

    return (
        <ProductContext.Provider
            value={{
                products,
                filteredProducts,
                searchTerm,
                category,
                setSearchTerm,
                setCategory
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