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