import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import SwitchInput from '../Form/SwitchInput';



const SwitchFilter: React.FC<SwitchFilterProps> = ({
    name,
    options,
    initialValue = '',
    onChange
}) => {

    const initialValues = {
        [name]: initialValue
    };

    const validationSchema = Yup.object().shape({
        [name]: Yup.string().optional()
    });

    const handleChange = (value: string) => {

        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className="mb-3">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={() => { }}
            >
                {({ setFieldValue }) => (
                    <Form>
                        <SwitchInput
                            name={name}
                            options={options}
                            onChange={(value) => {
                                setFieldValue(name, value);
                                handleChange(value);
                            }}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SwitchFilter;