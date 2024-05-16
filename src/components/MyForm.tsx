import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// Định nghĩa kiểu dữ liệu cho các trường của biểu mẫu
interface FormValues {
  fieldName: string;
}

const MyForm: React.FC = () => {
  // Sử dụng useForm để quản lý trạng thái của biểu mẫu
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    trigger,
    reset,
    clearErrors,
    setError,
    setFocus,
    getValues
  } = useForm<FormValues>();

  // Hàm xử lý khi biểu mẫu được gửi
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data); // In ra dữ liệu của biểu mẫu khi được gửi
    // Gửi dữ liệu đến máy chủ, thực hiện các thao tác lưu trữ, xử lý, v.v.
  };

  // Hàm để thiết lập giá trị của một trường
  const setField = () => {
    setValue('fieldName', 'example value');
  };

  // Hàm để kích hoạt kiểm tra xác thực cho một trường
  const validateField = async () => {
    await trigger('fieldName');
  };

  // Hàm để đặt lỗi cho một trường
  const setErrorForField = () => {
    setError('fieldName', {
      type: 'required',
      message: 'This field is required'
    });
  };

  // Hàm để xóa lỗi của một trường
  const clearErrorForField = () => {
    clearErrors('fieldName');
  };

  // Hàm để đặt trạng thái tiêu điểm cho một trường
  const setFocusOnField = () => {
    setFocus('fieldName');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Đăng ký các trường của biểu mẫu với `register` */}
      <input {...register('fieldName')} />

      {/* Hiển thị lỗi nếu có */}
      {errors.fieldName && <p>{errors.fieldName.message}</p>}

      {/* Nút gửi biểu mẫu */}
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>

      {/* Các nút chức năng */}
      <button type="button" onClick={setField}>
        Set Field Value
      </button>
      <button type="button" onClick={validateField}>
        Validate Field
      </button>
      <button type="button" onClick={setErrorForField}>
        Set Error
      </button>
      <button type="button" onClick={clearErrorForField}>
        Clear Error
      </button>
      <button type="button" onClick={setFocusOnField}>
        Set Focus
      </button>
      <button type="button" onClick={() => console.log(getValues())}>
        Get Values
      </button>
    </form>
  );
};

export default MyForm;
