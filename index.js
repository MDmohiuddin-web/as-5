let clickedButtonsCount = 0;
const seatSerial = document.getElementById("seat-serial-section");
let selectedSeats = [];

// Seat-BUtton-Function

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

// Coupon-Submit-function
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

// grandTotal


function buyTicket() {
  const seatSection = document.getElementById("buyTicket");
  seatSection.scrollIntoView({ behavior: "smooth" });
  
}

function modalHide() {
  location.reload()
}


function formSubmit(e) {
  e.preventDefault();

  // name
  let name = document.getElementById("name");
  let nameValue = name.value;
  // number
  let number = document.getElementById("PhoneNum");
  let numberValue = number.value;
  // email
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