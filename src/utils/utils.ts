import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const categoryOptions = [
    { value: 'shirts', label: 'Shirts' },
    { value: 'pants', label: 'Pants' },
    { value: 'shoes', label: 'Shoes' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'jackets', label: 'Jackets' },
    { value: 'dresses', label: 'Dresses' },
    { value: 'sweaters', label: 'Sweaters' },
]

export const filterOptions = [
    { value: 'a-z', label: 'A-Z' },
    { value: 'z-a', label: 'Z-A' },
    { value: 'low', label: 'Price:Low to High' },
    { value: 'high', label: 'Price:High to Low' },
]
