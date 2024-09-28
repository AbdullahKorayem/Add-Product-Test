import ProductCard from './ProductItems/ProductCard';
import { useProducts } from '@/context/ProductsContext';
import addProduct from '/product-package-add-icon.svg';

function ProductView() {
    const { currentProducts, products, filteredProducts } = useProducts();

    const hasNoProducts = products.length === 0;
    const hasFilteredProducts = filteredProducts.length > 0;

    return (
        <div className="flex flex-wrap items-center justify-center gap-6 p-5 space-y-4 max-w-screen-3xl lg:flex-row">
            {hasNoProducts ? (
                <>
                    <img src={addProduct} alt="Add Product" className='pt-10 w-60' />
                </>
            ) : (
                    (hasFilteredProducts ? currentProducts : currentProducts).map(product => (
                    
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        productImage={product.productImage}
                        itemPrice={product.itemPrice}
                        category={product.category}
                    />
                ))
            )}
        </div>
    );
}

export default ProductView;
