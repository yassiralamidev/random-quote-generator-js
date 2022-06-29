let quote = document.getElementById("quote");
let author = document.getElementById('authorName');
let btn = document.getElementById('getQuote');
let sound_btn = document.getElementById('sound');
let copy_btn = document.getElementById('copy');

const getQuote = ()=>{
  const url = "https://api.quotable.io/random";
  fetch(url)
  .then(response => {return response.json()})
  .then(data =>{
    console.log(data);
    quote.innerText = data.content;
    author.innerText = data.author
  })
}

const copy =()=>{
  navigator.clipboard.writeText(quote.innerText)
}

const sound =()=>{
  let utt = new SpeechSynthesisUtterance(`${quote.innerText}`);
  speechSynthesis.speak(utt);
}

btn.onclick = getQuote;
sound_btn.onclick = sound;
copy_btn.onclick = copy;