import React, { useEffect, useTransition } from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { Loader, Search } from 'lucide-react';
import { useDebounce } from 'use-debounce';
import { searchInitialValues, searchValidationSchema } from '../../utils/schema';
import { useProducts } from '@/context/ProductsContext';

interface SearchValues {
    search: string;
}

function SearchComponent() {
    const [isPending, startTransition] = useTransition();
    const { setSearchTerm } = useProducts();
    const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState('');
    const [debouncedValue] = useDebounce(debouncedSearchTerm, 1000);

    useEffect(() => {
        startTransition(() => {
            setSearchTerm(debouncedValue);
        });
    }, [debouncedValue, setSearchTerm]);

    const onSubmit = (values: SearchValues, { setSubmitting }: FormikHelpers<SearchValues>) => {
        setDebouncedSearchTerm(values.search);
        setSubmitting(false);

    };

    return (
        <section className='w-1/2'>
            <Formik
                initialValues={searchInitialValues}
                validationSchema={searchValidationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting, setFieldValue, values, submitForm }) => (
                    <Form>
                        <div className='relative'>
                            {isPending && values.search.length >= 3 ? (
                                <div className='absolute -translate-y-1 right-2 top-1/2'>
                                    <Loader className="text-gray-400 text-muted-foreground animate-spin" />
                                </div>
                            ) : (
                                <button
                                    type="button"
                                    className='absolute z-10 -translate-y-1/2 cursor-pointer right-2 top-1/2'
                                    onClick={() => submitForm()}
                                    disabled={isSubmitting}
                                >
                                    <Search className="text-gray-400 text-muted-foreground" />
                                </button>
                            )}
                            <Field
                                name='search'
                                placeholder='Search For Your Product'
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const value = e.target.value;
                                    setFieldValue('search', value);
                                    setDebouncedSearchTerm(value);
                                }}
                                className='w-full px-5 py-3 border rounded-md'
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    );
}

export default SearchComponent;