import React from "react";
import { Field, ErrorMessage, useField } from "formik";
import { AlertCircle } from "lucide-react";
import classNames from 'classnames';
import icon from '/currency-pound-1.svg';
import { currencyMask } from "../../utils/mask";

interface CustomInputProps {
    name: string;
    label: string;
    placeholder?: string;
    disabled?: boolean;
    as?: "input" | "textarea";
}

const PriceInput: React.FC<CustomInputProps> = ({
    name,
    label,
    placeholder,
    as = "input",
}) => {
    const [field, meta, helpers] = useField(name);

    const inputClass = classNames(
        'focus:shadow-sm transition-all duration-300 outline-none rounded-md border-2 border-[#E5E5E5] p-5 text-sm placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50',
        {
            'border-slate-300 bg-white h-10 w-full': as === "input",
            'border-red-500 bg-red-50': meta.error && meta.touched,
            'pl-10': icon,
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const maskedEvent = currencyMask(e);
        helpers.setValue(maskedEvent.target.value);
    };

    return (
        <section className="flex flex-col gap-1">
            <label
                className={classNames('text-base pb-1', {
                    'text-gray-700': !meta.error || !meta.touched,
                    'text-red-500': meta.error && meta.touched,
                })}
                htmlFor={name}
            >
                {label}
            </label>
            <div className="relative flex flex-col w-full">
                {icon && (
                    <span className="absolute text-gray-500 -translate-y-1/2 left-3 top-1/2">
                        <img src={icon} alt="icon" />
                    </span>
                )}
                <Field
                    placeholder={placeholder}
                    {...field}
                    type="text"
                    className={inputClass}
                    aria-invalid={meta.error && meta.touched ? "true" : "false"}
                    aria-describedby={`${name}-error`}
                    onChange={handleChange}
                />
                <div className={'absolute inset-y-0 flex items-center gap-2 right-4'}>
                    {meta.error && meta.touched && (
                        <AlertCircle size={18} className="text-red-500" />
                    )}
                </div>
            </div>
            <ErrorMessage
                component="div"
                name={name}
                className="pt-1 ml-1 text-xs text-red-500"
                id={`${name}-error`}
            />
        </section>
    );
};

export default PriceInput;
