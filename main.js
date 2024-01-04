const list = document.getElementById("li")
let item;
let inputValue;
console.log(list)

function onFormSubmit(e) {
    e.preventDefault()
    inputValue = e.target.children[0].value

    list.appendChild(createListItem())
}

function deleteListItem(e) {
    const parent = e.target.parentElement

    list.removeChild(parent)
}

function createListItem() {
    item = document.createElement("div")
    item.innerHTML = ` 
        <div>
            <input type="checkbox"/>
            <span>${inputValue}</span>
        </div>
        <button onclick="deleteListItem(event)">X</button>`

        return item
}