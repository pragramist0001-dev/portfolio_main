const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    // Launch a headless browser instance
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Construct the absolute path to the HTML file
    const filePath = 'file://' + path.join(__dirname, 'cv.html').replace(/\\/g, '/');
    
    // Go to the HTML file and wait for network idle to ensure CSS (Tailwind) and fonts are loaded
    await page.goto(filePath, { waitUntil: 'networkidle0' });
    
    // Path where the PDF will be saved
    const pdfPath = path.join(__dirname, 'public', 'cv.pdf');
    
    // Generate PDF
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true, // Print CSS backgrounds
      margin: {
        top: '0',
        bottom: '0',
        left: '0',
        right: '0'
      }
    });

    console.log(`PDF successfully generated at: ${pdfPath}`);
    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
})();
