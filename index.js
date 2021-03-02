let items = JSON.parse( localStorage.getItem("items"));

let itemsList = document.getElementById("itemsList");




const add = () => {
  
  let newItem = document.getElementById('input').value;
  if (newItem.trim().length === 0) {
    alert('Please enter task!');
  }
  else {
    if(items===null){
       items=[];
    }
    items.push(newItem.trim());
    localStorage.setItem("items",JSON.stringify(items));
    
    document.getElementById('input').value = '';
    let list = document.createElement('li');
    let span=document.createElement('span');
    span.className='close-button';
    let cross=document.createTextNode('X');
    

    let task = document.createTextNode(newItem);
    span.appendChild(cross);
    list.appendChild(task);
    list.appendChild(span);
    itemsList.appendChild(list);
span.className='close-button';
  }
}
for (let i = 0; i < items.length; i++) {

  let list = document.createElement('li');
  let span=document.createElement('span');
  span.className='close-button';
  let cross=document.createTextNode('X');
  let task = document.createTextNode(items[i]);
  span.appendChild(cross);

  list.appendChild(task);
  list.appendChild(span);
  
  itemsList.appendChild(list);
}


const clearAll=()=>{
  localStorage.removeItem('items');
  items=[];
while(itemsList.firstChild){
  itemsList.removeChild(itemsList.lastChild);
}
  
}

var close=document.getElementsByClassName('close-button');
for (let i=0;i<close.length;i++){
  close[i].onclick=function(){
    var div=this.parentElement;
    div.style.display='none';
    console.log(this.parentElement)
  }
}