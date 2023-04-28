import { ChangeEvent, FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../GraphQL/mutations';
import Input from '../components/Input';
import Button from '../components/Button';

const AuthPage: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [addUser] = useMutation(ADD_USER);
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    // POST AUTH API USING GRAPHQL
    addUser({
      variables: { email: email, password: password }
    });
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Login</h1>
      <Input message="Email" value={email} onChange={handleChangeEmail} />
      <Input
        message="Password"
        value={password}
        type="password"
        onChange={handleChangePassword}
      />
      <Button message="submit" onClick={handleSubmit} />
    </div>
  );
};

export default AuthPage;
