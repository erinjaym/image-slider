let currentImage = "0";
let lastImage = "slider6";
let firstImage = "slider1";
let currentProgressCircle = "circle1";
// change last image and first image variables depending on amount of images

// change to image click populate slider
(function showSlider(){
    let slider = document.getElementById('slider-popup');
        slider.style.display = "grid";
       let sliderImage =  document.getElementById('slider1');
            sliderImage.className = "slider-image-visible";
            currentImage = sliderImage.id;
})();

(function circleOptions(){
    let theCircles = document.getElementsByClassName("progress-circle");
        for (let circleNumber = 0; circleNumber <= theCircles.length-1; circleNumber++)
        {
            theCircles[circleNumber].addEventListener('click', function(e) {
                let circleId = e.target.id
                circleTransition(circleId);
            });
        }
    //adds to the only active circle
    let firstCircle = document.getElementById("circle1");
        firstCircle.addEventListener('click', function(e) {
        let circleId = e.target.id
        circleTransition(circleId);
    });
})();



(function setSliderButtons(){
    let leftArrow = document.getElementById("slider-left");
        leftArrow.addEventListener('click', () => { next();})
    
    let rightArrow = document.getElementById("slider-right");
        rightArrow.addEventListener('click', () => {previous();});
})();

function next(){
    if (currentImage == firstImage)
    {
        let oldImage = document.getElementById(currentImage);
        oldImage.style.display = "none";
        let newImage = document.getElementById(lastImage);
        newImage.style.display = "grid";
        currentImage = newImage.id;
        toggleProgressCircle()
    }else{
        let oldImage = document.getElementById(currentImage);
        oldImage.style.display = "none";
        let oldNumber = oldImage.id.slice(6);
        let newNumber = parseInt(oldNumber, 10);
        newNumber -= 1;

        let nextImage = "slider" + newNumber.toString();
        let newImage = document.getElementById(nextImage);
        newImage.style.display = "grid";
        currentImage = newImage.id;
        toggleProgressCircle()
    }
}

function previous(){
    if (currentImage == lastImage)
    {
        let oldImage = document.getElementById(currentImage);
        oldImage.style.display = "none";
        let newImage = document.getElementById(firstImage);
        newImage.style.display = "grid";
        currentImage = newImage.id;
        toggleProgressCircle()
    }else{
        console.log(currentImage);
        let oldImage = document.getElementById(currentImage);
        console.log(oldImage);
        oldImage.style.display = "none";
        let oldNumber = oldImage.id.slice(6);
        let newNumber = parseInt(oldNumber, 10);
        newNumber += 1;
        console.log(newNumber);
        let nextImage = "slider" + newNumber.toString();
        console.log(nextImage);

        let newImage = document.getElementById(nextImage);
        newImage.style.display = "grid";
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


function hideSlider(){
    let slider = document.getElementById('slider-popup');
    slider.style.display = "none";
}

function circleTransition (circleId) {

    // untoggle old circle
    let prevCircle = document.getElementById(currentProgressCircle);
    prevCircle.className = "progress-circle";
     // hide old photo first 
    let oldImage = document.getElementById(currentImage);
    oldImage.style.display = "none";

    currentProgressCircle =  circleId;
    let progressCircle = document.getElementById(currentProgressCircle);
    progressCircle.className = "progress-circle-active";

    let newImageId = currentProgressCircle.slice(6);
    newImageId = "slider" + newImageId;
    let newImage = document.getElementById(newImageId);
    newImage.style.display = "grid";
    currentImage = newImage.id;
}
