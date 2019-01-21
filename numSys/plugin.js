function takeNumber() {
	let num = document.querySelector('.number1').value;
	return num;
};

function takeSystem1() {
	let num = document.querySelector('.system1').value;
	return num;
};

function takeSystem2() {
	let num = document.querySelector('.system2').value;
	return num;
};

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
	let number1 = takeNumber();
	let system1 = takeSystem1();
	let system2 = takeSystem2();
	let num1Str = String(number1);

	for(let i = 0; i < num1Str.length; i++) {
		if(num1Str[i] == system1 || num1Str[i] < system1) {
			document.querySelector('.number2').value = 'Цифра больше СС';
			return; 
		}
	}

	if(number1 == '') {
		document.querySelector('.number2').value = 'не введено число'; 
		return;
	}
	if(system1 == '') {
		document.querySelector('.number2').value = 'не введена система счисления вашего числа';
		return;
	}
	if(system2 == '') {
		document.querySelector('.number2').value = 'не введена система счисления получаемого числа';
		return;
	}

	if (system1 != 10) {
		let newNum1 = 0;
		for(let i = 0; i < num1Str.length; i++) {
			newNum1 +=num1Str[i] * Math.pow(system1, num1Str.length - 1 - i);
			console.log(newNum1);
		}

		number1 = newNum1;
	};
	console.log('тут норм');
	let result = [Number(number1)];
	let resultPersent = [];
	let num = Math.floor(number1);


	while (Math.floor(num / system2) > 0) {  	//Цикл деления на систему и записи результата
		num /= system2;
		result.push(Math.floor(num));
	} 

	for(let i = 0; i < result.length; i++) { 	//Цикл нахождения остатка и записи в ресултПерсент
		if(result[i + 1] == undefined) break;
		let remaind = result[i] - result[i + 1] * system2;
		resultPersent.push(String(remaind));
	}

	let firstNum = result[result.length - 1];
	for(let i = resultPersent.length - 1; i >= 0; i--) { 	// Реверс ресултПерсента
		firstNum += String(resultPersent[i]);
	}

	document.querySelector('.number2').value = firstNum;
});