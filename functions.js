const display = document.querySelector('#display')

keys.addEventListener('click', event => {
	if (!event.target.closest('button')) return

	const key = event.target
	const keyValue = key.textContent
	const displayValue = display.textContent

	if (displayValue === '0'){
		display.textContent = keyValue
	}
	else {
		display.textContent = displayValue + keyValue
	}
