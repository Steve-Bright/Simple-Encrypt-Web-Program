let pasteArea = document.getElementById("pasteFileArea")
let areaEntered = false;
pasteArea.addEventListener("dragenter", (e) => {
    // alert("heriaewjf")
    if( (e.target.id == "pasteFileArea" || e.target.closest(".childDiv") ) && areaEntered == false){
        console.log("it is entered bitch ")
        areaEntered = true;
    }
    // createHoverArea(pasteArea)
})

pasteArea.addEventListener("dragleave", (e) => {
    console.log("event target ?? " + e.target.id )
    if((e.target.id == "pasteFileArea") && areaEntered == true){
        console.warn("i begg you. please leave " + e.target.innerHTML)
        areaEntered = false;
    }
    // alert("build shit ")
    // buildDefaultArea(pasteArea)
})

function createHoverArea(parentDiv){
    parentDiv.innerHTML = ""
    let hoveredDiv = document.createElement('div')
    hoveredDiv.id = "hoveredArea"
    hoveredDiv.innerHTML = "Release your file here."
    parentDiv.appendChild(hoveredDiv)
}

function buildDefaultArea(parentDiv){
    parentDiv.innerHTML = ""
    const container = document.createElement('div');
    container.id = 'container';

    const dragTextDiv = document.createElement('div');
    dragTextDiv.textContent = 'Drag your files here';

    const orDiv = document.createElement('div');
    orDiv.textContent = 'or';

    const inputDiv = document.createElement('div');
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.id = 'submitToEncrypt';
    inputDiv.appendChild(fileInput);

    container.appendChild(dragTextDiv);
    container.appendChild(orDiv);
    container.appendChild(inputDiv);

    parentDiv.appendChild(container)

}