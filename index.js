let clickedButtonsCount = 0;
const seatSerial = document.getElementById("seat-serial-section");
let selectedSeats = [];

seatSerial.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const buttonText = e.target.innerText;

    if (selectedSeats.includes(buttonText)) {
      alert("This seat is already selected.");
      return;
    }

    if (clickedButtonsCount < 4) {
      setBackground(buttonText);
      clickedButtonsCount++;

      setTableData(buttonText);
      let value = getValue("seatPurchase");
      let total = value + 1;
      setValue("seatPurchase", total);

      let totalAvailable = getValue("available-seat");
      let seatAvailable = totalAvailable - 1;
      setValue("available-seat", seatAvailable);

      let totalPriceAmount = total * 550;
      setValue("totalPrice", totalPriceAmount);
      setValue('grandTotal', totalPriceAmount)
 
      selectedSeats.push(buttonText);

      if (clickedButtonsCount === 4) {
        const couponBtn = document.getElementById("couponBtn");
        couponBtn.removeAttribute("disabled");
      }
    } else {
      alert("You can only select up to 4 seats.");
    }
  }
});


let couponBtn = document.getElementById("couponBtn");
couponBtn.addEventListener("click", () => {
  let couponInput = document.getElementById("couponInput");
  let couponLabel = document.getElementById('coupon-label');
  let inputValue = couponInput.value;

  if (inputValue === "NEW15") {
    let totalPrice = getValue("totalPrice");

    let offerPrice = totalPrice - (totalPrice * 15) / 100;
    couponLabel.classList.add('hidden')

    setValue("grandTotal", offerPrice);
  } else if (inputValue === "Couple 20") {
    let totalPrice = getValue("totalPrice");
    couponLabel.classList.add('hidden')

    let offerPrice = totalPrice - (totalPrice * 20) / 100;

    setValue("grandTotal", offerPrice);
  }else{
    alert('Please Enter A Caret Coupon Code')
  }
});





function buyTicket() {
  const seatSection = document.getElementById("buyTickets");
  seatSection.scrollIntoView({ behavior: "smooth" });
  
}

function modalHide() {
  location.reload();
  
}


function formSubmit(e) {
  e.preventDefault();
 


  let name = document.getElementById("name");
  let nameValue = name.value;

  let number = document.getElementById("PhoneNum");
  let numberValue = number.value;
 
  let email = document.getElementById("email");
  let emailValue = email.value;
  let value = getValue("seatPurchase");

  if (numberValue.length == 11 && numberValue > 0 && value > 0 && nameValue !== "" &&  emailValue !== "") {
    console.log("Your Form submitted successfully.");
    modal.showModal()
    let inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
      input.value = '';
    });
  } else {
    alert("Please fill in all required fields.");
  }
}


// this is utility section

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

