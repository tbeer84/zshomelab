// Generate and append binary numbers to the binary-code element
const binaryCodeElement = document.getElementById('binary-code');

for (let i = 0; i < 25; i++) {
    const binaryNumber = document.createElement('span');
    binaryNumber.classList.add('binary-number');
    binaryNumber.textContent = Math.random() > 0.5 ? '1' : '0'; // Generate random binary number
    binaryNumber.style.left = Math.random() * 100 + 'vw'; // Randomize horizontal position in viewport width units
    binaryNumber.style.animationDelay = Math.random() * 10 + 's'; // Randomize animation delay
    binaryCodeElement.appendChild(binaryNumber);
}