import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  username: string;
  email: string;
  age: number;
}

interface TestFormProps {
  onSubmit?: SubmitHandler<IFormInput>;
}

const TestForm: React.FC<TestFormProps> = ({ onSubmit }) => {
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

    formState: { errors }
  } = useForm<IFormInput>();

  const submitForm: SubmitHandler<IFormInput> = (data) => {
    if (onSubmit) {
      onSubmit({
        ...data,
        age: Number(data.age)
      });
    }
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitForm)}>
      <h2 className="text-[24px] font-bold">Test Form</h2>

      <div className="flex">
        <label htmlFor="username" className="text-[16px] font-bold mt-[5px]">
          Name:
        </label>
        <div>
          <input
            className={`ml-2 px-3 py-1 rounded-[10px] border border-solid ${
              errors.username ? 'border-[#ed2020]' : 'border-[#aaa8a8]'
            }`}
            type="text"
            id="username"
            {...register('username', {
              required: 'This field is required'
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
        <label htmlFor="email" className="text-[16px] font-bold mt-[5px]">
          Email:
        </label>
        <div>
          <input
            className={`ml-2 px-3 py-1 rounded-[10px] border border-solid ${
              errors.email ? 'border-[#ed2020]' : 'border-[#aaa8a8]'
            }`}
            type="email"
            id="email"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: condition.email,
                message: 'Invalid email format'
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
        <label htmlFor="age" className="text-[16px] font-bold mt-[5px]">
          Age:
        </label>
        <div>
          <input
            className={`ml-2 px-3 py-1 rounded-[10px] border border-solid ${
              errors.age ? 'border-[#ed2020]' : 'border-[#aaa8a8]'
            }`}
            type="number"
            id="age"
            {...register('age', {
              required: 'This field is required',
              min: {
                value: condition.age.min,
                message: 'Age must be at least 18'
              },
              max: {
                value: condition.age.max,
                message: 'Age must be at most 65'
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
