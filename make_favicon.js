import fs from 'fs';

try {
  // Read avatar.png
  const imageBuffer = fs.readFileSync('./public/avatar.png');
  const base64Image = imageBuffer.toString('base64');

  // Create an SVG that wraps the base64 image in a circle
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <clipPath id="circleView">
      <circle cx="50" cy="50" r="50" />
    </clipPath>
  </defs>
  <image width="100" height="100" href="data:image/png;base64,${base64Image}" clip-path="url(#circleView)" preserveAspectRatio="xMidYMid slice" />
</svg>`;

  // Write it as favicon.svg
  fs.writeFileSync('./public/favicon.svg', svgContent);
  console.log('Successfully created circular favicon.svg!');
} catch (error) {
  console.error('Error generating favicon:', error);
}
