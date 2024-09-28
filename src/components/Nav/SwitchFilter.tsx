import SwitchInput from '../Form/SwitchInput';
import { Form, Formik } from 'formik';
import { initialFilterFormValues, validationFilterSchema } from '../../utils/schema';
import { useProducts } from '@/context/ProductsContext';
import { filterOptions } from '@/utils/utils';

function SwitchFilter() {
    const { setSwitchValue } = useProducts();

    const handleChange = (values: typeof initialFilterFormValues) => {
        setSwitchValue(values.filter)
    };

    return (<>
        <h1 className='text-clamp-sm'>Sort By</h1>
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