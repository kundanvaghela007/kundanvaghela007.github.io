const prnav  = document.querySelector(".pn");
const navtoggle = document.querySelector(".mobile-nav");

navtoggle.addEventListener("click", () => {
    const visibility = prnav.getAttribute("data-visible");

    if (visibility === "false"){
        prnav.setAttribute("data-visible", true);
        navtoggle.setAttribute("aria-expanded",true);
    } else if (visibility === "true"){
        prnav.setAttribute("data-visible",false);
        navtoggle.setAttribute("aria-expanded",false);
    }
});