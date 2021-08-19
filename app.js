document.getElementById('phone-plus').addEventListener('click', function () {

    const phoneInput = document.getElementById('phone-number');
    const phoneNumber = parseInt(phoneInput.value) + 1;
    phoneInput.value = phoneNumber;

    const phoneTotalAmount = document.getElementById('phone-total');
    phoneTotalAmount.innerText = phoneNumber * 1219;

    getTotalCalculation();

});

document.getElementById('phone-minus').addEventListener('click', function () {


    const phoneInput = document.getElementById('phone-number');
    const phoneNumber = parseInt(phoneInput.value) - 1;
    if (phoneNumber >= 0) {
        phoneInput.value = phoneNumber;
        const phoneTotalAmount = document.getElementById('phone-total');
        phoneTotalAmount.innerText = phoneNumber * 1219;
    }
    getTotalCalculation();
});

document.getElementById('case-plus').addEventListener('click', function () {

    const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value) + 1;
    caseInput.value = caseNumber;

    const caseTotalAmount = document.getElementById('case-total');
    caseTotalAmount.innerText = caseNumber * 59;
    getTotalCalculation();
});

document.getElementById('case-minus').addEventListener('click', function () {


    const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value) - 1;
    if (caseNumber >= 0) {
        caseInput.value = caseNumber;
        const caseTotalAmount = document.getElementById('case-total');
        caseTotalAmount.innerText = caseNumber * 59;
    }
    getTotalCalculation();
});


function getTotalCalculation() {
    let phoneTotalAmount = document.getElementById('phone-total');
    const phoneTotalAmountText = parseInt(phoneTotalAmount.innerText);

    const caseTotalAmount = document.getElementById('case-total');
    const caseTotalAmountText = parseInt(caseTotalAmount.innerText);

    let subTotal = document.getElementById('sub-total');
    const subTotalAmount = phoneTotalAmountText + caseTotalAmountText;
    subTotal.innerText = subTotalAmount;


    let tax = document.getElementById('tax-amount');

    const taxAmount = subTotalAmount / 10;
    const taxTotalAmount = parseInt(taxAmount);
    tax.innerText = taxTotalAmount;

    const totalPrice = document.getElementById('total-price');
    const totalAmount = subTotalAmount + taxTotalAmount;

    totalPrice.innerText = parseInt(totalAmount);
}