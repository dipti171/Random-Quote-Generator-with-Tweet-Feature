//getelementryBYTagname ---it always returns an array
const quote=document.getElementsByTagName("blockquote")[0];
const author=document.getElementsByClassName("author")[0];


const newQuote=document.querySelector(".quote_btn");
const tweetBtn=document.querySelector(".tweet_btn");



const apiLink="https://quotes-api-self.vercel.app/quote";
//api call- using async and await



let temp;
const getData=async()=>{
    const response=await fetch(apiLink);
    const data=await response.json();
    //console.log(data);
    //console.log(data.author);
    //console.log(data.quote);



    quote.innerText=data.quote;
    author.innerText=data.author;
    temp=data.quote;
    

}
//function call
getData();


newQuote.addEventListener("click",()=>{
    getData();
});

tweetBtn.addEventListener("click",()=>{
    window.open("https://twitter.com/intent/tweet?text="+temp, 
        "tweet post",
        "width=400,height=400");
});

console.log("code after async and await");
console.log("code after async and await");
console.log("code after async and await");

//dynamicall change the text
//quote.innertext="motivational quote";

//author.innerText="nikhil singh";