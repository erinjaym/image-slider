let currentImage = "0";
let lastImage = "slider6";
let firstImage = "slider1";
let currentProgressCircle = "circle1";


const buttonModule = ( function (){
(function setSliderButtons(){

    (function setLeftArrow () {
    let leftArrow = document.getElementById("arrow-left");
        leftArrow.addEventListener('click', () => { previousImage();})
    }) ();

    (function setRightArrow () {
    let rightArrow = document.getElementById("arrow-right");
        rightArrow.addEventListener('click', () => {nextImage();});
    }) ();

    (function setPauseButton () {
    let pauseButton = document.getElementById('pause-button');
        pauseButton.addEventListener('click', () => { pauseSlideShow();});
    }) ();

    (function setCloseButton () {
    let closeIcon = document.getElementById("close-slider");
        closeIcon.addEventListener('click', () => { endSlider();});
    }) ();
        
    (function setCircleOptions(){
    // find all progress circle buttons and link them to a corresponding image on click
        let theCircles = document.getElementsByClassName("progress-circle");
        for (let circleNumber = 0; circleNumber <= theCircles.length-1; circleNumber++){
            theCircles[circleNumber].addEventListener('click', function(e) {
            let circleId = e.target.id
            circleImageSelector(circleId);
            });
        }
        })();
})();

function next(){
    if (currentImage == lastImage)
    {
        let oldImage = document.getElementById(currentImage);
        oldImage.className = "slider-image";
        let newImage = document.getElementById(firstImage);
        newImage.className = "slider-image-visible";
        currentImage = newImage.id;
        toggleProgressCircle()
    }else{
        let oldImage = document.getElementById(currentImage);
        oldImage.className = "slider-image";
        let oldNumber = oldImage.id.slice(6);
        let newNumber = parseInt(oldNumber, 10);
        newNumber += 1;
        let nextImage = "slider" + newNumber.toString();

        let newImage = document.getElementById(nextImage);
        newImage.className = "slider-image-visible";
        currentImage = newImage.id;
        toggleProgressCircle()
    }
}

function previous(){
    if (currentImage == firstImage)
    {
        let oldImage = document.getElementById(currentImage);
        oldImage.className = "slider-image";
        let newImage = document.getElementById(lastImage);
        newImage.className = "slider-image-visible";
        currentImage = newImage.id;
        toggleProgressCircle()
    }else{
        let oldImage = document.getElementById(currentImage);
        oldImage.className = "slider-image";
        let oldNumber = oldImage.id.slice(6);
        let newNumber = parseInt(oldNumber, 10);
        newNumber -= 1;

        let nextImage = "slider" + newNumber.toString();
        let newImage = document.getElementById(nextImage);
        newImage.className = "slider-image-visible";
        currentImage = newImage.id;
        toggleProgressCircle()
    }
}
return {next, previous};
}) (); // end of button module


function nextImage(){
buttonModule.next();
}

function previousImage(){
    buttonModule.previous();
}

function toggleProgressCircle(){
    let prevCircle = document.getElementById(currentProgressCircle);
    prevCircle.className = "progress-circle";
    let CircleNumber = currentImage.slice(6);
    let currentCircle = "circle" + CircleNumber;
    currentProgressCircle = currentCircle;
    let progressCircle = document.getElementById(currentCircle);
    progressCircle.className = "progress-circle-active";
}

function circleImageSelector(circleId) {
    // untoggle old circle
    let prevCircle = document.getElementById(currentProgressCircle);
    prevCircle.className = "progress-circle";
     // hide old photo 
    let oldImage = document.getElementById(currentImage);
    oldImage.className = "slider-image";
    //toggle Current circle
    currentProgressCircle =  circleId;
    let progressCircle = document.getElementById(currentProgressCircle);
    progressCircle.className = "progress-circle-active";
    //show new image
    let newImageId = currentProgressCircle.slice(6);
    newImageId = "slider" + newImageId;
    let newImage = document.getElementById(newImageId);
    newImage.className = "slider-image-visible";
    currentImage = newImage.id;
}


const slideShowModule = (() => {
    let slideTransitions = "placeholder";
        let slideShowStatus = "Off";

    function activateSlideshow() 
    {
        slideTransitions = setInterval(function(){ nextImage(); }, 5000);
        slideShowStatus = "On";
    }
    
    function stopSlideshow()
    {
    clearInterval(slideTransitions);
    slideShowStatus = "Off";
    }

    function toggleSlideShow(){
        if (slideShowStatus == "Off"){
            activateSlideshow();
        }
        else {
            stopSlideshow();
        }
    }

    function pauseSlides(){
        let pauseButton = document.getElementById('pause-button');
            if(pauseButton.className == "pause")
            {
                pauseButton.className = "paused";
                toggleSlideShow();
            }
            else if (pauseButton.className === "paused")
            {
                pauseButton.className = "pause";
                toggleSlideShow();
            }
    }
return {activateSlideshow, stopSlideshow, toggleSlideShow, pauseSlides};
})();


function pauseSlideShow(){
    slideShowModule.pauseSlides();
}



// function to start to be placed on a button or image
function startSlider(slideToStart){

(function hideGallery() {
let gallery = document.getElementById('gallery');
gallery.style.display = 'none';
})();

(function showSliderWindow() {
let slider = document.getElementById('slider-popup');
slider.style.display = "grid";
let sliderMiddle = document.getElementById('slider-middle');
    sliderMiddle.style.display = "grid";
    let sliderRight = document.getElementById('slider-right');
        sliderRight.style.display = "grid";
        let sliderLeft = document.getElementById('slider-left');
        sliderLeft.style.display = "grid";
}) ();

(function showSelectedImage () {
       let sliderImage =  document.getElementById(slideToStart);
            sliderImage.className = "slider-image-visible";
            currentImage = sliderImage.id;
}) ();

(function selectProgressCircle () {
            let CircleNumber = currentImage.slice(6);
            let currentCircle = "circle" + CircleNumber;
            currentProgressCircle = currentCircle;
            let displayCurrent = document.getElementById(currentCircle);
                displayCurrent.className = "progress-circle-active";
}) ();
                //activate timing between slides
                slideShowModule.activateSlideshow();
}

function endSlider(){

    slideShowModule.stopSlideshow();

    (function resetPauseButton () {
    let pauseButton = document.getElementById('pause-button');
        pauseButton.className ="pause";
    }) ();

    (function resetCircleDisplay () {
    let activeCircle = document.getElementById(currentProgressCircle);
    activeCircle.className = "progress-circle";
    }) ();

    (function hideLastImage () {
    let displayedImage = document.getElementById(currentImage);
        displayedImage.className = "slider-image";
    }) ();

(function hideSliderWindow () { 
    let slider = document.getElementById('slider-popup');
    slider.style.display = "none";
    let sliderMiddle = document.getElementById('slider-middle');
    sliderMiddle.style.display = "none";
    let sliderRight = document.getElementById('slider-right');
    sliderRight.style.display = "none";
    let sliderLeft = document.getElementById('slider-left');
    sliderLeft.style.display = "none";
}) ();

(function showGallery () {
let gallery = document.getElementById('gallery');
gallery.style.display = 'grid';
}) ();
}