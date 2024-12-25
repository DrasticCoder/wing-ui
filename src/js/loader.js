(function () {
  const theme =
    document.currentScript.getAttribute('data-theme') || 'neobrutalism';
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://ui.drasticcoder.in/main.css`; //TODO: update cdn link
  document.head.appendChild(link);
})();
