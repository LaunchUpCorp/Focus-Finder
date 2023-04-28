import { ChangeEvent, FC } from 'react';

export interface IAuthInput {
  message?: string;
  type?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input: FC<IAuthInput> = ({ message, type, value, onChange }) => {
  return (
    <div>
      <p>{message}</p>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input
