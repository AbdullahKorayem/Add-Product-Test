import React from 'react';
import { ErrorMessage, useField } from 'formik';
import classNames from 'classnames';

interface UploadImageProps {
    name: string;
    label: string;
    previewUrl: string;
    onImageChange: (url: string) => void;
}

function UploadImage({ name, label, previewUrl, onImageChange }: UploadImageProps) {
    const [field, meta] = useField(name);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result;
                if (typeof result === 'string') {
                    onImageChange(result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <h1 className="text-base">Upload Photos</h1>
            <div className="flex flex-col items-center py-20 border-2 border-[#E5E5E5] rounded gap-1">
                {previewUrl ? (
                    <div>
                        <img src={previewUrl} alt="Preview" style={{ maxWidth: '200px' }} />
                        <p>Image uploaded successfully</p>
                    </div>
                ) : (
                    <label
                        htmlFor={name}
                        className={classNames(
                            'border-2 border-yellow-200 text-black text-base px-5 py-3 outline-none rounded-md cursor-pointer',
                            {
                                'text-gray-700': !meta.error || !meta.touched,
                                'text-red-500': meta.error && meta.touched,
                            }
                        )}
                    >
                        {label}
                        <input
                            {...field}
                            type="file"
                            id={name}
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => {
                                field.onChange(e);
                                handleFileChange(e);
                            }}
                        />
                    </label>
                )}
                <ErrorMessage name={name} component="div" className="text-sm text-red-500" />
            </div>
        </>
    );
}

export default UploadImage;