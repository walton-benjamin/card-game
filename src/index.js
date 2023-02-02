let quotesDiv = document.getElementById('quotes')




fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(res=>res.json())
.then(thisDeck=>{
    quotesDiv.innerHTML += `<p>${thisDeck.remaining}</p>`
    quotesDiv.innerHTML += `<p>${thisDeck.shuffled}</p>`

}) // quote.quote
