// Alert Me Section
function alertMe() {
    const name = document.getElementById('name').value;
    if (name) {
        alert("Hi " + name + "!");
    }
}

// Change Color Section
function changeColor() {
    const body = document.body;
    body.style.backgroundColor = (body.style.backgroundColor === 'green') ? 'lightblue' : 'green';
}

// Text Tester Section
function validateText() {
    const text = document.getElementById('textInput').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
        alert("Special characters are not allowed!");
    } else {
        alert("Text is valid.");
    }
}

// Add Text Section
function addText() {
    const heading = document.getElementById('heading');
    heading.innerText += " Add Text";
}