import { mathematicalOperation } from './mathematical_operation';

const oper1 = document.getElementById('input1');
const oper2 = document.getElementById('input2');
const result = document.getElementById('result');

const add = () => {
	if(oper1.value && oper2.value){	
		result.innerHTML = '';
		result.innerHTML = mathematicalOperation.addTwoNumber(oper1.value,oper2.value);
	}
}

const multiply = () => {
	if(oper1.value && oper2.value){	
		result.innerHTML = '';
		result.innerHTML = mathematicalOperation.multiplyTwoNumber(oper1.value,oper2.value);
	}
}

const addBtn = document.getElementById('add_btn');
const multiplyBtn = document.getElementById('multiply_btn');

addBtn.addEventListener('click',add);
multiplyBtn.addEventListener('click',multiply);