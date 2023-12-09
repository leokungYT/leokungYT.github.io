//เลื่อนsrcollไปด้านบนเอง อันนี้งง
let mybutton = document.getElementById("scrollUpButton");
window.onscroll = function() {
    requestAnimationFrame(scrollFunction);
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.opacity = "0";
        setTimeout(() => mybutton.style.display = "none", 300);
    }
}
function topFunction() {
    scrollToTop(1000); // Scroll to top in 1000 milliseconds (1 second)
}

function scrollToTop(duration) {
    const start = window.scrollY;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    function scroll() {
        const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        const timeElapsed = currentTime - startTime;
        window.scrollTo(0, easeInOutQuad(timeElapsed, start, -start, duration));
        if (timeElapsed < duration) {
            requestAnimationFrame(scroll);
        }
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scroll);
}
//ซูม รูปอันนี้งง
document.addEventListener("DOMContentLoaded", function () {
    const originalImage = document.getElementById("original-image");
    const zoomedImage = document.getElementById("zoomed-image");
    const imageContainer = document.getElementById("image-container");//ชื่อ class
    let isMouseDown = false;
    originalImage.addEventListener("mousedown", function (event) {
        isMouseDown = true;
        updateZoomedImage(event);
    });
    document.addEventListener("mousemove", function (event) {
        if (isMouseDown) {
            updateZoomedImage(event);
        }
    });
    document.addEventListener("mouseup", function () {
        isMouseDown = false;
        zoomedImage.style.display = "none";
    });
    function updateZoomedImage(event) {
        const offsetX = event.pageX - imageContainer.offsetLeft;
        const offsetY = event.pageY - imageContainer.offsetTop;

        const zoomFactor = 2; // You can adjust the zoom factor as needed
        const zoomedWidth = originalImage.width * zoomFactor;
        const zoomedHeight = originalImage.height * zoomFactor;

        const left = offsetX - zoomedWidth / 2;
        const top = offsetY - zoomedHeight / 2;

        zoomedImage.style.width = zoomedWidth + "px";
        zoomedImage.style.height = zoomedHeight + "px";
        zoomedImage.style.left = left + "px";
        zoomedImage.style.top = top + "px";
        zoomedImage.style.display = "block";
    }
});
// ส่วนของการค้นหาclass อันนี้งง
document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton");
    scrollButton.addEventListener("click", scrollToPersonalHistory);
});
function scrollToPersonalHistory() {
    var targetElement = document.querySelector(".PersonalHistory");
        targetElement.scrollIntoView({ behavior: "smooth" });
    } 

document.addEventListener("DOMContentLoaded", function() {
    var newButton = document.getElementById("newButton");
    newButton.addEventListener("click", scrollToAchievements);
});
function scrollToAchievements() {
    var newTargetElement = document.querySelector(".Achievements");
        newTargetElement.scrollIntoView({ behavior: "smooth" });
    } 

document.addEventListener("DOMContentLoaded", function() {
    var titod = document.getElementById("titod");
    titod.addEventListener("click", scrollToFooterContent);
});
function scrollToFooterContent() {
    var newTargetElement = document.querySelector(".footer-content");
        newTargetElement.scrollIntoView({ behavior: "smooth" });
    } 

function changeHeaderText() {
    var heading = document.getElementById("animated-text");
    if (heading.innerHTML === "แบร่!!!") {
      heading.innerHTML = "จีรศักดิ์ พิมพ์คำไหล";
    } else {
      heading.innerHTML = "แบร่!!!";
    }
    topFunction();
        
}
//api สุ่ม
function myFunction() {
    fetch("https://catfact.ninja/fact")
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        let txt = "";
          for (let x in data) {
            txt += data[x] + " ";
          document.getElementById("demo2").innerHTML = txt;
          };
      
        return data;
      })  
    }
