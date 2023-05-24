window.addEventListener('DOMContentLoaded', () => {
  const htmlInput = document.getElementById('html-input');
  const cssInput = document.getElementById('css-input');
  const jsInput = document.getElementById('js-input');
  const output = document.getElementById('output');

  function updateOutput() {
    const html = htmlInput.value;
    const css = cssInput.value;
    const js = jsInput.value;

    const combinedCode = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;

    output.srcdoc = combinedCode;
  }

  htmlInput.addEventListener('input', updateOutput);
  cssInput.addEventListener('input', updateOutput);
  jsInput.addEventListener('input', updateOutput);
});

