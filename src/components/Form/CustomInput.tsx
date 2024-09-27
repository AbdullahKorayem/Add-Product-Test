import React, { useState } from "react";
import { Field, ErrorMessage, useField } from "formik";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import classNames from 'classnames';

interface CustomInputProps {
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
    icon?: React.ReactNode;
    helperText?: string;
    disabled?: boolean;
    as?: "input" | "textarea";
}

const CustomInput: React.FC<CustomInputProps> = ({
    name,
    label,
    placeholder,
    type = "text",
    icon,
    helperText,
    disabled = false,
    as = "input",
}) => {
    const [field, meta] = useField(name);
    const [showPassword, setShowPassword] = useState(false);

    const inputType = type === "password" ? (showPassword ? "text" : "password") : type;
    const InputComponent = as === "textarea" ? "textarea" : "input";

    const inputClass = classNames(
        'focus:shadow-sm transition-all duration-300 outline-none rounded-md border-2 border-[#E5E5E5] p-5 text-sm placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50',
        {
            'border-slate-300 bg-white h-10 w-full': as === "input",
            'border-slate-300 bg-white w-full': as === "textarea",
            'border-red-500 bg-red-50': meta.error && meta.touched,
            'pr-20': type === "password",
        }
    );

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
                    <span className="absolute text-gray-500 -translate-y-1/2 left-4 top-1/2">
                        {icon}
                    </span>
                )}
                <Field
                    as={InputComponent}
                    placeholder={placeholder}
                    {...field}
                    type={inputType}
                    className={inputClass}
                    aria-invalid={meta.error && meta.touched ? "true" : "false"}
                    aria-describedby={`${name}-error`}
                    disabled={disabled}
                />
                <div className="absolute inset-y-0 flex items-center gap-2 right-4">
                    {meta.error && meta.touched && (
                        <AlertCircle size={18} className="text-red-500" />
                    )}
                    {type === "password" && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            className="text-gray-500"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    )}
                </div>
            </div>
            <ErrorMessage
                component="div"
                name={name}
                className="pt-1 ml-1 text-xs text-red-500"
                id={`${name}-error`}
            />
            {helperText && !meta.error && (
                <p className="pt-1 ml-1 text-xs text-gray-500">{helperText}</p>
            )}
        </section>
    );
};

export default CustomInput;
