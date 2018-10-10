// Listening to events
let numInput = document.querySelector ('#numInput'); 
let factOutput = document.querySelector ('#factOutput');

const getFact = () => {
	let number = numInput.value;
		if (number != '' )
			axios.get('http://numbersapi.com/' + number)
		.then(response => {
			factOutput.innerText = response.data;
		})
		.catch(error => {
			console.log(error);
		})
}
numInput.addEventListener('input', getFact);