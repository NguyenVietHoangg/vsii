const path = require('path');

module.exports = {
  // Các cài đặt khác của webpack...
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/') // Đặt alias ~ cho thư mục gốc src/
    }
  }
};
