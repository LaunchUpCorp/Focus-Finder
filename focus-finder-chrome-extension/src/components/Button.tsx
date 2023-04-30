import { FC } from 'react';

interface IAuthSubmitButton {
  message?: string;
  onClick?: () => void;
}
const Button: FC<IAuthSubmitButton> = ({ message, onClick }) => {
  return <button className='text-lg py-2 px-4 my-2' onClick={onClick}>{message}</button>;
};

export default Button
