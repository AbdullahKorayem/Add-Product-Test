import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ProductContextType {
    products: ProductSchema[];
    filteredProducts: ProductSchema[];
    currentProducts: ProductSchema[];
    searchTerm: string;
    switchValue: string;
    switchCategory: string;
    setSearchTerm: (term: string) => void;
    setSwitchValue: (switchValue: string) => void;
    setSwitchCategory: (switchCategory: string) => void;
    setCurrentPage: (page: number) => void;
    nextPage: () => void;
    prevPage: () => void;
    totalPages: number
    currentPage: number
    addItem: (product: ProductSchema) => void
    updateProducts: (newProducts: ProductSchema[]) => void;
}

const defaultContextValue: ProductContextType = {
    products: [],
    addItem: () => { },
    filteredProducts: [],
    currentProducts: [],
    searchTerm: '',
    switchValue: '',
    switchCategory:'',
    setSearchTerm: () => { },
    setSwitchValue: () => { },
    setSwitchCategory: () => { },
    setCurrentPage: () => { },
    nextPage: () => { },
    prevPage: () => { },
    totalPages: 1,
    currentPage: 1,
    updateProducts: () => { }
};

export const ProductContext = createContext<ProductContextType>(defaultContextValue);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const initialState: ProductSchema[] = JSON.parse(
        localStorage.getItem('products') || '[]')
    const [products, setProducts] = useState<ProductSchema[]>(initialState);
    const [filteredProducts, setFilteredProducts] = useState<ProductSchema[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [switchValue, setSwitchValue] = useState<string>('');
    const [switchCategory, setSwitchCategory] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;

    const allProducts = filteredProducts.length > 0 ? filteredProducts : products;
    const totalPages = Math.ceil(allProducts.length / productsPerPage);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);

    function addItem(data: ProductSchema) {
        try {
            const existingProducts: ProductSchema[] = JSON.parse(
                localStorage.getItem('products') || '[]'
            )
            existingProducts.push(data)
            localStorage.setItem('products', JSON.stringify(existingProducts))
            setProducts(existingProducts)
        } catch (error) {
            console.error('Error updating localStorage:', error)
        }
    }
    useEffect(() => {
        let filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.category.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        );


        filtered = (() => {
            switch (switchValue) {
                case 'low':
                    return filtered.sort((a, b) => (a.itemPrice) - (b.itemPrice));
                case 'high':
                    return filtered.sort((a, b) => (b.itemPrice) - (a.itemPrice));
                case 'a-z':
                    return filtered.sort((a, b) => a.title.localeCompare(b.title));
                case 'z-a':
                    return filtered.sort((a, b) => b.title.localeCompare(a.title));
                default:
                    return filtered;
            }
        })();

        filtered = (() => {
            if (switchCategory) {
                return filtered.filter(product => product.category.toLowerCase() === switchCategory.toLowerCase());
            }
            return filtered;
        })();
      



        setFilteredProducts(filtered);
    }, [products, searchTerm, switchValue ,switchCategory]);

    const updateProducts = (newProducts: ProductSchema[]) => {
        setProducts(newProducts);
        localStorage.setItem('products', JSON.stringify(newProducts));
    };

    return (
        <ProductContext.Provider value={{
            products,
            addItem,
            filteredProducts,
            currentProducts,
            searchTerm,
            switchValue,
            setSwitchCategory,
            switchCategory,
            setSearchTerm,
            setSwitchValue,
            setCurrentPage,
            nextPage,
            prevPage,
            totalPages,
            updateProducts,
            currentPage
        }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
};
