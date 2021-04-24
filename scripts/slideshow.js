window.addEventListener("load", addListeners)

var images = new Array("images/graduation2_opt.jpg", "images/scotish-thistle_opt.jpg",
    "images/seattle-space-needle_opt.jpg", "images/seattle-city_opt.jpg",
    "images/rhona_opt.jpg", "images/graduation_opt.jpg");
                        
var captions = new Array("Black and White", "A Scotish Thistle",
    "The Seattle Space Needle", "The city of Seattle", "My baby",
    "A graduation");

var index = 0
var timer

function addListeners() {
    
    document.getElementById("next").addEventListener("click", changeImage);
    document.getElementById("play").addEventListener("click", function () {
        clearInterval(timer);
        timer = setInterval("changeImage()", 2000);
    });
    document.getElementById("pause").addEventListener("click", function () {
        clearInterval(timer);
    });
    document.getElementById("previous").addEventListener("click", function(){
        index--;
        document.getElementById("picture").src = images[index];
        document.getElementById("caption").innerHTML = captions[index];
        if (index == -1) {
            document.getElementById("picture").src = "images/graduation_opt.jpg"
            document.getElementById("caption").innerHTML = "A Graduation"
            index = images.length - 1
        }
});
}

function changeImage() {
    index++;
    document.getElementById("picture").src = images[index];
    document.getElementById("caption").innerHTML = captions[index];
    if (index == images.length) {
        document.getElementById("picture").src = "images/graduation2_opt.jpg"
        document.getElementById("caption").innerHTML = "Black and White"
        index = 0
    }
}