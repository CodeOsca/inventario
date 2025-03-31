const existings = JSON.parse(localStorage.getItem('Existencias')) || []
const $section = document.querySelector('section.row')
const $form = document.querySelector('#form')

const existence = el => {    
    return `<div class="card">
            <div class="card-image">
                <img src="${el.nameOrUrlImage}" style="height:300px;" />
                <span class="card-title">
                ${el.name}
                <br>
                <small>Actualizado el ${el.UpdateDate}</small>
                </span>
            </div>

            <div class="card-content">
                <p><strong class="teal-text text-accent-4">${el.existingUnits} Unidades</strong></p>
            </div>

            <div class="card-action" >
                <button class="waves-effect waves-light btn green" id="${el.id}">Modificar</button>
                <button class="waves-effect waves-light btn blue history">Historial</button>
            </div>

            <div class="progress">
                <div class="indeterminate"></div>
            </div>
        </div>`
}



function main() {
    existings.forEach( el => {
        let article = document.createElement('article')
        article.setAttribute('class', 'col s12 m6 l4')
        article.innerHTML = existence(el)
        $section.appendChild(article) });
}



const redirectEdit = (id, direction) => {
    localStorage.setItem('existence-id', id)
    location.href = direction;
}


const searchExistence = (e) =>{
    e.preventDefault()
    $section.innerHTML = ''
    existings.forEach( el => {
        if ( el.name.toUpperCase().includes($form[0].value.toUpperCase()) ) {
            let article = document.createElement('article')
                article.setAttribute('class', 'col s12 m6 l4')
                article.innerHTML = existence(el)
                $section.appendChild(article) }})

    setTimeout(() => {
        if ($section.innerHTML === '') {
            $section.innerHTML = `<h2>No se han encontrado productos con el termino ${form[0].value} </h2>`
    }}, 500)
}


$form.addEventListener('submit',e => searchExistence(e) )


document.addEventListener('click', e => {
    if (e.target.matches('button[class="waves-effect waves-light btn green"]')) redirectEdit(e.target.id, 'edit.html')
    if (e.target.matches('button[class="waves-effect waves-light btn blue history"]')) redirectEdit(e.target.previousElementSibling.id, 'historial.html')
})


main() 

