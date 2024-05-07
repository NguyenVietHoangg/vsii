/**
 * Kiểm tra xem một chuỗi có phải là một URL hợp lệ không.
 *
 * @param urlString Chuỗi URL cần kiểm tra.
 * @returns Trả về true nếu chuỗi là một URL hợp lệ, ngược lại trả về false.
 */
export const isValidUrl = (urlString: string): boolean => {
  var urlPattern = new RegExp(
    '^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
};

/**
 * Kiểm tra xem một đối tượng có phải là một đối tượng rỗng không.
 *
 * @param obj Đối tượng cần kiểm tra.
 * @returns Trả về true nếu đối tượng là rỗng, ngược lại trả về false.
 */
export const isEmptyObject = (obj: object): boolean => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
