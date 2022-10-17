const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", () => {
    // console.log("moved");
    // console.log(event.offsetX);
    // console.log(event.offsetX);

    const xPos = event.offsetX
    const yPos = event.offsetY
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    // Change the Size of the Icon
    const size = Math.random() * 100;
    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px"

    bodyEl.appendChild(spanEl);

    // Timer
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
})