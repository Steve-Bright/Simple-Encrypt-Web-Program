let pasteArea = document.getElementById("pasteFileArea")
let containerDiv = document.getElementById("container")
let areaEntered = false;
containerDiv.addEventListener("dragenter", (e) => {
    // alert("heriaewjf")
    if( (e.target.id == "container" || e.target.closest(".childDiv") ) && areaEntered == false){
        console.log("it is entered bitch ")
        createHoverArea(containerDiv)
        areaEntered = true;
    }
    // createHoverArea(pasteArea)
})

containerDiv.addEventListener("dragleave", (e) => {
    // console.log("event target ?? " + e.target.id )
    if((!containerDiv.contains(e.relatedTarget)) && areaEntered == true){
        console.warn("i begg you. please leave " + e.target.innerHTML)
        areaEntered = false;
        buildDefaultArea(containerDiv)
    }
    // alert("build shit ")
    // buildDefaultArea(pasteArea)
})

function createHoverArea(parentDiv){
    parentDiv.innerHTML = ""
    let hoveredDiv = document.createElement('div')
    hoveredDiv.classList.add("hoveredArea")
    hoveredDiv.innerHTML = "Release your file here."
    parentDiv.appendChild(hoveredDiv)
}

function buildDefaultArea(parentDiv){
    parentDiv.innerHTML = ""
    const dragTextDiv = document.createElement('div');
    dragTextDiv.textContent = 'Drag your files here';

    const orDiv = document.createElement('div');
    orDiv.textContent = 'or';

    const inputDiv = document.createElement('div');
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.id = 'submitToEncrypt';
    inputDiv.appendChild(fileInput);

    parentDiv.appendChild(dragTextDiv);
    parentDiv.appendChild(orDiv);
    parentDiv.appendChild(inputDiv)

}