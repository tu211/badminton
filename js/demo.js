document.addEventListener('DOMContentLoaded', function () {
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

  // 設定影片路徑
  const videoPaths = {
    origin_00001: 'images/demo/00001/00001.mp4',
    nob_full_00001: 'images/demo/00001/00001_nob_full.mp4',
    nob_pose_00001: 'images/demo/00001/00001_nob_pose.mp4',
    nob_line_00001: 'images/demo/00001/00001_nob_line.mp4',
    nob_ball_00001: 'images/demo/00001/00001_nob_ball.mp4',
    nob_nopose_00001: 'images/demo/00001/00001_nob_nopose.mp4',
    nob_noline_00001: 'images/demo/00001/00001_nob_noline.mp4',
    nob_noball_00001: 'images/demo/00001/00001_nob_noball.mp4',
    full_00001: 'images/demo/00001/00001_full.mp4',
    pose_00001: 'images/demo/00001/00001_pose.mp4',
    ball_00001: 'images/demo/00001/00001_ball.mp4',
    line_00001: 'images/demo/00001/00001_line.mp4',
    nopose_00001: 'images/demo/00001/00001_nopose.mp4',
    noline_00001: 'images/demo/00001/00001_noline.mp4',
    noball_00001: 'images/demo/00001/00001_noball.mp4',

    origin_00105: 'images/demo/00105/00105.mp4',
    nob_full_00105: 'images/demo/00105/00105_nob_full.mp4',
    nob_pose_00105: 'images/demo/00105/00105_nob_pose.mp4',
    nob_line_00105: 'images/demo/00105/00105_nob_line.mp4',
    nob_ball_00105: 'images/demo/00105/00105_nob_ball.mp4',
    nob_nopose_00105: 'images/demo/00105/00105_nob_nopose.mp4',
    nob_noline_00105: 'images/demo/00105/00105_nob_noline.mp4',
    nob_noball_00105: 'images/demo/00105/00105_nob_noball.mp4',
    full_00105: 'images/demo/00105/00105_full.mp4',
    pose_00105: 'images/demo/00105/00105_pose.mp4',
    ball_00105: 'images/demo/00105/00105_ball.mp4',
    line_00105: 'images/demo/00105/00105_line.mp4',
    nopose_00105: 'images/demo/00105/00105_nopose.mp4',
    noline_00105: 'images/demo/00105/00105_noline.mp4',
    noball_00105: 'images/demo/00105/00105_noball.mp4',

    origin_00108: 'images/demo/00108/00108.mp4',
    nob_full_00108: 'images/demo/00108/00108_nob_full.mp4',
    nob_pose_00108: 'images/demo/00108/00108_nob_pose.mp4',
    nob_line_00108: 'images/demo/00108/00108_nob_line.mp4',
    nob_ball_00108: 'images/demo/00108/00108_nob_ball.mp4',
    nob_nopose_00108: 'images/demo/00108/00108_nob_nopose.mp4',
    nob_noline_00108: 'images/demo/00108/00108_nob_noline.mp4',
    nob_noball_00108: 'images/demo/00108/00108_nob_noball.mp4',
    full_00108: 'images/demo/00108/00108_full.mp4',
    pose_00108: 'images/demo/00108/00108_pose.mp4',
    ball_00108: 'images/demo/00108/00108_ball.mp4',
    line_00108: 'images/demo/00108/00108_line.mp4',
    nopose_00108: 'images/demo/00108/00108_nopose.mp4',
    noline_00108: 'images/demo/00108/00108_noline.mp4',
    noball_00108: 'images/demo/00108/00108_noball.mp4',
  };

  // 監聽按鈕點擊事件
  changeVideoBtn.addEventListener('click', function () {
    if (video.value === "00001"){
      if (bg.checked && pose.checked && line.checked && ball.checked) {
        changeVideoSource(videoPaths.nob_full_00001);
      } else if (bg.checked && pose.checked && line.checked) {
        changeVideoSource(videoPaths.nob_noball_00001);
      } else if (bg.checked && pose.checked && ball.checked) {
        changeVideoSource(videoPaths.nob_noline_00001);
      } else if (bg.checked && line.checked && ball.checked) {
        changeVideoSource(videoPaths.nob_nopose_00001);
      } else if (bg.checked && pose.checked) {
        changeVideoSource(videoPaths.nob_pose_00001);
      } else if (bg.checked && ball.checked) {
        changeVideoSource(videoPaths.nob_ball_00001);
      } else if (bg.checked && line.checked) {
        changeVideoSource(videoPaths.nob_line_00001);
      } else if (pose.checked && line.checked && ball.checked) {
        changeVideoSource(videoPaths.full_00001);
      } else if (pose.checked && line.checked) {
        changeVideoSource(videoPaths.noball_00001);
      } else if (pose.checked && ball.checked) {
        changeVideoSource(videoPaths.noline_00001);
      } else if (line.checked && ball.checked) {
        changeVideoSource(videoPaths.nopose_00001);
      } else if (pose.checked) {
        changeVideoSource(videoPaths.pose_00001);
      } else if (ball.checked) {
        changeVideoSource(videoPaths.ball_00001);
      } else if (line.checked) {
        changeVideoSource(videoPaths.line_00001);
      } else if (bg.checked) {
        alert("請再勾選人物、羽球或場地")
      } else {
        // 如果沒有 checkbox 被勾選，保留初始影片
        alert("請勾選顯示項目");
      }
    } else if (video.value === "00105") {
      if (bg.checked && pose.checked && line.checked && ball.checked) {
        changeVideoSource(videoPaths.nob_full_00105);
      } else if (bg.checked && pose.checked && line.checked) {
        changeVideoSource(videoPaths.nob_noball_00105);
      } else if (bg.checked && pose.checked && ball.checked) {
        changeVideoSource(videoPaths.nob_noline_00105);
      } else if (bg.checked && line.checked && ball.checked) {
        changeVideoSource(videoPaths.nob_nopose_00105);
      } else if (bg.checked && pose.checked) {
        changeVideoSource(videoPaths.nob_pose_00105);
      } else if (bg.checked && ball.checked) {
        changeVideoSource(videoPaths.nob_ball_00105);
      } else if (bg.checked && line.checked) {
        changeVideoSource(videoPaths.nob_line_00105);
      } else if (pose.checked && line.checked && ball.checked) {
        changeVideoSource(videoPaths.full_00105);
      } else if (pose.checked && line.checked) {
        changeVideoSource(videoPaths.noball_00105);
      } else if (pose.checked && ball.checked) {
        changeVideoSource(videoPaths.noline_00105);
      } else if (line.checked && ball.checked) {
        changeVideoSource(videoPaths.nopose_00105);
      } else if (pose.checked) {
        changeVideoSource(videoPaths.pose_00105);
      } else if (ball.checked) {
        changeVideoSource(videoPaths.ball_00105);
      } else if (line.checked) {
        changeVideoSource(videoPaths.line_00105);
      } else if (bg.checked) {
        alert("請再勾選人物、羽球或場地")
      } else {
        // 如果沒有 checkbox 被勾選，保留初始影片
        alert("請勾選顯示項目");
      }
    } else if (video.value === "00108") {
      if (bg.checked && pose.checked && line.checked && ball.checked) {
        changeVideoSource(videoPaths.nob_full_00108);
      } else if (bg.checked && pose.checked && line.checked) {
        changeVideoSource(videoPaths.nob_noball_00108);
      } else if (bg.checked && pose.checked && ball.checked) {
        changeVideoSource(videoPaths.nob_noline_00108);
      } else if (bg.checked && line.checked && ball.checked) {
        changeVideoSource(videoPaths.nob_nopose_00108);
      } else if (bg.checked && pose.checked) {
        changeVideoSource(videoPaths.nob_pose_00108);
      } else if (bg.checked && ball.checked) {
        changeVideoSource(videoPaths.nob_ball_00108);
      } else if (bg.checked && line.checked) {
        changeVideoSource(videoPaths.nob_line_00108);
      } else if (pose.checked && line.checked && ball.checked) {
        changeVideoSource(videoPaths.full_00108);
      } else if (pose.checked && line.checked) {
        changeVideoSource(videoPaths.noball_00108);
      } else if (pose.checked && ball.checked) {
        changeVideoSource(videoPaths.noline_00108);
      } else if (line.checked && ball.checked) {
        changeVideoSource(videoPaths.nopose_00108);
      } else if (pose.checked) {
        changeVideoSource(videoPaths.pose_00108);
      } else if (ball.checked) {
        changeVideoSource(videoPaths.ball_00108);
      } else if (line.checked) {
        changeVideoSource(videoPaths.line_00108);
      } else if (bg.checked) {
        alert("請再勾選人物、羽球或場地")
      } else {
        // 如果沒有 checkbox 被勾選，保留初始影片
        alert("請勾選顯示項目");
      }
    } else {
      alert("請選擇影片")
    }
  });

  // 切換影片源
  function changeVideoSource(source) {
    videoSource.src = source;
    myVideo.load(); // 重新載入影片
    myVideo.play(); // 播放影片
  }
});
