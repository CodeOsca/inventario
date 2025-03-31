const setExistence = () =>{
	const existings = JSON.parse(localStorage.getItem('Existencias')) || [];
	return existings.find( ex => ex.id === localStorage.getItem('existence-id') );
}

const paintTable = existence => {
	return `
		    <td>${existence.dateUpdate}</td>
		    <td>${existence.reserveUnits}</td>
		    <td>${existence.currentlyExistingUnits}</td>
		    <td>${existence.description}</td>
		`
	}


document.querySelector('h1').textContent = setExistence().name



setExistence().historyUnits.forEach( td =>{
	const $tr = document.createElement('tr')
	$tr.innerHTML = paintTable(td)

	document.querySelector('tbody').appendChild($tr)
} )



