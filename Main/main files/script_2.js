// 1. Get a reference to the HTML element.
const textElement = document.getElementById('text-to-change');

// 2. Create an array of web-safe fonts.
const fonts = [
    'Arial, sans-serif',
    'Verdana, sans-serif',
    'Georgia, serif',
    'Courier New, monospace',
    'Lucida Console, monospace',
    'Impact, fantasy',
    'Knewave, system-ui',
    'Fascinate, system-ui',
    'Quantico, sans-serif',
    'Edu SA Hand, cursive',
    'Bebas Neue, Archivo Black',
    'rubik, Tomorrow' ,
    'Vend Sans, sans-serif'
    
];

// 3. Define the function that will change the font.
function setRandomFont() {
    // Generate a random index number.
    const randomIndex = Math.floor(Math.random() * fonts.length);

    // Get the random font family from the array.
    const randomFont = fonts[randomIndex];
    
    // Apply the new font to the text element.
    textElement.style.fontFamily = randomFont;
}

// 4. Use setInterval to call the setRandomFont function every 50 milliseconds.
setInterval(setRandomFont, 300); // 1000ms = 1 second
