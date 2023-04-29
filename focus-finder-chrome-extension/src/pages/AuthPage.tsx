import { ChangeEvent, FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../GraphQL/mutations';
import Input from '../components/Input';
import Button from '../components/Button';

const AuthPage: FC = () => {
  const [email, setEmail] = useState<{message: string, error: boolean}>({message: '', error: false});
  const [password, setPassword] = useState<{message: string, error: boolean}>({message: '', error: false});
  const [addUser, {data}] = useMutation(ADD_USER);
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail({'message': e.target.value, error: false});
  };
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword({'message': e.target.value, error: false});
  };
  const handleSubmit = () => {
    try {
      // Validate Input
      if(!email.message || !password.message){
        if(!email.message){
          // handle no input email
          setEmail((prev) => ({...prev, error: true}));
        }
        if(!password.message){
          // handle no input password
          setPassword((prev) => ({...prev, error: true}));
        }
        return
      }
      // POST AUTH API USING GRAPHQL

      addUser({
        variables: { email: email, password: password }
      });

      setEmail((prev) => ({...prev, message: ''}));
      setPassword((prev) => ({...prev, message: ''}));

    }catch(e) {
      console.error(e)

    }
  };
  return (
    <div className='w-full h-full'>
      <h1 className='w-full text-center my-4'>Focus Finder</h1>
      <div className='flex flex-col justify-center items-center '>
        <h2 className='text-2xl'>Login</h2>
        <Input message="Email" value={email.message} error={email.error} onChange={handleChangeEmail} />
        <Input
          message="Password"
          value={password.message}
          error={password.error}
          type="password"
          onChange={handleChangePassword}
        />
        <Button message="submit" onClick={handleSubmit} />
        <a className='cursor-pointer text-lg' onClick={() => window.open(import.meta.env.VITE_APP_WEBSITE_URL)}>Don't have an account?</a>
      </div>
    </div>
  );
};

export default AuthPage;
