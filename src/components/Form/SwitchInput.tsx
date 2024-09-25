import React, { Fragment } from 'react';
import clsx from 'clsx';
import { ErrorMessage, useField } from 'formik';
import classNames from 'classnames';

interface SwitchProps {
    name: string;
    label: string;
}

const categoryOptions = [
    { value: 'shirts', label: 'Shirts' },
    { value: 'pants', label: 'Pants' },
    { value: 'shoes', label: 'Shoes' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'jackets', label: 'Jackets' },
    { value: 'dresses', label: 'Dresses' },
    { value: 'sweaters', label: 'Sweaters' },
];

function SwitchInput({ name, label }: SwitchProps) {
    const [field, meta, helpers] = useField(name);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        helpers.setValue(event.target.value);
    };

    return (
        <section className='space-y-2'>
            <label
                htmlFor={name}
                className={classNames('text-base pb-1', {
                    'text-gray-700': !meta.error || !meta.touched,
                    'text-red-500': meta.error && meta.touched,
                })}
            >
                {label}
            </label>

            <select
                name={name}
                value={field.value || 'select'}
                onChange={handleChange}
                className={clsx('w-full border-2 p-2 rounded border-[#E5E5E5]', meta.touched && meta.error && 'border-red-500')}
                aria-label="Category select"
            >
                <option value='select' disabled>Select a category</option>
                {categoryOptions.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>

            <ErrorMessage name={name} component="div" className="text-sm text-red-500" />
        </section>
    );
}

export default SwitchInput;
