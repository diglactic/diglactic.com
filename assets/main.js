{
    function ready() {
        document.querySelector('#copyright-year').innerHTML = (new Date).getFullYear().toString()
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ready);
    } else {
        ready();
    }
}
