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

const quantityCheck = function() {
	for (let i = 0; i < obj.variation_list.length - 2; i++) {
		let stockID = obj.variation_list[i].sku;
		if (obj.variation_list[i].availability === 0) {
			document.getElementById('_' + stockID).style.borderColor = 'rgb(250, 0, 0)';
			document.getElementById('_' + stockID).style.borderWidth = '2px';
			console.log('hit here');
		}
		document.getElementById('_' + stockID).style.borderWidth = '2px';
		// } else if (obj.variation_list[i].availability <= 10) {
		// 	document.getElementById('_' + stockID).style.borderColor = 'rgb(234, 255, 48)';
		// 	document.getElementById('_' + stockID).style.borderWidth = '2px';
		// 	console.log(document.getElementById('_' + stockID));
		// }
	}
};

let firstRow = createRow('rowOne');
let secondRow = createRow('rowTwo');

for (let j = 0; j < obj.variation_list.length - 2; j++) {
	let pOne = pTag();
	let pTwo = pTag();
	if (j < (obj.variation_list.length - 2) / 2) {
		let textnode = text('Size ' + obj.variation_list[j].size);
		let quantity = text('Quantity: ' + obj.variation_list[j].availability);
		let tempCol = createCol();
		pOne.appendChild(textnode);
		pTwo.appendChild(quantity);
		tempCol.setAttribute('id', obj.variation_list[j].sku);
		tempCol.appendChild(pOne);
		tempCol.appendChild(pTwo);
		firstRow.appendChild(tempCol);
	} else {
		let textnodeTwo = text('Size ' + obj.variation_list[j].size);
		let quantityTwo = text('Quantity: ' + obj.variation_list[j].availability);
		let tempColTwo = createCol();

		pOne.appendChild(textnodeTwo);
		pTwo.appendChild(quantityTwo);
		tempColTwo.setAttribute('id', '_' + obj.variation_list[j].sku);
		tempColTwo.appendChild(pOne);
		tempColTwo.appendChild(pTwo);
		secondRow.appendChild(tempColTwo);
	}
}
document.getElementById('list').appendChild(headOne(obj.id));

document.getElementById('list').appendChild(lineBreak());
document.getElementById('list').appendChild(lineBreak());

document.getElementById('list').appendChild(firstRow);

document.getElementById('list').appendChild(lineBreak());
document.getElementById('list').appendChild(lineBreak());

document.getElementById('list').appendChild(secondRow);
quantityCheck();
