
const mergeSameCards = ()=>{
  //every package
  [...document.querySelectorAll('.outgoing-package, .incoming-package')].forEach(elem=>{
  let repeated = [];
  //every card inside package
  let cards = [...elem.querySelectorAll('a.cardpeek')];
  //it's ~O(n^2) but a small sample helps with this
  for(let i=0;i<cards.length;i++){
    let search = cards[i].innerText;
    cards[i].dataset.total = 1;
    for(let f = i+1; f<cards.length;f++){
      //found repeated
      if(cards[f].innerText == search) { 
        let father = cards[f].parentNode.parentNode.parentNode;
        father.parentNode.removeChild(father);
        cards[i].dataset.total = parseInt(cards[i].dataset.total)+1;
      }
    } 
    //reupdated total if removed
    cards = [...elem.querySelectorAll('a.cardpeek')];
    cards[i].innerText = cards[i].dataset.total + 'x ' + cards[i].innerText;
    
  }
});
}

const mergeButton = document.createElement('button');
mergeButton.className ='btn btn-default  btn-sm btn-primary';
mergeButton.innerText = 'Merge Repeated Cards';
//mergeButton.style.position = 'fixed';
//mergeButton.style.bottom = '25px';
//mergeButton.style.right = '25px';
//mergeButton.style.zIndex = '10';
mergeButton.style.marginLeft = '25px';
mergeButton.addEventListener('click',()=>{mergeSameCards();});
document.querySelector('.info-header .btn-group').appendChild(mergeButton);
   

  