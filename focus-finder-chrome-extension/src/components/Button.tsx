import { FC } from 'react';

interface IAuthSubmitButton {
  message?: string;
  onClick?: () => void;
}
const Button: FC<IAuthSubmitButton> = ({ message, onClick }) => {
  return <button onClick={onClick}>{message}</button>;
};

export default Button
