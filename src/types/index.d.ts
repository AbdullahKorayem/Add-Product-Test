interface optionsData {
    value: string
    label: string
}
interface ProductFormValues {
    productImage: string
    title: string
    description: string
    category: string
    itemPrice: string
}

interface SwitchProps {
    name?: string | FieldHookConfig<any>
    label?: string
    options: optionsData[]
    optional?: boolean
}

interface SearchValues {
    search: string
}

interface ProductSchema {
    id: string
    title: string
    description: string
    category: string
    itemPrice: number 
    productImage: string
}

interface ProductCardProps {
    itemPrice: number
    title: string
    productImage?: string
}


