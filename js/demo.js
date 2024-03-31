document.addEventListener('DOMContentLoaded', function () {
  function getCheckedStatus(arr) {
    var resultArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].checked) {
        resultArr.push(1); // 复选框被选中，结果为1
      } else {
        resultArr.push(0); // 复选框未被选中，结果为0
      }
    }
    return resultArr;
  }

  // 切換影片源
  function changeVideoSource(source) {
    videoSource.src = source;
    myVideo.load(); // 重新載入影片
    myVideo.play(); // 播放影片
  }

  // 獲取相關元素
  const video = document.getElementById('the_option_of_video');
  const bg = document.getElementById('the_checkbox_of_bg');
  const pose = document.getElementById('the_checkbox_of_pose');
  const ball = document.getElementById('the_checkbox_of_ball');
  const line = document.getElementById('the_checkbox_of_line');
  const timeline = document.getElementById('the_checkbox_of_timeline');
  const trajectory = document.getElementById('the_checkbox_of_trajectory');
  const changeVideoBtn = document.getElementById('the_btn');
  const myVideo = document.getElementById('myVideo');
  const videoSource = document.getElementById('videoSource');

  arr = [bg, ball, pose, line, timeline, trajectory]

  const filepath = "images/demo/";
  changeVideoBtn.addEventListener('click', function () {
  if (video.value == "00001"){
    Path = filepath + video.value +"/";
    var resultArr = getCheckedStatus(arr);
    videoPaths = Path + resultArr.join('') + ".mp4";
    changeVideoSource(videoPaths);
  } else if (video.value == "00105"){
    Path = filepath + video.value + "/";
    var resultArr = getCheckedStatus(arr);
    videoPaths = Path + resultArr.join('') + ".mp4";
    changeVideoSource(videoPaths);
  } else if (video.value == "00108"){
    Path = filepath + video.value + "/";
    var resultArr = getCheckedStatus(arr);
    videoPaths = Path + resultArr.join('') + ".mp4";
    changeVideoSource(videoPaths);
  } else {
    alert("請選擇影片!!");
  }
  })
});
