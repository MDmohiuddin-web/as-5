function setBackground(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-[#1dd100]')
}

function getValue(elementId){
    const element = document.getElementById(elementId);
    const currentElementText = element.innerText;
    const value = parseInt(currentElementText);

    return value;
}


function setValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function setTableData(seatNo){
const table = document.getElementById("ticketTable");
const newRow = document.createElement("tr");

const cell1 = document.createElement("td");
const cell2 = document.createElement("td");
const cell3 = document.createElement("td");
cell1.classList.add('py-2', 'tData')
cell3.classList.add('text-right')
cell1.textContent = seatNo;
cell2.textContent = "Economy";
cell3.textContent = "550";
newRow.appendChild(cell1);
newRow.appendChild(cell2);
newRow.appendChild(cell3);
table.appendChild(newRow);

}
