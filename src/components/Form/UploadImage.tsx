import React from 'react'
import { ErrorMessage, useField } from "formik";
import clsx from 'clsx';
import classNames from 'classnames';

interface UploadImageProps {
    name: string;
    label: string;
}

function UploadImage({ name, label }: UploadImageProps) {
    const [field, meta, { setValue }] = useField(name);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setValue(files[0]);
        }
    };

    return (
        <>
            <h1 className="text-base ">Upload Photos</h1>

            <div className="flex flex-col items-center py-20 border-2 border-[#E5E5E5] rounded gap-1">
                <label
                    htmlFor={name}
                    className={classNames('border-2 border-yellow-200 text-black text-base px-5 py-3 outline-none rounded-md cursor-pointer', {
                        'text-gray-700': !meta.error || !meta.touched,
                        'text-red-500': meta.error && meta.touched,
                    })}
                >
                    {label}
                    <input
                        type="file"
                        id={name}
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </label>

                {field.value && (
                    <div className="mt-2">
                        <p>Selected file: {field.value.name}</p>
                    </div>
                )}
                <ErrorMessage name={name} component="div" className="text-sm text-red-500" />
            </div>
        </>
    )
}

export default UploadImage;