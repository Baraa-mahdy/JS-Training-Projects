const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random"; // Use the correct endpoint

async function getQuote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        quote.innerHTML = data.content; // Access the correct property
        author.innerHTML = `${data.author}`; // Access the correct property
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        quote.innerHTML = "Could not fetch the quote. Please try again later.";
        author.innerHTML = "";
    }
};

document.querySelector("button").addEventListener("click", () => getQuote(api_url));

// Fetch the initial quote on page load
getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?tex=" + quote.innerHTML,
        "Tweet Window", "width=600, hieght=300");
}
