export const _errorNetwork = (): any => ({
  code: 504,
  msg: 'Kết nối mạng có vấn đề vui lòng xem lại',
  data: false,
  funct: '_errorNetwork'
});

export const _errorResquestNotFound = (url: string): any => ({
  code: 404,
  msg: `${url} không tồn tại`,
  data: false,
  funct: '_errorResquestNotFound'
});

export const _errorOnTryCatch = (err: any, message?: string): any => {
  return {
    code: 9999,
    msg: message || `Có lỗi xảy ra, hãy kiểm lại thông tin`,
    data: false,
    catch: err.message,
    funct: '_errorOnTryCatch'
  };
};

export const _errorDataNotFound = (message?: string): any => ({
  code: 404,
  msg: message || `Dữ liệu không tồn tại`,
  data: null,
  funct: '_errorOnTryCatch'
});

export const _errorUnauthorized = (message?: string): any => ({
  code: 401,
  msg: message || `Không có quyền truy cập`,
  data: null,
  funct: '_errorOnTryCatch'
});

export const _success = (res: any, message?: string): any => ({
  code: 0,
  message: message || 'Thành công',
  data: res
});

export const _error = (
  message: string = 'error',
  code: number = 9999
): any => ({
  code: code,
  msg: message || `Có lỗi xảy ra, vui lòng quay lại sau`,
  data: false,
  funct: '_error'
});
