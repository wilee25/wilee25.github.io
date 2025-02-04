document.addEventListener("DOMContentLoaded", function() {
    var url = window.location.href;
    var badgeUrl = `https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${encodeURIComponent(url)}&count_bg=%23B86691&title_bg=%23863E64&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false`;
    
    var img = document.createElement("img");
    img.src = badgeUrl;
    img.alt = "Hits";
    img.style.display = "block";
    img.style.marginBottom = "10px";

    var targetElement = document.getElementById("hits-container");
    if (targetElement) {
        targetElement.appendChild(img);
    }
});
