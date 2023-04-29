import { ChangeEvent, FC } from 'react';

export interface IAuthInput {
  message?: string;
  type?: string;
  value?: string;
  error?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input: FC<IAuthInput> = ({ message, type, value, error, onChange }) => {
  return (
    error ?
    <input className='text-xl p-2 my-4 placeholder-white rounded-md border border-red-500' placeholder={message} type={type} value={value} onChange={onChange} />
    :
    <input className='text-xl p-2 my-4 placeholder-white rounded-md border border-gray-700' placeholder={message} type={type} value={value} onChange={onChange} />
  );
};

export default Input
