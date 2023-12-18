var quotes = [ 
    {
        quote:  'Be who you are and say what you feel, because those who mind dont matter and those who matter dont mind.',
        author: 'Bernard M. Baruch'  
    } , 
    {
        quote:  '  if you tell the truth, you dont have to remember anything.  ' ,
        author: 'Mark Twain'  
    } , 
    {
        quote:  ' Without music, life would be a mistake..',
        author: 'Friedrich Nietzsche,'  
    } , 
    {
        quote:  'It is better to be hated for what you are than to be loved for what you are not.',
        author: ' Andre Gide'  
    } , 

    
]
 
   


function add() {  

    var x = quotes[Math.round(    Math.random() * (quotes.length-1)) ]  ;
    // console.log(x)    
    document.getElementById("ranQuote").innerHTML= x.quote;
    document.getElementById("ranAuthor").innerHTML= x.author;
    
}

