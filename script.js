let startX, movingX, deltaX;
let endX = 0
let infos = document.getElementsByClassName("participantInfo")
for (let participantInfo of infos) {
    console.log(participantInfo);
    participantInfo.ontouchstart = (event) => {
        touchStart(event, participantInfo)
        console.log(12);
    } 
    participantInfo.ontouchmove = (event) => {
        touchMove(event, participantInfo)
    } 
    participantInfo.ontouchend = () => {
        touchEnd(participantInfo)
    } 
}

function touchStart(e, participantInfo) {
    participantInfo.style.transition = "0s"
    console.log(e.touches[0].clientX);
    // if (endX != 0) {
    // startX = endX
    // } else {
    startX = e.touches[0].clientX

    // }
}

function touchMove(e, participantInfo) {
    e.stopPropagation();
    console.log(e.touches[0].clientX);
    movingX = e.touches[0].clientX
    deltaX = movingX - startX
    // p.innerHTML = deltaX
    if (deltaX <= -48) {
        deltaX = -48
    }
    if (deltaX < 0) {
        console.log();
        participantInfo.style.transform = "translateX(" + deltaX + "px)"
    }
    
}

function touchEnd(participantInfo) {
    console.log(participantInfo);
    if (deltaX <= -48) {
        // endX = movingX
        // console.log(endX);
        setTimeout(() => {
            participantInfo.style.transition = "0.3s"
            participantInfo.style.transform = "translateX(-" + 0 + "px)"
        }, 1000)
    } else {
        participantInfo.style.transition = "0.3s"
        participantInfo.style.transform = "translateX(-" + 0 + "px)"
    }

}

// touchMove()