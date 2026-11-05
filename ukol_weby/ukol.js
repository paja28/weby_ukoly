const tabs = document.querySelectorAll('#Titles section');
const quotes = document.querySelectorAll('#Quotes .Quote');

function selectTab(index) {
    tabs.forEach((tab, i) => tab.classList.toggle('Active', i === index));
    quotes.forEach((quote, i) => quote.classList.toggle('Active', i === index));
}

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectTab(i));
    tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectTab(i);
        }
    });
});
