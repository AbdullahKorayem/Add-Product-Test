interface optionsData {
    value: string
    label: string
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
    itemPrice: string
    productImage: {
        lastModified?: number
        lastModifiedDate?: Date
        name?: string
        size?: number
        type?: string
        relativePath?: string
    } | null
}

