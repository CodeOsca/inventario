
const existings = JSON.parse(localStorage.getItem('Existencias')) || []
const existence = existings.find( ex => ex.id === localStorage.getItem('existence-id') )
let newUnits = 0






const cardExiatence =()=> {
	return `
    <div class="col s12 m6" style="text-align: center;">
    	<img src="${existence.nameOrUrlImage}" style="width: 250px;" />
		<h2> <span class="card-title">${existence.name}</span> </h2>
    </div>
	<div class="col s12 m6 flex-center">
		<a id="afurther"  class="btn-floating waves-effect waves-light blue"><i id="further" class="material-icons">exposure_plus_1</i></a>
		<h3> ${existence.existingUnits} </h3>
		<a id="aless" class="btn-floating waves-effect waves-light red"><i id="less" class="material-icons">exposure_neg_1</i></a>
	</div>
 
	<form id="form" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <textarea required id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Descripción para el historial</label>
        </div>

        <div class="col s12">
			<button class="btn waves-effect waves-light blue darken-2" type="submit" name="action">Guardar
    		<i class="material-icons right">save</i>
  			</button>
        </div>
      </div>
    </form>

	`
}

function dateCurrent() {
    let date = new Date(),
        month = date.getMonth()+1,
        day = date.getDate(),
        year = date.getFullYear()
    return `${year}-${month}-${day}`
}


const addUnits = () =>{
	const h3 = document.querySelector('h3')
	existence.existingUnits = JSON.parse(existence.existingUnits) + 1
	newUnits = newUnits + 1
	h3.textContent = existence.existingUnits	
}


const lessUnits = () =>{
	if (existence.existingUnits > 0) {
	const h3 = document.querySelector('h3')
		existence.existingUnits = JSON.parse(existence.existingUnits) - 1
		newUnits = newUnits + 1
		h3.textContent = existence.existingUnits
		}	
}

const disabledStyle = (id,idHas) =>{
	if (document.querySelector(id).id || false) {
		document.querySelector(idHas).style.opacity = 0
		document.querySelector(idHas).style.visibility = 'hidden'
		document.querySelector(idHas).style.display = "none"
		document.querySelector(idHas).style.transition = "all .5s ease"
	}
}


const saveNewDataHistory = () =>{
	const $form = document.getElementById('form')
	existence.historyUnits.push({
		dateUpdate: dateCurrent(),
		description: $form[0].value,
		reserveUnits: newUnits,
		currentlyExistingUnits: existence.existingUnits})
		localStorage.setItem('Existencias', JSON.stringify(existings))
}

const actionsAdd = () =>{
	disabledStyle('#less', '#aless')
	addUnits()
}

const actionLess = () =>{
	disabledStyle('#further', '#afurther')
	lessUnits()
}


const showAlert = () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Existencia editada sasisfactoriamente",
          showConfirmButton: false,
          timer: 1800});
}



let article = document.createElement('article')
article.innerHTML = cardExiatence()
document.querySelector('section.row').appendChild(article)


document.addEventListener('click', e => {
    if (e.target.matches(`i[id="further"]`)) actionsAdd()
    if (e.target.matches(`i[id="less"]`)) actionLess()})



document.addEventListener('submit', e =>{
	e.preventDefault()
	saveNewDataHistory()
	showAlert()
	redirectTo({direction: 'historial.html', time: 2000})
})













