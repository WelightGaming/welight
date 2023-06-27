function addTextBox() {
  // Create a new text box element
  var textBox = document.createElement('input');
  
  // Set attributes and styles for the text box
  textBox.type = 'text';
  textBox.placeholder = 'Enter your text';
  textBox.className = 'textbox';
  
  // Add the text box to the container element
  var container = document.getElementById('textbox-container');
  container.appendChild(textBox);
}
