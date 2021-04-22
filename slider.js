let currentImage = "0";
let lastImage = "slider6";
let firstImage = "slider1";
let currentProgressCircle = "circle1";


(function circleOptions(){
    let theCircles = document.getElementsByClassName("progress-circle");
        for (let circleNumber = 0; circleNumber <= theCircles.length-1; circleNumber++)
        {
            theCircles[circleNumber].addEventListener('click', function(e) {
                let circleId = e.target.id
                circleTransition(circleId);
            });
        }
    //adds to the only active circle no longer needed now that it populates before bein active? 
    let firstCircle = document.getElementById("circle1");
        firstCircle.addEventListener('click', function(e) {
        let circleId = e.target.id
        circleTransition(circleId);
    });
})();



(function setSliderButtons(){
    let leftArrow = document.getElementById("arrow-left");
        leftArrow.addEventListener('click', () => { previous();})
    
    let rightArrow = document.getElementById("arrow-right");
        rightArrow.addEventListener('click', () => {next();});
})();

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

function next(){
    if (currentImage == lastImage)
    {
        let oldImage = document.getElementById(currentImage);
        oldImage.className = "slider-image";
        let newImage = document.getElementById(firstImage);
        newImage.className = "slider-image-visible";
        console.log(newImage.id);
        currentImage = newImage.id;
        toggleProgressCircle()
    }else{
        let oldImage = document.getElementById(currentImage);
        oldImage.className = "slider-image";
        let oldNumber = oldImage.id.slice(6);
        let newNumber = parseInt(oldNumber, 10);
        newNumber += 1;
        let nextImage = "slider" + newNumber.toString();
        console.log(nextImage);

        let newImage = document.getElementById(nextImage);
        newImage.className = "slider-image-visible";
        currentImage = newImage.id;
        toggleProgressCircle()
    }
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



function circleTransition (circleId) {

    // untoggle old circle
    let prevCircle = document.getElementById(currentProgressCircle);
    prevCircle.className = "progress-circle";
     // hide old photo first 
    let oldImage = document.getElementById(currentImage);
    oldImage.className = "slider-image";

    currentProgressCircle =  circleId;
    let progressCircle = document.getElementById(currentProgressCircle);
    progressCircle.className = "progress-circle-active";

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
        slideTransitions = setInterval(function(){ next(); }, 5000);
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



return {activateSlideshow, stopSlideshow, toggleSlideShow};

})();


function startSlider(slideToStart){

//hide gallery
let gallery = document.getElementById('gallery');
gallery.style.display = 'none';

//show slider
let slider = document.getElementById('slider-popup');
slider.style.display = "grid";
let sliderMiddle = document.getElementById('slider-middle');
    sliderMiddle.style.display = "grid";
    let sliderRight = document.getElementById('slider-right');
        sliderRight.style.display = "grid";
        let sliderLeft = document.getElementById('slider-left');
        sliderLeft.style.display = "grid";

        //bring up selected image
       let sliderImage =  document.getElementById(slideToStart);
            sliderImage.className = "slider-image-visible";
            currentImage = sliderImage.id;

//set progresscircle
            let CircleNumber = currentImage.slice(6);
            let currentCircle = "circle" + CircleNumber;
            currentProgressCircle = currentCircle;
            let displayCurrent = document.getElementById(currentCircle);
                displayCurrent.className = "progress-circle-active";

                slideShowModule.activateSlideshow();

                // setup pauseButton
                let pauseButton = document.getElementById('pause-button');
                    pauseButton.addEventListener('click', () => { pauseSlideShow();});

//set up close button
    let closeIcon = document.getElementById("close-slider");
        closeIcon.addEventListener('click', () => { closeSlider();});

}

function closeSlider(){
    //stop slideshow
    slideShowModule.stopSlideshow();

    //reset picture and circle display
    let activeCircle = document.getElementById(currentProgressCircle);
    activeCircle.className = "progress-circle";

    // make sure picture is gone
    let displayedImage = document.getElementById(currentImage);
        displayedImage.className = "slider-image";

//hide all windows
    let slider = document.getElementById('slider-popup');
    slider.style.display = "none";
    let sliderMiddle = document.getElementById('slider-middle');
    sliderMiddle.style.display = "none";
    let sliderRight = document.getElementById('slider-right');
    sliderRight.style.display = "none";
    let sliderLeft = document.getElementById('slider-left');
    sliderLeft.style.display = "none";

// show gallery
let gallery = document.getElementById('gallery');
gallery.style.display = 'grid';

}

function pauseSlideShow(){
    slideShowModule.toggleSlideShow();
    let pauseButton = document.getElementById('pause-button');
    console.log(pauseButton.className);
        if(pauseButton.className == "pause")
        {
            pauseButton.className = "paused";
            console.log(pauseButton.className);
        }
        else if (pauseButton.className === "paused")
        {
            pauseButton.className = "pause";
            console.log(pauseButton.className);
        }

}