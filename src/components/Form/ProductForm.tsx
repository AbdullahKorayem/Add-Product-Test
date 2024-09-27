import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';

import UploadImage from './UploadImage';
import CustomInput from './CustomInput';
import SwitchInput from './SwitchInput';
import PriceInput from './PriceInput';
import { categoryOptions } from '../../utils/lib';
import { setLocaleStorage } from '@/utils/fucntions';
import { v4 as uuidv4 } from 'uuid';
import { Toaster, toast } from 'sonner';
import { Loader } from 'lucide-react';
import { initialProductFormValues, validationSchema } from '@/utils/schema';

type ProductFormProps = {
    setOpen: (open: boolean) => void;
}


const ProductForm: React.FC<ProductFormProps> = ({ setOpen }) => {
    const [previewUrl, setPreviewUrl] = useState<string>('');

    const onSubmit = async (
        values: ProductFormValues,
        { setSubmitting, resetForm }: FormikHelpers<ProductFormValues>
    ) => {
        try {
            const productsWithId = {
                ...values,
                id: uuidv4(),
                productImage: previewUrl,
            };
            setLocaleStorage(productsWithId);
            toast.success('Product uploaded successfully!');
            resetForm();
            setPreviewUrl('');
            setOpen(false); // Close the form after submission
        } catch (error) {
            console.error(error); // Log the error for debugging
            toast.error('Something went wrong!');
        } finally {
            setSubmitting(false);
        }
    };

    const handleImageChange = (url: string) => {
        setPreviewUrl(url);
    };

    return (
        <>
            <Formik
                initialValues={initialProductFormValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form className="space-y-5">
                        <UploadImage
                            name="productImage"
                            label="Upload Photo"
                            previewUrl={previewUrl}
                            onImageChange={(url) => {
                                handleImageChange(url);
                                setFieldValue('productImage', url);
                            }}
                        />
                        <CustomInput name="title" label="Title" />
                        <CustomInput name="description" label="Describe Your Item" as="textarea" />
                        <SwitchInput name="category" label="Category" options={categoryOptions} optional />
                        <PriceInput label="Item price" name="itemPrice" placeholder="00.00" />
                        <div className="flex flex-col gap-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="font-semibold rounded-md flex justify-center items-center bg-[#D9F99D] p-3 active:scale-[.99] duration-200 transition-all"
                            >
                                {isSubmitting ? (
                                    <Loader className="animate-spin" />
                                ) : (
                                    <p className="text-[#171717]">Upload item</p>
                                )}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            <Toaster richColors position="top-center" closeButton />
        </>
    );
};


export default ProductForm;