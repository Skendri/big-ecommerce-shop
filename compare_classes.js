const fs = require('fs');

const htmlFile = 'products.html';
const cssFile = 'products.css';

function extractClassesFromHTML(html) {
  const classRegex = /class\\s*=\\s*["']([^"']+)["']/g;
  const classes = new Set();
  let match;
  while ((match = classRegex.exec(html)) !== null) {
    const classList = match[1].split(/\\s+/);
    classList.forEach(cls => classes.add(cls));
  }
  return classes;
}

function extractClassesFromCSS(css) {
  const classSelectorRegex = /\\.([a-zA-Z0-9_-]+)[\\s,{]/g;
  const classes = new Set();
  let match;
  while ((match = classSelectorRegex.exec(css)) !== null) {
    classes.add(match[1]);
  }
  return classes;
}

function main() {
  const htmlContent = fs.readFileSync(htmlFile, 'utf-8');
  const cssContent = fs.readFileSync(cssFile, 'utf-8');

  const htmlClasses = extractClassesFromHTML(htmlContent);
  const cssClasses = extractClassesFromCSS(cssContent);

  const missingInCSS = [...htmlClasses].filter(c => !cssClasses.has(c));
  const unusedInHTML = [...cssClasses].filter(c => !htmlClasses.has(c));

  console.log('Classes used in HTML but missing in CSS (missing styles):');
  console.log(missingInCSS.length ? missingInCSS.join(', ') : 'None');

  console.log('\\nClasses defined in CSS but not used in HTML (unused styles):');
  console.log(unusedInHTML.length ? unusedInHTML.join(', ') : 'None');
}

main();
