const generateBtn = document.getElementById("generateBtn");
const colorInput = document.getElementById("colorInput");
const colorPalette = document.getElementById("colorPalette");

generateBtn.addEventListener("click", generatePalette);

function generatePalette() {
  const colors = parseColors(colorInput.value);
  const url = "http://colormind.io/api/";
  const data = {
    model: "default",
    input: colors,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      const palette = result.result;
      displayPalette(palette);
    })
    .catch((error) => {
      console.error(error);
    });
}

function parseColors(input) {
  const colorStrings = input.split(",");
  const colors = [];

  colorStrings.forEach((colorString) => {
    const hexColor = colorString.trim();
    const rgbColor = hexToRgb(hexColor);
    if (rgbColor) {
      colors.push(rgbColor);
    }
  });

  return colors;
}

function hexToRgb(hex) {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (match) {
    return [
      parseInt(match[1], 16),
      parseInt(match[2], 16),
      parseInt(match[3], 16),
    ];
  }
  return null;
}

function displayPalette(palette) {
  colorPalette.innerHTML = "";

  palette.forEach((color) => {
    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

    colorPalette.appendChild(colorBox);
  });
}
