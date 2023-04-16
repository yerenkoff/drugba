let startX, movingX, deltaX;
let endX = 0
let infos = document.getElementsByClassName("participantInfo")
for (let participantInfo of infos) {
    participantInfo.ontouchstart = (event) => {
        touchStart(event, participantInfo)
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
    startX = e.touches[0].clientX
}

function touchMove(e, participantInfo) {
    e.stopPropagation();
    console.log(e.touches[0].clientX);
    movingX = e.touches[0].clientX
    deltaX = movingX - startX
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
        setTimeout(() => {
            participantInfo.style.transition = "0.3s"
            participantInfo.style.transform = "translateX(-" + 0 + "px)"
        }, 1000)
    } else {
        participantInfo.style.transition = "0.3s"
        participantInfo.style.transform = "translateX(-" + 0 + "px)"
    }

}