import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// log validation
import {
  isValidEmail,
  isValidRequired,
  isValidMin,
  isValidMax
} from '../utils/logValidation';

interface IFormInput {
  username: string;
  email: string;
  age: number;
}

const TestForm: React.FC = () => {
  // cấu hình điều kiện của form
  const condition = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    age: {
      min: 18,
      max: 65
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert(
      'username:' + data.username + '| email' + data.email + '| age:' + data.age
    );
    reset();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-[24px] font-bold">Test Form</h2>

      <div className="flex">
        <label className="text-[16px] font-bold mt-[5px]">Name:</label>
        <div>
          <input
            className={`ml-2 px-3 py-1 rounded-[10px] border border-solid ${
              errors.username ? 'border-[#ed2020]' : 'border-[#aaa8a8]'
            }`}
            type="text"
            id="username"
            {...register('username', {
              required: isValidRequired
            })}
            placeholder="Họ và tên"
          />
          {errors.username && (
            <p className="mt-1 text-[12px] text-end text-[#ed2020]">
              {errors.username.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <label className="text-[16px] font-bold mt-[5px]">Email:</label>
        <div>
          <input
            className={`ml-2 px-3 py-1 rounded-[10px] border border-solid ${
              errors.email ? 'border-[#ed2020]' : 'border-[#aaa8a8]'
            }`}
            type="email"
            id="email"
            {...register('email', {
              required: isValidRequired,
              pattern: {
                value: condition.email,
                message: isValidEmail
              }
            })}
            placeholder="Nhập email"
          />
          {errors.email && (
            <p className="mt-1 text-[12px] text-end text-[#ed2020]">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <label className="text-[16px] font-bold mt-[5px]">Age:</label>
        <div>
          <input
            className={`ml-2 px-3 py-1 rounded-[10px] border border-solid ${
              errors.age ? 'border-[#ed2020]' : 'border-[#aaa8a8]'
            }`}
            type="number"
            id="age"
            {...register('age', {
              required: isValidRequired,
              min: {
                value: condition.age.min,
                message: `${isValidMin} ${condition.age.min}`
              },
              max: {
                value: condition.age.max,
                message: `${isValidMax} ${condition.age.max}`
              }
            })}
            placeholder="Nhập tuổi"
          />
          {errors.age && (
            <p className="mt-1 text-[12px] text-end text-[#ed2020]">
              {errors.age.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="px-5 py-[6px] bg-blue-600 text-white rounded-xl hover:opacity-90"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TestForm;
