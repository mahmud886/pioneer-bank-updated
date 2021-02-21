function onloadFunction() {

    const btn = document.getElementById('btn')
    btn.addEventListener('click', function () {
        const loginArea = document.getElementById('login-area')
        loginArea.style.display = 'none'
        const transactionArea = document.getElementById('transaction-area')
        transactionArea.removeAttribute('class')
    })

    // Current Deposit
    const depositBtn = document.getElementById('addDeposit');
    depositBtn.addEventListener('click', function (e) {

        const depositNumber = getInputNumber('depositAmount')

        updateSpanText("currentDeposit", depositNumber)
        updateSpanText("currentBalance", depositNumber)

        document.getElementById('depositAmount').value = ''

    })

    // Withdraw Amount
    const withdrawBtn = document.getElementById('addWithdraw')
    withdrawBtn.addEventListener('click', function () {
        const withdrawNumber = getInputNumber('withdrawAmount')

        updateSpanText('currentWithdraw', withdrawNumber)
        updateSpanText('currentBalance', -1 * withdrawNumber)

        document.getElementById('withdrawAmount').value = ''

    })

    // get input Number function()
    function getInputNumber(id) {
        const amount = document.getElementById(id).value
        const amountNumber = parseFloat(amount)
        return amountNumber
    }


    // Add Calculating function() 
    function updateSpanText(id, depositNumber) {
        const current = document.getElementById(id).innerText
        const currentNumber = parseFloat(current);
        const totalAmount = depositNumber + currentNumber;

        document.getElementById(id).innerText = totalAmount;
    }


}



