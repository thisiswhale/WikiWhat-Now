function getWiki(){
  // let query ='pokemon';
  // console.log(query);
  // let url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='+query'&callback=?';
  // https://en.wikipedia.org/w/api.php?action=query&action=query&list=search&srsearch=pokemon&format=json
console.log('hello');

let url ="https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&generator=prefixsearch&exchars=700&exlimit=10&exintro=1&explaintext=1&gpsnamespace=0&gpslimit=10&gpssearch=pokemon"
  fetch(url).then((response) => response.json())
          .then( (data)=>{
            let listOfData = data.query.pages;

            for(let key in listOfData){
              listOfData[key].pageid
              listOfData[key].title
              listOfData[key].extract
              
            }
            //data[0].search
            //https://en.wikipedia.org/?curid=
        }).catch( (err) =>err );
}
 getWiki();
