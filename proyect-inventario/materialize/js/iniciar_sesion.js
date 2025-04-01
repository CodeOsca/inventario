const $form = document.querySelector('form')

const captureField = ()=>{
    if( $form[0].value ==='josebriseño315' && $form[1].value === 'Uptz9871' ) {
        location.href = 'lista_existencias.html'
        localStorage.setItem('session_active', 'active')
    }

    else { Swal.fire({ title: 'Nombre de usuario o contraseña incorrecta', showDenyButton: false })}
}

const Session = () =>{
    if(localStorage.getItem('session_active')) location.href = 'lista_existencias.html' 
}
const removeIcons = () =>{
    if (navigator.onLine == false) document.querySelectorAll('i.material-icons').forEach(list => list.classList.add('inone'))
}



removeIcons()
Session()


$form.addEventListener('submit', e =>{
    e.preventDefault()
    captureField()
})


