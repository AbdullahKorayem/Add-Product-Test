import * as Yup from 'yup'

// -----------------------------product
export const initialProductFormValues: ProductFormValues = {
    productImage: '',
    title: '',
    description: '',
    category: '',
    itemPrice: '',
}

export const validationSchema = Yup.object().shape({
    productImage: Yup.string().required('Image is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    itemPrice: Yup.string().required('Item price is required'),
})

// --------------------------------filter
export const initialFilterFormValues = {
    filter: '',
}
export const validationFilterSchema = Yup.object().shape({
    category: Yup.string().optional(),
})

// -----------------------search----------------------

export const searchInitialValues: SearchValues = { search: '' }

export const searchValidationSchema = Yup.object().shape({
    search: Yup.string()
        .min(3, 'Minimum 3 characters')
        .max(50, 'Maximum 50 characters')
        .required('Search is required'),
})
