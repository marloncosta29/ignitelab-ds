import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput({ ...rest }: TextInputProps) {
  return (
    <div className="py-4 px-3 rounded outline-none bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400 w-full focus:ring-2 ring-cyan-300">
      <input className={clsx("")} {...rest} />
    </div>
  );
}
