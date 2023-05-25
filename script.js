const circles = document.querySelectorAll(".circle")
// console.log(circles)
const line = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
// console.log(next)

let currentIndex =1;

    next.addEventListener("click",e=>{
        currentIndex++;
        prev.removeAttribute("disabled", "")

        if(currentIndex === circles.length){
            next.setAttribute("disabled", "");

    }
    updateLine()
})

prev.addEventListener('click',e=>{
    currentIndex--;
    next.removeAttribute("disabled", "")

    // console.log(currentIndex)
    if(currentIndex<2){
        prev.setAttribute("disabled", "")
    }else{
        prev.removeAttribute("disabled", "")
    }
    updateLine()

})

let lineWidth = 0;

function updateLine(){
    circles.forEach((circle, idx) => {
        if(idx < currentIndex) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    console.log(line.style.width);

}