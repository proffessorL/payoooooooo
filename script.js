
// Login button functionality  

document.getElementById('from-btn')
    .addEventListener('click',
        function (event) {
            event.preventDefault()
            // console.log('clicked')

            const phnNumb = 12345678910
            const pinNumb = 1234



            const mobileNumbValue = document
                .getElementById('mbl-numb').value
            const mblNumbValueConvert = parseInt(mobileNumbValue)

            const pinNumbValue = document
                .getElementById('pin-numb').value
            const pinNumbValueCovert = parseInt(pinNumbValue)

            // console.log(mblNumbValueConvert,pinNumbValueCovert)


        if (mblNumbValueConvert === phnNumb && pinNumbValueCovert === pinNumb ){
            // console.log('Value Matched') 
            window.location.href="./home.html"
        }
        
        else{
            console.log('Invalid number & Pin')
        }


        })