'use client'
import CustomInput from "./CustomInput";
import { Loader2 } from "lucide-react";


import { Toaster, toast } from "sonner";
import { Formik, Form } from "formik";
import UploadImage from "./UploadImage";
import SwitchInput from "./SwitchInput";
import PriceInput from "./PriceInput";
import { initialProductFormValues, validationSchema } from "../../utils/schema";



const ProductForm = () => {

    const onSubmit = async (values: typeof initialProductFormValues, { setSubmitting, resetForm }: any) => {
        try {
            console.log("Submitted Values:", values);
            toast.success('Product uploaded successfully!');



            setSubmitting(false);
            resetForm();
        } catch (error) {
            toast.error('Something went wrong!');
            setSubmitting(false);
        }
    };

    // const localStorageCart = JSON.parse(localStorage.getItem('products') || '[]')


    return (


        <>
            <Formik
                initialValues={initialProductFormValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-5 ">
                            <UploadImage name="ProductImage" label="Upload Photo" />
                        <CustomInput
                            name="title"
                            label='Title'
                        />

                        <CustomInput
                            name="description"
                            label="Describe Your Item"
                            as="textarea"
                        />
                        <SwitchInput name='category' label="Category" />
                        <PriceInput label="Item price" name="itemPrice" placeholder="00.00" />

                        <div className="flex flex-col gap-4 ">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="font-semibold rounded-md bg-[#D9F99D] p-3 active:scale-[.99] duration-200 transition-all"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className=" animate-spin" />
                                    </>
                                ) : <p className="text-[#171717]">Upload item</p>}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            <Toaster richColors position="top-center" closeButton />
        </ >
    )
}
export default ProductForm;
