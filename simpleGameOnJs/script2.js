// Программа "Выбор верной ячейки"

'use strict'
let n = 20 * 20;;
let startNum = 1;
let targetFocusClass;
let targetClass;

function createMatrix() {
	let matrix = document.getElementById('matrix');
	let numberCell = 1;

	for (let i = 0; i < n; i++) {
		let div = document.createElement('div');
		div.className = `cell num${numberCell}`;
		numberCell++;
		matrix.appendChild(div);
	}
}

function getFocusCell() {
	let targetNumberCell = parseInt(Math.random() * n);
	parseInt(targetNumberCell);
	targetFocusClass = "num" + targetNumberCell;
	document.getElementsByClassName(targetFocusClass)[0].style.backgroundColor = "blue";
}

function pickCell() {
	targetClass = "num" + startNum;
	document.getElementsByClassName(targetClass)[0].classList.toggle("red");
	setTimeout(checkCell, 500);
}

function movieCell() {
	pickCell();

	document.addEventListener('keydown', function (event) {
		if (event.key == 'ArrowUp') {
			if (startNum > 20) {
				pickCell();
				startNum -= 20;
				pickCell();
			}
		}
		if (event.key == 'ArrowDown') {
			if (startNum < 381) {
				pickCell();
				startNum += 20;
				pickCell();
			}
		}
		if (event.key == 'ArrowRight') {
			if (startNum == 400) {
				pickCell();
				startNum = 1;
			} else {
				pickCell();
				startNum += 1;
			}
			pickCell();
		}
		if (event.key == 'ArrowLeft') {
			if (startNum == 1) {
				pickCell();
				startNum = 400;
			} else {
				pickCell();
				startNum -= 1;
			}
			pickCell();
		}
	});
}

function changeFocusColor() {
	document.getElementsByClassName(targetFocusClass)[0].style.backgroundColor = "gray";
}

function checkCell() {
	if (targetFocusClass == targetClass) {
		alert("Вы точно выбрали клетку!");
		// console.log("Вы точно выбрали клетку!");
		changeFocusColor();
		getFocusCell();
	}
}

window.onload = function () {
	createMatrix();
	getFocusCell();
	movieCell();
}
