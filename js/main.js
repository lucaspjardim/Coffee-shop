const form = document.getElementById('contact-form')
let formIsValid = false

$('#phone-number').mask('(00) 00000-0000')

function nameValid(name) {
    const nameArray = name.split(' ')
    return nameArray.length >= 2
}

function phoneValid(phone) {
    return phone.trim().length > 14
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    submitForm()
})

function submitForm() {

    const nameForm = document.getElementById('name')
    const phoneForm = document.getElementById('phone-number')
    const errorM = "Por favor preencha com nome e sobrenome!"
    const errorP = "Por favor insira um número de telefone válido"

    formIsValid = nameValid(nameForm.value)
    const phoneValidFlag = phoneValid(phoneForm.value)

    if (formIsValid === false) {
        const errorMessage = document.querySelector('.error')
        errorMessage.innerHTML = errorM
        errorMessage.style.display = 'block'

        setTimeout(function() {
            errorMessage.style.display = 'none'
        }, 5000)

    } else if (!phoneValidFlag){
        const warningMessage = document.querySelector('.warning')
        warningMessage.innerHTML = errorP
        warningMessage.style.display = 'block'

        setTimeout(function() {
            warningMessage.style.display = 'none'
        }, 5000)
    } 
}

    