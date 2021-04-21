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
        console.log(currentImage);
        let oldImage = document.getElementById(currentImage);
        console.log(oldImage);
        oldImage.style.display = "none";
        let oldNumber = oldImage.id.slice(6);
        let newNumber = parseInt(oldNumber, 10);
        newNumber -= 1;
        console.log(newNumber);
        let nextImage = "slider" + newNumber.toString();
        console.log(nextImage);

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
