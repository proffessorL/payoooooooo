document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        // console.log('clicked')
        const bank = document.getElementById('bank').value

        const accountNumber = parseInt(document
            .getElementById('acc-number').value)

        const addAmmount = parseInt(document.getElementById('amount-add').value)

        const digitPin = parseInt(document.getElementById('pinn').value)

        const availableBalance = parseInt(document.getElementById('available-balance').innerText)
        // console.log(availableBalance)

        const totallBalance = addAmmount + availableBalance
        document.getElementById('available-balance').innerText = totallBalance

    })

    // Cash out features 

    document.getElementById('withdraw-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        // console.log('clicked')

        const agentNumber = parseInt(document
            .getElementById('agent-numb').value)

        const withdrawAmmount = parseInt(document.getElementById('withdraw-money').value)

        const WithdrawdigitPin = parseInt(document.getElementById('withdraw-pinn').value)

        const availableBalance = parseInt(document.getElementById('available-balance').innerText)
        // console.log(availableBalance)

        const totallBalanceAfterWithdraw = availableBalance - withdrawAmmount
        document.getElementById('available-balance').innerText = totallBalanceAfterWithdraw

    })




// Toggoling Features

document.getElementById('add-button')
    .addEventListener('click', function () {
        document.getElementById('cash-out-parent').style.display = 'none'
        document.getElementById('add-money-parent').style.display = 'block'
    })

document.getElementById('cashout-button')
    .addEventListener('click', function () {
        document.getElementById('add-money-parent').style.display = 'none'
        document.getElementById('cash-out-parent').style.display = 'block'
    })