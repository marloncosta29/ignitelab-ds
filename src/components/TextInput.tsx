import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

// INPUT
export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}
function TextInputInput({ ...rest }: TextInputInputProps) {
  return (
    <input
      className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none '
      {...rest}
    />
  );
}

//ICON
interface TextInputIconProps {
  children: ReactNode;
}
function TextInputIcon(props: TextInputIconProps) {
  return <Slot className='w-6 h-6 text-gray-400'>{props.children}</Slot>;
}

//ROOT
export interface TextInputRootProps {
  children: ReactNode;
}
function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className='flex h-12 items-center gap-3 py-4 px-3 rounded outline-none bg-gray-800  w-full focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  );
}

TextInputInput.displayName = 'TextInput.Input';
TextInputRoot.displayName = 'TextInput.Root';
TextInputIcon.displayName = 'TextInput.Icon';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
