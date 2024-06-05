/* 1 */
const initSlider = () => {
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const imageList = document.querySelector(".slider-wrapper .album-list");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

/* 2 */

const initSlider2 = () => {
    const slideButtons2 = document.querySelectorAll(".slider-wrapper2 .slide-button2");
    const sliderScrollbar2 = document.querySelector(".slider-scrollbar2");
    const scrollabrThumb2 = sliderScrollbar2.querySelector(".scrollbar-thumb2");
    const imageList2 = document.querySelector(".slider-wrapper2 .album-list2");
    const maxScrollLeft2 = imageList2.scrollWidth - imageList2.clientWidth;

    // Handle scrollbar thumb drag
    scrollabrThumb2.addEventListener("mousedown", (e) => {
        const startX2 = e.clientX;
        const thumbPosition2 = scrollabrThumb2.offsetLeft;
        const maxThumbPosition2 = sliderScrollbar2.getBoundingClientRect().width - scrollabrThumb2.offsetWidth;

        // Update thumb position on mouse move
        const handleMouseMove2 = (e) => {
            const deltaX2 = e.clientX - startX2;
            const newThumbPosition2 = thumbPosition2 + deltaX2;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition2 = Math.max(0, Math.min(maxThumbPosition2, newThumbPosition2));
            const scrollPosition2 = (boundedPosition2 / maxThumbPosition2) * maxScrollLeft2;

            scrollabrThumb2.style.left = `${boundedPosition2}px`;
            imageList2.scrollLeft = scrollPosition2;
        }

        // Remove event listeners on mouse up
        const handleMouseUp2 = () => {
            document.removeEventListener("mousemove", handleMouseMove2);
            document.removeEventListener("mouseup", handleMouseUp2);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove2);
        document.addEventListener("mouseup", handleMouseUp2);
    });

    // Slide images according to the slide button clicks
    slideButtons2.forEach(button => {
        button.addEventListener("click", () => {
            const direction2 = button.id === "prev-slide2" ? -1 : 1;
            const scrollAmount2 = imageList2.clientWidth * direction2;
            imageList2.scrollBy({ left: scrollAmount2, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleslideButtons2 = () => {
        slideButtons2[0].style.display = imageList2.scrollLeft <= 0 ? "none" : "block";
        slideButtons2[1].style.display = imageList2.scrollLeft >= maxScrollLeft2 ? "none" : "block";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition2 = () => {
        const scrollPosition2 = imageList2.scrollLeft;
        const thumbPosition2 = (scrollPosition2 / maxScrollLeft2) * (sliderScrollbar2.clientWidth - scrollabrThumb2.offsetWidth);
        scrollabrThumb2.style.left = `${thumbPosition2}px`;
    }

    // Call these two functions when image list scrolls
    imageList2.addEventListener("scroll", () => {
        updateScrollThumbPosition2();
        handleslideButtons2();
    });
}

window.addEventListener("resize", initSlider2);
window.addEventListener("load", initSlider2);