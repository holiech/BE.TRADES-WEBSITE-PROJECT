const modeSelect = document.getElementById('mode');
const normalCalculator = document.getElementById('normalCalculator');
const pipsCalculator = document.getElementById('pipsCalculator');

modeSelect.addEventListener('change', function() {
		if (modeSelect.value === 'normal') {
				normalCalculator.style.display = 'flex';
				pipsCalculator.style.display = 'none';
		} else if (modeSelect.value === 'pips') {
				normalCalculator.style.display = 'none';
				pipsCalculator.style.display = 'flex';
		}
});

const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

let input = "";

for (let key of keys) {
	const value = key.dataset.key;

	key.addEventListener('click', () => {
		if (value == "clear") {
			input = "";
			display_input.innerHTML = "";
			display_output.innerHTML = "";
		} else if (value == "backspace") {
			input = input.slice(0, -1);
			display_input.innerHTML = CleanInput(input);
		} else if (value == "=") {
			let result = eval(PerpareInput(input));

			display_output.innerHTML = CleanOutput(result);
		} else if (value == "brackets") {
			if (
				input.indexOf("(") == -1 || 
				input.indexOf("(") != -1 && 
				input.indexOf(")") != -1 && 
				input.lastIndexOf("(") < input.lastIndexOf(")")
			) {
				input += "(";
			} else if (
				input.indexOf("(") != -1 && 
				input.indexOf(")") == -1 || 
				input.indexOf("(") != -1 &&
				input.indexOf(")") != -1 &&
				input.lastIndexOf("(") > input.lastIndexOf(")")
			) {
				input += ")";
			}

			display_input.innerHTML = CleanInput(input);
		} else {
			if (ValidateInput(value)) {
				input += value;
				display_input.innerHTML = CleanInput(input);
			}
		}
	})
}

function CleanInput(input) {
	let input_array = input.split("");
	let input_array_length = input_array.length;

	for (let i = 0; i < input_array_length; i++) {
		if (input_array[i] == "*") {
			input_array[i] = ` <span class="operator">x</span> `;
		} else if (input_array[i] == "/") {
			input_array[i] = ` <span class="operator">÷</span> `;
		} else if (input_array[i] == "+") {
			input_array[i] = ` <span class="operator">+</span> `;
		} else if (input_array[i] == "-") {
			input_array[i] = ` <span class="operator">-</span> `;
		} else if (input_array[i] == "(") {
			input_array[i] = `<span class="brackets">(</span>`;
		} else if (input_array[i] == ")") {
			input_array[i] = `<span class="brackets">)</span>`;
		} else if (input_array[i] == "%") {
			input_array[i] = `<span class="percent">%</span>`;
		}
	}

	return input_array.join("");
}

function CleanOutput (output) {
	let output_string = output.toString();
	let decimal = output_string.split(".")[1];
	output_string = output_string.split(".")[0];

	let output_array = output_string.split("");

	if (output_array.length > 3) {
		for (let i = output_array.length - 3; i > 0; i -= 3) {
			output_array.splice(i, 0, ",");
		}
	}

	if (decimal) {
		output_array.push(".");
		output_array.push(decimal);
	}

	return output_array.join("");
}

function ValidateInput (value) {
	let last_input = input.slice(-1);
	let operators = ["+", "-", "*", "/"];

	if (value == "." && last_input == ".") {
		return false;
	}

	if (operators.includes(value)) {
		if (operators.includes(last_input)) {
			return false;
		} else {
			return true;
		}
	}

	return true;
}

function PerpareInput (input) {
	let input_array = input.split("");

	for (let i = 0; i < input_array.length; i++) {
		if (input_array[i] == "%") {
			input_array[i] = "/100";
		}
	}

	return input_array.join("");
}

//Position Sizing Calculator
const keys1 = document.querySelectorAll('.key');
const display_input1 = document.querySelector('.display1 .input');
const display_output1 = document.querySelector('.display1 .output');

let input1 = "";

for (let key of keys1) {
	const value = key.dataset.key;

	key.addEventListener('click', () => {
		if (value == "clear") {
			input1 = "";
			display_input1.innerHTML = "";
			display_output1.innerHTML = "";
		} else if (value == "backspace") {
			input1 = input1.slice(0, -1);
			display_input1.innerHTML = CleanInput(input1);
		} else if (value == "=") {
			let result1 = eval(PerpareInput(input1));

			display_output1.innerHTML = CleanOutput(result1);
		} else if (value == "brackets") {
			if (
				input1.indexOf("(") == -1 || 
				input1.indexOf("(") != -1 && 
				input1.indexOf(")") != -1 && 
				input1.lastIndexOf("(") < input1.lastIndexOf(")")
			) {
				input1 += "(";
			} else if (
				input1.indexOf("(") != -1 && 
				input1.indexOf(")") == -1 || 
				input1.indexOf("(") != -1 &&
				input1.indexOf(")") != -1 &&
				input1.lastIndexOf("(") > input1.lastIndexOf(")")
			) {
				input1 += ")";
			}

			display_input1.innerHTML = CleanInput(input1);
		} else {
			if (ValidateInput(value)) {
				input1 += value;
				display_input1.innerHTML = CleanInput(input1);
			}
		}
	})
}

function CleanInput(input1) {
	let input_array1 = input1.split("");
	let input_array_length1 = input_array1.length;

	for (let i = 0; i < input_array_length1; i++) {
		if (input_array1[i] == "*") {
			input_array1[i] = ` <span class="operator">x</span> `;
		} else if (input_array1[i] == "/") {
			input_array1[i] = ` <span class="operator">÷</span> `;
		} else if (input_array1[i] == "+") {
			input_array1[i] = ` <span class="operator">+</span> `;
		} else if (input_array1[i] == "-") {
			input_array1[i] = ` <span class="operator">-</span> `;
		} else if (input_array1[i] == "(") {
			input_array1[i] = `<span class="brackets">(</span>`;
		} else if (input_array1[i] == ")") {
			input_array1[i] = `<span class="brackets">)</span>`;
		} else if (input_array1[i] == "%") {
			input_array1[i] = `<span class="percent">%</span>`;
		}
	}

	return input_array1.join("");
}

function CleanOutput (output1) {
	let output_string1 = output1.toString();
	let decimal1 = output_string1.split(".")[1];
	output_string1 = output_string1.split(".")[0];

	let output_array1 = output_string1.split("");

	if (output_array1.length > 3) {
		for (let i = output_array1.length - 3; i > 0; i -= 3) {
			output_array1.splice(i, 0, ",");
		}
	}

	if (decimal1) {
		output_array1.push(".");
		output_array1.push(decimal1);
	}

	return output_array1.join("");
}

function ValidateInput (value1) {
	let last_input1 = input1.slice(-1);
	let operators1 = ["+", "-", "*", "/"];

	if (value1 == "." && last_input1 == ".") {
		return false;
	}

	if (operators1.includes(value1)) {
		if (operators1.includes(last_input1)) {
			return false;
		} else {
			return true;
		}
	}

	return true;
}

function PerpareInput (input1) {
	let input_array1 = input1.split("");

	for (let i = 0; i < input_array1.length; i++) {
		if (input_array1[i] == "%") {
			input_array1[i] = "/100";
		}
	}

	return input_array1.join("");
}