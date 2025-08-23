document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        // console.log('clicked')
        const bank = document.getElementById('bank').value

        const accountNumber =parseInt(document
            .getElementById('acc-number').value)

        const addAmmount = parseInt(document.getElementById('amount-add').value)

        const digitPin = parseInt(document.getElementById('pinn').value)

        const availableBalance = parseInt (document.getElementById('available-balance').innerText)
        // console.log(availableBalance)

        const totallBalance = addAmmount + availableBalance
        document.getElementById('available-balance').innerText = totallBalance
        
    })