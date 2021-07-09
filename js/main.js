const generator = document.querySelector('.generator');
const qouteContent = document.querySelector('.qoute-content');
const sayer = document.querySelector('.qoute-sayer');
const loader = document.querySelector('.loader');

    



// *without Api*

// contentArr = ['Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.',
//               'The price of anything is the amount of life you exchange for it.',
//               'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all',
//               "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we 've got"]


// sayerArr = ['Charles Lindbergh','David Thoreau','John Kenneth Galbraith','Life']


// let anOtherQuote = () => {

//         let i = Math.floor(Math.random()*contentArr.length);
//         qouteContent.textContent = contentArr[i];
//         sayer.textContent = sayerArr[i];

   
// }


async function getQuote(){
    
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const respnse = await fetch(proxyUrl + apiUrl);
        const data = await respnse.json();
        qouteContent.textContent = data.quoteText;
        sayer.textContent = data.quoteAuthor;
       
    }catch(error){
        getQuote();
       
    }
    
}











generator.addEventListener('click',getQuote)















































































