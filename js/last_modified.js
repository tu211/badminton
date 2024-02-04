document.addEventListener('DOMContentLoaded', function () {
    // 取得最後修改時間
    var lastModifiedTimestamp = document.lastModified;

    // 將時間戳轉換為日期對象
    var lastModifiedDate = new Date(lastModifiedTimestamp);

    // 格式化日期為 YYYY/MM/DD 格式
    var formattedDate = lastModifiedDate.getFullYear() + '/' +
                        (lastModifiedDate.getMonth() + 1).toString().padStart(2, '0') + '/' +
                        lastModifiedDate.getDate().toString().padStart(2, '0');

    // 將最後修改時間更新到頁面上
    var lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = '最後修改時間：' + formattedDate;
  });