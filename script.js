let items = document.getElementsByClassName("item");

for (let i = 0; i < items.length; i++) {
    items[i]
        .getElementsByClassName("plus-icon")[0]
        .children[0].addEventListener("click", displayItemBody);
    items[i]
        .getElementsByClassName("minus-icon")[0]
        .children[0].addEventListener("click", hideItemBody);
}

function displayItemBody() {
    let plusIcon = event.target.parentNode;
    let iconsDiv = event.target.parentNode.parentNode;
    let minusIcon = iconsDiv.children[0];
    let itemBody =
        event.target.parentNode.parentNode.parentNode.parentNode.children[1];
    itemBody.style = "display: block";
    minusIcon.style = "display: block";
    plusIcon.style = "display: none";
    // console.log("Display Item Body");
}

function hideItemBody() {
    let minusIcon = event.target.parentNode;
    let iconsDiv = event.target.parentNode.parentNode;
    let plusIcon = iconsDiv.children[1];
    let itemBody =
        event.target.parentNode.parentNode.parentNode.parentNode.children[1];
    minusIcon.style = "display: none";
    plusIcon.style = "display: block";
    itemBody.style = "display: none";
    // console.log("Hide Item Body");
}
