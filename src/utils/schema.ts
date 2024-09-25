import * as Yup from 'yup'

export const initialProductFormValues = {
    ProductImage: '',
    title: '',
    description: '',
    category: '',
    itemPrice: '',
}

export const validationSchema = Yup.object().shape({
    ProductImage: Yup.mixed()
        .required('A file is required')
        .test('fileType', 'Unsupported file format', (value) => {
            if (value && value instanceof File) {
                return ['image/jpeg', 'image/png', 'image/gif'].includes(
                    value.type
                )
            }
            return false
        }),
    title: Yup.string().required('Title is Required'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    itemPrice: Yup.number()
        .required('Item price is required')
        .positive('Price must be positive'),
})
