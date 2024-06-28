const menuIcon = document.querySelector(".menu-icon");
const mobileNavMenu = document.querySelector(".mobile-nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const imgMenu = document.getElementById("imgMenu")

let toggle = true;
menuIcon.addEventListener("click", () => {
  mobileNavMenu.classList.toggle("active");
  toggle = !toggle;
  if(toggle){
  imgMenu.src = "https://res.cloudinary.com/dcmo2r3d9/image/upload/v1717737021/menu-icon_pinipn.svg";
  }else{
  imgMenu.src = "https://res.cloudinary.com/dcmo2r3d9/image/upload/v1719563465/close-md-svgrepo-com_f6wozy.svg";}
  });

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offset = targetElement.offsetTop - 60;
      window.scrollTo({ top: offset });
    }
    
    mobileNavMenu.classList.remove("active");
    imgMenu.src = "https://res.cloudinary.com/dcmo2r3d9/image/upload/v1717737021/menu-icon_pinipn.svg";
    toggle = true;
  });
});