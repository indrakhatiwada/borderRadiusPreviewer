let slider = document.getElementById("myRange");

let output = document.getElementById('output');

let borderBox = document.getElementById('border-box')
let height = document.getElementById('height')
let width = document.getElementById('width')
let submit = document.getElementById('submit');

submit.onclick = function (e) {
    e.preventDefault();
    borderBox.style.height = `${height.value}px`
    borderBox.style.width = `${width.value}px`

}


output.innerHTML = slider.value

slider.oninput = function () {
    output.innerHTML = this.value;
    borderBox.style.borderRadius = `${this.value}px`;
} 