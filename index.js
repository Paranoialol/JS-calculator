'use strict';
(function () {
	/* preloder */
	document.body.onload = function () {
		setTimeout(function () {
			let preloader = document.getElementById('page-preloader');
			if (!preloader.classList.contains('done')) {
				preloader.classList.add('done');
			}
		}, 1000);
	}
	/* preloder code was written long time ago */
	let decimalBtn = document.getElementById('calc-decimal');
	let clearBtn = document.getElementById('calc-clear');
	let backspaceBtn = document.getElementById('calc-backspace');
	let displayValueElement = document.getElementById('calc-display-val');
	let calcNumBtns = document.getElementsByClassName('btn-num');
	let calcOperatorBtns = document.getElementsByClassName('operator');

	let displayValue = '0';
	let pendingValue;
	let resultStringArray = [];

	let updateDisplayVal = (clickOn) => {
		let btnText = clickOn.target.innerText;
		if (displayValue === '0')
			displayValue = '';
		displayValue += btnText;
		displayValueElement.innerText = displayValue;
	}

	let performOperation = (clickOn) => {
		let operator = clickOn.target.innerText;
		switch (operator) {
			case '+':
				pendingValue = displayValue;
				displayValue = '0';
				displayValueElement.innerText = displayValue;
				resultStringArray.push(pendingValue);
				resultStringArray.push('+');
				break;
			case '-':
				pendingValue = displayValue;
				displayValue = '0';
				displayValueElement.innerText = displayValue;
				resultStringArray.push(pendingValue);
				resultStringArray.push('-');
				break;
			case '÷':
				pendingValue = displayValue;
				displayValue = '0';
				displayValueElement.innerText = displayValue;
				resultStringArray.push(pendingValue);
				resultStringArray.push('/');
				break;
			case 'x':
				pendingValue = displayValue;
				displayValue = '0';
				displayValueElement.innerText = displayValue;
				resultStringArray.push(pendingValue);
				resultStringArray.push('*');
				break;
			case '=':
				resultStringArray.push(displayValue);
				let result = eval(resultStringArray.join(' '));
				displayValue = result + '';
				displayValueElement.innerText = displayValue;
				if (displayVal.length > 7)
					displayVal.length = 3;
				resultStringArray = [];
				break;
			default:
				break;
		}
	}

	for (let i = 0; i < calcNumBtns.length; i++) {
		calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
	}
	for (let i = 0; i < calcOperatorBtns.length; i++) {
		calcOperatorBtns[i].addEventListener('click', performOperation, false);
	}

	clearBtn.onclick = () => {
		displayValue = '0';
		pendingValue = undefined;
		resultStringArray = [];
		displayValueElement.innerHTML = displayValue;
	}

	backspaceBtn.onclick = () => {
		let lengthofDisplayVal = displayValue.length;
		displayValue = displayValue.slice(0, lengthofDisplayVal - 1);
		if (displayValue === '')
			displayValue = '0';
		displayValueElement.innerText = displayValue;
	}

	decimalBtn.onclick = () => {
		if (!displayValue.includes('.')) {
			displayValue += '.';
			displayValueElement.innerText = displayValue;
		}
	}
}());
