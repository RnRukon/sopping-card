
function getPhoneCalculation(phoneIncrease) {
    const phoneNumber = document.getElementById('phone-number');
    const phoneNumberValuePlus = parseInt(phoneNumber.value) + 1;
    const phoneNumberValueMinus = parseInt(phoneNumber.value) - 1;

    if (phoneIncrease === true) {
        phoneNumber.value = phoneNumberValuePlus;
    } else {
        if (phoneNumber.value > 0) {
            phoneNumber.value = phoneNumberValueMinus;
        }
    }
    const phoneTotal = document.getElementById("phone-total");
    const totalPhonePrice = phoneNumber.value * 1219;
    phoneTotal.innerText = totalPhonePrice;
    subTotalCalculation();
};

function getCaseCalculation(caseIncrease) {
    const caseNumber = document.getElementById('case-number');
    const caseNumberValuePlus = parseInt(caseNumber.value) + 1;
    const caseNumberValueMinus = parseInt(caseNumber.value) - 1;

    if (caseIncrease === true) {
        caseNumber.value = caseNumberValuePlus;
    } else {
        if (caseNumber.value > 0) {
            caseNumber.value = caseNumberValueMinus;
        }
    }
    const caseTotal = document.getElementById("case-total");
    const totalCasePrice = caseNumber.value * 59;
    caseTotal.innerText = totalCasePrice;
    subTotalCalculation();
};



function subTotalCalculation() {
    const phoneTotal = document.getElementById("phone-total");
    const phoneTotalText = parseInt(phoneTotal.innerText);
    const caseTotal = document.getElementById("case-total");
    const caseTotalText = parseInt(caseTotal.innerText);
    const subTotal = phoneTotalText + caseTotalText;

    const subTotalAmount = document.getElementById('sub-total');
    subTotalAmount.innerText = subTotal;
    const tax = document.getElementById('tax-amount');
    const taxAmount = parseInt(subTotal / 10);
    tax.innerText = taxAmount;
    const totalPrice = document.getElementById('total-price');
    const totalAmount = subTotal + taxAmount;
    totalPrice.innerText = totalAmount;
}


document.getElementById('phone-plus').addEventListener('click', function () {
    getPhoneCalculation(true)
});
document.getElementById('phone-minus').addEventListener('click', function () {
    getPhoneCalculation(false);

});


document.getElementById('case-plus').addEventListener('click', function () {
    getCaseCalculation(true)
});
document.getElementById('case-minus').addEventListener('click', function () {
    getCaseCalculation(false);

});

