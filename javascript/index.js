const cursor = document.querySelector("#mouseCover")


const changeCursor = (e) => {
    cursor.setAttribute("style", "top: " + (e.pageY -10) + "px; left: " + (e.pageX -5) + "px")
}
document.addEventListener("mousemove", changeCursor)

const cardsHeaders = Array.from(document.getElementsByClassName("card-header"))
cardsHeaders.forEach(element => {
    const cardTop = element
    const followCursor = (e) => {
        cardTop.parentNode.setAttribute("style", "top: " + (e.pageY -50) + "px; left: " + (e.pageX -200) + "px")
    }
    const addFollowCursor = () => {
        document.addEventListener("mousemove", followCursor)
    }
    cardTop.addEventListener("mousedown", addFollowCursor)

    const leaveCursor = () => {
        document.removeEventListener("mousemove", followCursor)
    }
    document.addEventListener("mouseup", leaveCursor)
});

