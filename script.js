const list =  document.querySelector('#render-box');
const error = document.querySelector('#error-box');
const searchForm = document.querySelector('#search-form');
const renderBox = document.querySelector('#render-box');

document.addEventListener('keypress', event => {
  var key = event.which || event.keyCode;
    if (key === 13) { // 13 is enter
      event.preventDefault();
      displayWikiResults();
    }
});

function displayWikiResults() {
  searchForm.style.margin = "5% auto 0 auto";
  reset();
  const listOfData = [];
  let query = document.querySelector('#search-box').value;
  let url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&generator=prefixsearch&exchars=700&exlimit=10&exintro=1&explaintext=1&gpsnamespace=0&gpslimit=10&gpssearch=" +query;
  fetch(url).then(response => response.json()).then(data => {
    let realData = data.query.pages;
    for (let key in realData) {
      listOfData.push({pageid: realData[key].pageid, title: realData[key].title, extract: realData[key].extract});
    }
    renderResults(listOfData);
  }).catch(err => {
    error.innerHTML = `<p>Error: Type something!!!</p>`;console.log(err)});

}

function reset(){
  document.querySelector('#render-box').style.opacity = "0";
  list.innerHTML = "";
  error.innerHTML = "";

}

function renderResults(data){
  const dataRender =  data.map(result => `
      <div class='result-box'>
         <h3 class='result-title'
           onclick="location.href='https://en.wikipedia.org/?curid=${result.pageid}'" data-key="${result.pageid}">${result.title}
         </h3>
         <p class='result-extract'>${result.extract}</p>
    </div>`).join('');
    list.innerHTML = dataRender;
    document.querySelector('#render-box').style.opacity = "1";
}
