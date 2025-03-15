function showInputs() {
    const shape = document.getElementById('shape').value;
    const inputsDiv = document.getElementById('inputs');
    let inputFields = '';
    
    if (shape === 'square') {
        inputFields = '<input type="number" id="side" placeholder="Side length">';
    } else if (shape === 'rectangle') {
        inputFields = '<input type="number" id="length" placeholder="Length">' +
                      '<input type="number" id="width" placeholder="Width">';
    } else if (shape === 'circle') {
        inputFields = '<input type="number" id="radius" placeholder="Radius">';
    } else if (shape === 'triangle') {
        inputFields = '<input type="number" id="base" placeholder="Base">' +
                      '<input type="number" id="height" placeholder="Height">';
    } else if (shape === 'ellipse') {
        inputFields = '<input type="number" id="majorAxis" placeholder="Major Axis (a)">' +
                      '<input type="number" id="minorAxis" placeholder="Minor Axis (b)">';
    }
    
    inputsDiv.innerHTML = inputFields;
}

function calculateArea() {
    const shape = document.getElementById('shape').value;
    let area = 0;
    
    if (shape === 'square') {
        let side = document.getElementById('side').value;
        area = side * side;
    } else if (shape === 'rectangle') {
        let length = document.getElementById('length').value;
        let width = document.getElementById('width').value;
        area = length * width;
    } else if (shape === 'circle') {
        let radius = document.getElementById('radius').value;
        area = Math.PI * radius * radius;
    } else if (shape === 'triangle') {
        let base = document.getElementById('base').value;
        let height = document.getElementById('height').value;
        area = 0.5 * base * height;
    } else if (shape === 'ellipse') {
        let majorAxis = document.getElementById('majorAxis').value;
        let minorAxis = document.getElementById('minorAxis').value;
        area = Math.PI * majorAxis * minorAxis;
    }
    
    document.getElementById('result').textContent = 'Area: ' + area.toFixed(2);
}

showInputs(); // Initialize input fields based on the default selection