// Your code here
let dodger = document.getElementById("dodger");
document.addEventListener("keydown", function(e) {
    console.log(e.key);
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();

    }
})

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}
function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10);

    if (right > 0) {
        dodger.style.left = `${right + 10}px`;
    }
}