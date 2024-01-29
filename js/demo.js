document.addEventListener('DOMContentLoaded', function () {
  // 獲取相關元素
  const bg = document.getElementById('the_checkbox_of_bg');
  const pose = document.getElementById('the_checkbox_of_pose');
  const ball = document.getElementById('the_checkbox_of_ball');
  const line = document.getElementById('the_checkbox_of_line');
  const changeVideoBtn = document.getElementById('the_btn');
  const myVideo = document.getElementById('myVideo');
  const videoSource = document.getElementById('videoSource');

  // 設定影片路徑
  const videoPaths = {
    origin: 'images/data/00001_video.mp4',
    nob_full: 'images/demo/AVI_to_MP4/00001_nob_full.mp4',
    nob_pose: 'images/demo/AVI_to_MP4/00001_nob_pose.mp4',
    nob_line: 'images/demo/AVI_to_MP4/00001_nob_line.mp4',
    nob_ball: 'images/demo/AVI_to_MP4/00001_nob_ball.mp4',
    nob_nopose: 'images/demo/AVI_to_MP4/00001_nob_nopose.mp4',
    nob_noline: 'images/demo/AVI_to_MP4/00001_nob_noline.mp4',
    nob_noball: 'images/demo/AVI_to_MP4/00001_nob_noball.mp4',
    
    full: 'images/demo/AVI_to_MP4/00001_full.mp4',
    pose: 'images/demo/AVI_to_MP4/00001_pose.mp4',
    ball: 'images/demo/AVI_to_MP4/00001_ball.mp4',
    line: 'images/demo/AVI_to_MP4/00001_line.mp4',
    nopose: 'images/demo/AVI_to_MP4/00001_nopose.mp4',
    noline: 'images/demo/AVI_to_MP4/00001_noline.mp4',
    noball: 'images/demo/AVI_to_MP4/00001_noball.mp4',
    // 可以根據需要添加更多影片路徑
  };

  // 監聽按鈕點擊事件
  changeVideoBtn.addEventListener('click', function () {
    // 根據 checkbox 狀態切換影片
    if (bg.checked && pose.checked && line.checked && ball.checked) {
      changeVideoSource(videoPaths.nob_full);
    } else if (bg.checked && pose.checked && line.checked) {
      changeVideoSource(videoPaths.nob_noball);
    } else if (bg.checked && pose.checked && ball.checked) {
      changeVideoSource(videoPaths.nob_noline);
    } else if (bg.checked && line.checked && ball.checked) {
      changeVideoSource(videoPaths.nob_nopose);
    } else if (bg.checked && pose.checked) {
      changeVideoSource(videoPaths.nob_pose);
    } else if (bg.checked && ball.checked) {
      changeVideoSource(videoPaths.nob_ball);
    } else if (bg.checked && line.checked) {
      changeVideoSource(videoPaths.nob_line);
    } else if (pose.checked && line.checked && ball.checked) {
      changeVideoSource(videoPaths.full);
    } else if (pose.checked && line.checked) {
      changeVideoSource(videoPaths.noball);
    } else if (pose.checked && ball.checked) {
      changeVideoSource(videoPaths.noline);
    } else if (line.checked && ball.checked) {
      changeVideoSource(videoPaths.nopose);
    } else if (pose.checked) {
      changeVideoSource(videoPaths.pose);
    } else if (ball.checked) {
      changeVideoSource(videoPaths.ball);
    } else if (line.checked) {
      changeVideoSource(videoPaths.line);
    } else {
      // 如果沒有 checkbox 被勾選，保留初始影片
      changeVideoSource(videoPaths.origin);
    }
  });

  // 切換影片源
  function changeVideoSource(source) {
    videoSource.src = source;
    myVideo.load(); // 重新載入影片
    myVideo.play(); // 播放影片
  }
});
