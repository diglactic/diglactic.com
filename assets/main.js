window.addEventListener(
    'DOMContentLoaded',
    () => document.querySelector('#copyright-year').innerHTML = (new Date).getFullYear().toString()
);
