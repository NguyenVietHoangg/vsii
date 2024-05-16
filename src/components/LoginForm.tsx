import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
  name: string;
  email: string;
  age: string;
}

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address'
            }
          })}
        />
        <span> {errors.email && <p>{errors.email.message}</p>}</span>
      </div>

      {/* Nút gửi biểu mẫu */}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
