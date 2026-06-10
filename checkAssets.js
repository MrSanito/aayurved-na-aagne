const fs = require('fs');
const path = require('path');
const publicDir = path.join(process.cwd(), 'public');

function checkPathsInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let assetPathMatch = content.match(/const assetPath = ['"]([^'"]+)['"]/);
  if (!assetPathMatch) {
    assetPathMatch = content.match(/export const assetPath = ['"]([^'"]+)['"]/);
  }
  let assetPath = assetPathMatch ? assetPathMatch[1] : '';

  console.log('--- Checking ' + filePath + ' ---');
  let missing = [];

  // find hardcoded paths like "/assets/..."
  const strRegex = /['"](\/[^'"]*\.[a-zA-Z0-9]+)['"]/g;
  let match;
  while ((match = strRegex.exec(content)) !== null) {
    let p = match[1];
    let fullPath = path.join(publicDir, decodeURI(p));
    if (!fs.existsSync(fullPath)) {
      missing.push(p);
    }
  }
  
  // find template literals like `${assetPath}/hero.jpg`
  // We match literally: \$\{assetPath\}
  const tplRegex = new RegExp('`\\$\\{assetPath\\}(\\/[^`]*\\.[a-zA-Z0-9]+)`', 'g');
  while ((match = tplRegex.exec(content)) !== null) {
    if (assetPath) {
      let p = assetPath + match[1];
      let fullPath = path.join(publicDir, decodeURI(p));
      if (!fs.existsSync(fullPath)) {
        missing.push(p);
      }
    }
  }

  // find variables from other imports, or other generic missing files
  // (We'll just rely on the above two for now since they cover the project's pattern)

  if (missing.length === 0) {
    console.log('All paths exist.\n');
  } else {
    console.log('Missing paths:');
    missing.forEach(m => console.log('  ' + m));
    console.log('');
  }
}

const files = [
  'src/app/arthritis/constants.ts',
  'src/app/bellacast/constants.ts',
  'src/app/haircare/constants.ts',
  'src/app/products/constants.ts',
  'src/app/women/constants.ts'
];

files.forEach(f => checkPathsInFile(path.join(process.cwd(), f)));
