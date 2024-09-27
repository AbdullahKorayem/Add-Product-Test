export function setLocaleStorage(data: ProductSchema) {
    try {
        const existingProducts: ProductSchema[] = JSON.parse(
            localStorage.getItem('products') || '[]'
        )
        existingProducts.push(data)
        localStorage.setItem('products', JSON.stringify(existingProducts))
    } catch (error) {
        console.error('Error updating localStorage:', error)
    }
}
