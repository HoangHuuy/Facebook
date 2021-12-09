let hid = [...document.getElementsByClassName('tools-list')[0].getElementsByTagName('li')];

let hidBtn = document.getElementById('hidden');
let openBtn = document.getElementById('open-list');

hidBtn.onclick = function(){
    hid.forEach((item, index) => {
        if(index >= 6 && index < hid.length){
            item.style.display = 'none';
        }
    })
    openBtn.style.display = 'block';
}

openBtn.onclick = function(){
    hid.forEach((item, index) => {
        if(index >= 6 && index < hid.length){
            item.style.display = 'block';
        }
    })
    openBtn.style.display = 'none';
}

let hid1 = [...document.getElementsByClassName('tools-list')[1].getElementsByTagName('li')];

let hidBtn1 = document.getElementById('hidden-1');
let openBtn1 = document.getElementById('open-list-1');

hidBtn1.onclick = function(){
    hid1.forEach((item, index) => {
        if(index >= 5 && index < hid1.length){
            item.style.display = 'none';
        }
    })
    openBtn1.style.display = 'block';
}

openBtn1.onclick = function(){
    hid1.forEach((item, index) => {
        if(index >= 5 && index < hid1.length){
            item.style.display = 'block';
        }
    })
    openBtn1.style.display = 'none';
}