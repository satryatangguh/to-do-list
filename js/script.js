document.querySelector("#input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const input = document.querySelector("#input");
        addItem(input.value);
    }
});

document.querySelector("#add-item").addEventListener("click", () => {
    const input = document.querySelector("#input");
    addItem(input.value);
});

addItem = (input) => {
    const item = document.createElement("div");
    const div = document.createElement("div");
    const checkIcon = document.createElement("i");
    const trashIcon = document.createElement("i");
    const text = document.createElement("p");

    item.className = "item";
    text.textContent = input;

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "#d3d3d3";
    checkIcon.addEventListener("click", () => {
        checkIcon.style.color = "#22ca22";
    })
    div.appendChild(checkIcon);

    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "#808080";
    trashIcon.addEventListener("click", () => {
        item.remove();
    })
    div.appendChild(trashIcon);

    item.appendChild(text);
    item.appendChild(div);

    document.querySelector("#to-do-list").appendChild(item);
    document.querySelector("#input").value = "";

}