function handleForm() {
	const form = document.querySelector('.feedback-form');
	
	validate(form);

	function validate(form) {
		const submitBtn = form.querySelector('button');
		const inputs = [...form.querySelectorAll('input, textarea')];
		const inputsCount = inputs.length;
		let validInputs = [];

		inputs.forEach(input => {
			input.addEventListener('input', checkValidityInput)
		})

		inputs.forEach(input => {
			input.addEventListener('blur', checkValidityBlur)
		})

		function checkValidityBlur(e) {
			const input = e.currentTarget; 
				
			if (!input.dataset.touched) {
				if (!isValid(input)) {
					input.classList.add('invalid');
					if (input.value.length == 0) {
						input.placeholder = 'Поле обязательно для заполнения'
					}
				}
				input.dataset.touched = true;
			}

			if (isValid(input)) {
				input.classList.add('valid')
			}
		}

		function checkValidityInput(e) {
			const input = e.currentTarget;

			if (isValid(input) && !isIn(validInputs, input)) {
				validInputs.push(input)
				if (input.classList.contains('invalid')) {
					input.classList.remove('invalid')
				}
				if (formReady()) {
					checkSubmit(form, submitBtn, true)
				}
			} else if (!isValid(input) && isIn(validInputs, input)) {
				if (formReady()) {
					checkSubmit(form, submitBtn, false)
				}
				rmFrom(validInputs, input);
				if (input.dataset.touched && !input.classList.contains('invalid')) {
					input.classList.add('invalid')
				}
			}
		}

		function isValid(input) {
			switch(input.name) {
				case 'name':
				case 'message':
					return input.value.length > 0
					break
				case 'email':
					const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

					function isEmail(item) {
						return item.match(emailRegEx)
					}

					return isEmail(input.value)
					break
				case 'tel':
					const phoneRegEx = /\+?\d{11,}/;
					const phoneChars = /[()\s-]/g;

					function isPhone(item) {
						return item.replace(phoneChars, '').match(phoneRegEx)
					}

					return isPhone(input.value)
					break
				default:
					return true
			}
		}

		function formReady() {
			return inputsCount === validInputs.length
		}

		function checkSubmit(form, btn, ready) {
			if (ready) {
				btn.classList.remove('inactive')
				btn.disabled = false;
				btn.addEventListener('click', prepSubmit)
			} else {
				btn.classList.add('inactive');
				btn.disabled = true;
				btn.removeEventListener('click', prepSubmit)
			}

			function prepSubmit(e) {
				e.preventDefault();
				e.currentTarget.classList.add('sending');
				e.currentTarget.textContent = 'Отправляю сообщение';
				const formData = new FormData(form);
				
				console.log('form submitted');
			}
		}
	}
}

document.addEventListener('DOMContentLoaded', handleForm)

function isIn(arr, item) {
	return arr.find(el => {
		return el == item
	})
}

function rmFrom(arr, item) {
	arr.splice(arr.findIndex(el => {
		return el == item
	}), 1)
}
