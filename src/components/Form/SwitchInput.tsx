import React from 'react';
import clsx from 'clsx';
import { ErrorMessage, useField } from 'formik';



function SwitchInput({ name, label, options, optional, onChange }: SwitchProps) {
    const [field, meta, helpers] = useField(name);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        helpers.setValue(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <section className='space-y-2'>
            {label !== 'Filter' && <label
                htmlFor={name}
                className={clsx('text-base pb-1', {
                    'text-gray-700': !meta.error || !meta.touched,
                    'text-red-500': meta.error && meta.touched,
                })}
            >
                {label}
            </label>}


            <select
                id={name}
                {...field}
                onChange={handleChange}
                className={clsx('w-full border-2 md:px-5 md:py-3 px-3 py-2  rounded border-[#E5E5E5]', meta.touched && meta.error && 'border-red-500')}
                aria-label="Category select"
            >
                {optional && (
                    <option value='' disabled>Select a category</option>
                )}
                {options.map(({ value, label }) => (
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