import ProductCard from './ProductItems/ProductCard';
import { useProducts } from '@/context/ProductsContext';

function ProductView() {
    const { products } = useProducts();

    return (
        <div className="flex items-center gap-6 align-baseline max-w-screen-2xl">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    title={product.title}
                    productImage={product.productImage}
                    itemPrice={product.itemPrice}
                />
            ))}
        </div>
    );
}

export default ProductView;