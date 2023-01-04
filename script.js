const adviceNumber = document.querySelector('.advice-number');
const adviceQuote = document.querySelector('.advice-quote');
const randomQuoteBtn = document.querySelector('.random-quote-btn');
const leftQuote = '\u{201C}';
const rightQuote = '\u{201D}';

randomQuoteBtn.addEventListener('click', (e) => {
    const quotePromise = Promise.resolve(fetch('https://api.adviceslip.com/advice', { mode: 'cors' }));
    quotePromise.then((response) => {
        return response.json();
    }).then((data) => {
        const dataObj = data.slip;
        adviceNumber.textContent = `Advice #${dataObj.id}`;
        adviceQuote.textContent = `${leftQuote}${dataObj.advice}${rightQuote}`;
    });
});