import React from 'react';
import SwitchInput from '../Form/SwitchInput';
import { filterOptions } from '../../utils/lib';
import { Form, Formik } from 'formik';
import { initialFilterFormValues, validationFilterSchema } from '../../utils/schema';

function SwitchFilter() {
    const handleChange = (values: typeof initialFilterFormValues) => {
        console.log(values.filter);
    };

    return (<>
        <h1>Sort By</h1>
        <section>
            <Formik
                initialValues={initialFilterFormValues}
                validationSchema={validationFilterSchema}
                onSubmit={() => { }}
            >
                {({ values, setFieldValue }) => (
                    <Form className="">
                        <SwitchInput
                            name="filter"
                            label="Filter"
                            options={filterOptions}
                            onChange={(value) => {
                                setFieldValue('filter', value);
                                handleChange({ ...values, filter: value });
                            }}
                        />
                    </Form>
                )}
            </Formik>
        </section>
    </>
    );
}

export default SwitchFilter;