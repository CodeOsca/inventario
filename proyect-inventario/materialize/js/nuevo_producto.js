const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const numbers = [1,2,3,4,5,6,7,8,9,0];
const $form = document.getElementById('form')
const products = JSON.parse(localStorage.getItem('Existencias')) || []


const dateCurrent = () => {
    let date = new Date(),
        month = date.getMonth()+1,
        day = date.getDate(),
        year = date.getFullYear()
        if (month.toString().length === 1 ) month = '0'+month
        if (day.toString().length === 1 ) day = '0'+day
        document.querySelector('[type="date"]').value = `${year}-${month}-${day}` 
        document.querySelector('[type="date"]').disabled = true
}

dateCurrent()


const generateCharacter = (number) => {
    return Math.ceil(Math.random() * number )
}


const returnID = () => {
    return '_'+alphabet[generateCharacter(alphabet.length-1)]+alphabet[generateCharacter(alphabet.length-1)]+alphabet[generateCharacter(alphabet.length-1)]+numbers[generateCharacter(numbers.length-1)]+numbers[generateCharacter(numbers.length-1)]+alphabet[generateCharacter(alphabet.length-1)]+alphabet[generateCharacter(alphabet.length-1)].toUpperCase()
}



const enebledButton = () =>{
    if ($form[0].value && $form[1].value) $form[4].disabled = false
    else $form[4].disabled = true
}


const writed = e =>{
    if (e.target.value) e.target.nextElementSibling.classList.add('writed')
    if(!e.target.value) e.target.nextElementSibling.classList.remove('writed')
}


const saveData = e =>{
    if (e.target.matches('#saveButton')){
        e.preventDefault()
        captureData(e)
        showAlert()
        redirectTo({time:2000, direction: 'lista_existencias.html'})
    }    
}


const captureData = e => {
    let product = {
        id: returnID(),
        name: $form[0].value,
        existingUnits: $form[1].value,
        nameOrUrlImage: $form[2].value === '' ? $form[2].value = './img/no-image.png' : $form[2].value = $form[2].value ,
        UpdateDate: $form[3].value,
        historyUnits: [] }
    products.push(product)
    localStorage.setItem('Existencias', JSON.stringify(products))
}


const showAlert = () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Existencias creada sasisfactoriamente",
          showConfirmButton: false,
          timer: 1800});
}



document.addEventListener('click', e =>{
    saveData(e)
    
})


$form.addEventListener('input', e => {
    enebledButton()
    writed(e)
})