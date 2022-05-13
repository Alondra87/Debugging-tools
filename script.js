const arr = ['CANOPY', 'Back End Dev', 2015];

const loadList = () => {

    let showList = '';
    let rond = '';
    
  
 
    for (let i = 0; i < arr.length; i += 1){

        if (i == 0) { rond = 'counter'; } else {
            rond = 'canopy';
          }

        showList += `<li class=${rond}>${arr[i]}</li>`;

      document.getElementById('list_bug').innerHTML = showList


}
}

loadList();