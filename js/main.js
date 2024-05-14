//! Dark Mode 
let toggleBtn = document.querySelector("#toggleBtn");
        let bodyEl = document.querySelector("body");
        let darkMode = false;
        toggleBtn.addEventListener('change', (event) => {
            darkMode = event.target.checked;
            if(darkMode) {
                bodyEl.classList.add("dark");
            } else {
                bodyEl.classList.remove("dark");
            }
        })

        //! Show To Navigation
        const menu = document.getElementById('menu');
        const actions = document.getElementById('actions');
        menu.addEventListener("click", ()=>{
            hnav();
        });
        function hnav(){
            menu.classList.toggle("is-active");
            actions.classList.toggle("is-active");
        }

        //! Scroll to top
        let arrowup = document.getElementById('arrowup');
        onscroll = function(){
            if(scrollY >= 200){
                arrowup.style.display = "block";
            }else{
                arrowup.style.display = "none";
            }
        };
        arrowup.onclick = function(){
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        };

        //! Ad To Heart 
        const hearts = document.querySelectorAll(".heart");
        hearts.forEach((heart) => {
            heart.addEventListener("click", () => {
            heart.classList.toggle("active");
        });
        });
        const shops = document.querySelectorAll(".shop");
            shops.forEach((shop) => {
                shop.addEventListener("click", () => {
                console.log("done")
                shop.classList.toggle("active");
            });
        });





// !
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list")
    const sliderButtons = document.querySelectorAll(".slider-wrapper .slider-button")
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth
    sliderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1:1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    });
    const handSlideButton = () => {
        sliderButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        sliderButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }
    imageList.addEventListener("scroll", () => {
        handSlideButton()
    })
};
window.addEventListener("load", initSlider);


const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);