function goToTop() {
    window.scrollTo(0, 0);
}

function goToFirst() {
    window.location.href = "index.html";
}

function goToLast() {
    window.location.href = "reference.html";
}

function goToPrevious() {
    if (window.location.href.indexOf("index.html") > -1) {
        window.location.href = "index.html";
    } else if (window.location.href.indexOf("data.html") > -1) {
        window.location.href = "index.html";
    } else if (window.location.href.indexOf("method.html") > -1) {
        window.location.href = "data.html";
    } else if (window.location.href.indexOf("edge_detection.html") > -1) {
        window.location.href = "method.html";
    } else if (window.location.href.indexOf("ball_tracking.html") > -1) {
        window.location.href = "edge_detection.html";
    } else if (window.location.href.indexOf("pose.html") > -1) {
        window.location.href = "ball_tracking.html";
    } else if (window.location.href.indexOf("hitter_and_hitting_point.html") > -1) {
        window.location.href = "pose.html";
    } else if (window.location.href.indexOf("winner_and_ball_trajectory.html") > -1) {
        window.location.href = "hitter_and_hitting_point.html";
    } else if (window.location.href.indexOf("demo.html") > -1) {
        window.location.href = "winner_and_ball_trajectory.html";
    } else if (window.location.href.indexOf("conclusion.html") > -1) {
        window.location.href = "demo.html";
    } else if (window.location.href.indexOf("reference.html") > -1) {
        window.location.href = "conclusion.html";
    } else {
        alert("RRR 寫網頁那家伙可能又把哪裡寫壞了QAQ");
    }
}

function goToNext() {
    if (window.location.href.indexOf("index.html") > -1) {
        window.location.href = "data.html";
    } else if (window.location.href.indexOf("data.html") > -1) {
        window.location.href = "method.html";
    } else if (window.location.href.indexOf("method.html") > -1) {
        window.location.href = "edge_detection.html";    
    } else if (window.location.href.indexOf("edge_detection.html") > -1) {
        window.location.href = "ball_tracking.html";
    } else if (window.location.href.indexOf("ball_tracking.html") > -1) {
        window.location.href = "pose.html";
    } else if (window.location.href.indexOf("pose.html") > -1) {
        window.location.href = "hitter_and_hitting_point.html";
    } else if (window.location.href.indexOf("hitter_and_hitting_point.html") > -1) {
        window.location.href = "winner_and_ball_trajectory.html";
    } else if (window.location.href.indexOf("winner_and_ball_trajectory.html") > -1) {
        window.location.href = "demo.html";
    } else if (window.location.href.indexOf("demo.html") > -1) {
        window.location.href = "conclusion.html";
    } else if (window.location.href.indexOf("conclusion.html") > -1) {
        window.location.href = "reference.html";
    } else if (window.location.href.indexOf("reference.html") > -1) {
        window.location.href = "reference.html";
    } else {
        alert("RRR 寫網頁那家伙可能又把哪裡寫壞了QAQ");
    }
}

