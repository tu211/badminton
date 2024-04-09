// 检查是否支持 localStorage
if (typeof localStorage !== "undefined") {
    // 初始化访问者计数
    var visitorCount = localStorage.getItem("visitorCount");
    if (!visitorCount) {
      localStorage.setItem("visitorCount", 0);
      visitorCount = 0;
    }
  
    // 更新页面显示
    document.getElementById("visitorCount").innerText = visitorCount;
  
    // 增加访问者计数
    window.addEventListener("beforeunload", function() {
      localStorage.setItem("visitorCount", ++visitorCount);
    });
  } else {
    // 如果不支持 localStorage，则提示用户
    alert("Sorry, your browser does not support localStorage...");
  }
  