
function getRandomQuote(quote) {
   let quotee = quote[Math.floor(Math.random() * quote.length)];
    document.getElementById("para").innerHTML = quotee;
 };

export {getRandomQuote};
 