
function displayWikiResults() {
  const listOfData = [];
  let query = document.querySelector('#search-box').value;
  let url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&generator=prefixsearch&exchars=700&exlimit=10&exintro=1&explaintext=1&gpsnamespace=0&gpslimit=10&gpssearch=pokemon" //+query;
  fetch(url).then(response => response.json()).then(data => {
    let hey = data.query.pages
    console.log(data.query.pages)
    for(let key in hey){

     listOfData.push({pageid: hey[key].pageid,
                      title: hey[key].title,
                      extract: hey[key].extract })

   }
    // return listOfData.map(result => {
    //   let title = document.createElement('h3');
    //   title.setAttribute('class', 'result-title');
    //   title.setAttribute('data-key', `${result.pageid}`);
    //   title.innerHTML = `${result.title}`;
    //   append(title);
    // });
    //  `<div class='result-list'>
    //      <h3 class='result-title' data-key="${result.pageid}">${result.title}</h3>
    //      <p class='result-extract'>${result.extract}</p>
    // </div>`).join('');
  }).catch(err => console.log(err));
  console.log(listOfData);
}

//this method works
// for(let key in listOfData){
//   let title = document.createElement('h3');
//   title.setAttribute('class', 'result-title');
//   title.setAttribute('data-key',listOfData[key].pageid);
//   title.innerHTML = listOfData[key].title;
//
//   document.querySelector("#result-box").appendChild(title)
//   //listOfData[key].pageid
//   //listOfData[key].title
//   //listOfData[key].extract
// }
