
const redirectTo = data =>{
    setTimeout( () => {
      location.href = data.direction
    }, data.time );
}

const redirect = e =>{
    if(e.target.matches('#CloseSession')){
        localStorage.removeItem('session_active')
        location.href = 'index.html'
    }
}


const removeIcons = () =>{
    if (navigator.onLine == false) document.querySelectorAll('i.material-icons').forEach(list => list.classList.add('inone'))
}

const Session = () =>{
    if(!localStorage.getItem('session_active')) location.href = 'index.html' 
}


Session()


removeIcons()

document.addEventListener('click', e => {
    redirect(e)
})