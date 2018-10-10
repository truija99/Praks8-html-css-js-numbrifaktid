// Listening to events
let numInput = document.querySelector ('#numInput'); 
let factOutput = document.querySelector ('#factOutput');
let incInput = document.querySelector('#incInput');

const getFact = () => {
		factOutput.innerHTML = ''


	let number = numInput.value;
	let inc = incInput.value;
	
	let baseUrl = 'http://numbersapi.com/'
	// Vaja saada sarnane URL
	// http://numbersapi.com/1..3
	let url = `${baseUrl}${number}..${parseInt(number) + parseInt (inc)}`;


		if (number != '' && inc !='') {
			axios.get(url)
		.then(response => {
			for (let item in response.data) {
				let li = document.createElement('li');
				li.innerText = response.data[item];

				factOutput.appendChild(li);
			}
		})
		.catch(error => {
			console.log(error);
		})
	}
	
		factOutput.innerHTML = '';
}

numInput.addEventListener('input', getFact);
incInput.addEventListener('input', getFact);