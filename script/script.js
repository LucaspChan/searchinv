// https://www.adidas.ca/api/products/FW4904/availability
const shoeJSON =
	'{"id":"FW4904","availability_status":"IN_STOCK","variation_list":[{"sku":"FW4904_580","availability":3,"availability_status":"IN_STOCK","size":"6.5"},{"sku":"FW4904_590","availability":15,"availability_status":"IN_STOCK","size":"7"},{"sku":"FW4904_600","availability":15,"availability_status":"IN_STOCK","size":"7.5"},{"sku":"FW4904_610","availability":15,"availability_status":"IN_STOCK","size":"8"},{"sku":"FW4904_620","availability":15,"availability_status":"IN_STOCK","size":"8.5"},{"sku":"FW4904_630","availability":15,"availability_status":"IN_STOCK","size":"9"},{"sku":"FW4904_640","availability":15,"availability_status":"IN_STOCK","size":"9.5"},{"sku":"FW4904_650","availability":15,"availability_status":"IN_STOCK","size":"10"},{"sku":"FW4904_660","availability":15,"availability_status":"IN_STOCK","size":"10.5"},{"sku":"FW4904_670","availability":15,"availability_status":"IN_STOCK","size":"11"},{"sku":"FW4904_680","availability":15,"availability_status":"IN_STOCK","size":"11.5"},{"sku":"FW4904_690","availability":15,"availability_status":"IN_STOCK","size":"12"},{"sku":"FW4904_700","availability":0,"availability_status":"NOT_AVAILABLE","size":"12.5"},{"sku":"FW4904_710","availability":15,"availability_status":"IN_STOCK","size":"13"},{"sku":"FW4904_730","availability":0,"availability_status":"NOT_AVAILABLE","size":"14"},{"sku":"FW4904_750","availability":0,"availability_status":"NOT_AVAILABLE","size":"15"}]}';

const obj = JSON.parse(shoeJSON);
console.log(obj.id, obj.availability_status);

let createRow = function(anotherName) {
	let row = document.createElement('div');
	row.className = 'row ' + anotherName;
	return row;
};

const createCol = function() {
	let col = document.createElement('div');
	col.className = 'col borderStatus';
	return col;
};

const lineBreak = function() {
	let line = document.createElement('div');
	let row = createRow();
	line.className = 'col-12 p-2';
	row.appendChild(line);
	return row;
};

const headOne = function(title) {
	let hOne = document.createElement('h4');
	hOne.className = 'text-center';
	hOne.appendChild(text(title));
	console.log(hOne);
	return hOne;
};

const pTag = function() {
	let para = document.createElement('p');
	return para;
};

const text = function(texts) {
	let node = document.createTextNode(texts);
	return node;
};

const quantityCheck = function(ind) {
	if (obj.variation_list[ind].availability == 0) {
		console.log('empty');
	}
};

let firstRow = createRow('rowOne');
let secondRow = createRow('rowTwo');

for (let j = 0; j < obj.variation_list.length - 2; j++) {
	let pOne = pTag();
	let pTwo = pTag();
	if (j < (obj.variation_list.length - 2) / 2) {
		let textnode = text('Size ' + obj.variation_list[j].size);
		console.log(obj.variation_list[j].sku);
		let quantity = text('Quantity: ' + obj.variation_list[j].availability);
		quantityCheck(j);
		let tempCol = createCol();
		pOne.appendChild(textnode);
		pTwo.appendChild(quantity);
		tempCol.appendChild(pOne);
		tempCol.appendChild(pTwo);
		firstRow.appendChild(tempCol);
	} else {
		let textnodeTwo = text('Size ' + obj.variation_list[j].size);
		let quantityTwo = text('Quantity: ' + obj.variation_list[j].availability);
		let tempColTwo = createCol();

		quantityCheck(j);
		pOne.appendChild(textnodeTwo);
		pTwo.appendChild(quantityTwo);
		tempColTwo.appendChild(pOne);
		tempColTwo.appendChild(pTwo);
		secondRow.appendChild(tempColTwo);
	}
	console.log(pOne);
}
document.getElementById('list').appendChild(headOne(obj.id));

document.getElementById('list').appendChild(lineBreak());
document.getElementById('list').appendChild(lineBreak());

document.getElementById('list').appendChild(firstRow);

document.getElementById('list').appendChild(lineBreak());
document.getElementById('list').appendChild(lineBreak());

document.getElementById('list').appendChild(secondRow);
