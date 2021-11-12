// animation cho search
let searchInput = document.getElementById('search-input');
let searchIcon = document.getElementById('search-icon');
let logo = document.getElementById('logo');
let logoDisappeared = document.getElementById('logo-disappeared');
let navSearchBox = document.getElementsByClassName('nav-search-box')[0];
let faArrowLeft = document.getElementsByClassName('fa-arrow-left')[0];
let search = document.getElementsByClassName('search')[0];
let navRecentSearch = document.getElementsByClassName('nav-recent-search')[0];

searchInput.onfocus = function(){
    searchIcon.style.left = '-20px';
    searchInput.style.paddingLeft = '16px';
    searchIcon.style.animation = 'fadeOut 0.05s 1 linear forwards';
    logo.style.display = 'none';
    logoDisappeared.style.display = 'block';
    faArrowLeft.style.left = '6px';
    navSearchBox.style.marginLeft = '0';
    navSearchBox.style.width = '250px';
    search.style.boxShadow = '0px 10px 10px rgba(82, 82, 82, 0.295)';
}

searchInput.onblur = function(){
    searchIcon.style.left = '12px';
    searchInput.style.paddingLeft = '36px';
    searchIcon.style.animation = 'fadeIn 0.6s 1 linear forwards';
    logo.style.display = 'block';
    logoDisappeared.style.display = 'none';
    faArrowLeft.style.left = '20px';
    navSearchBox.style.marginLeft = '12px';
    navSearchBox.style.width = '240px';
    search.style.boxShadow = 'none';
}


// hien thi va tat hien thi recent search
searchInput.onclick = function(){
    navRecentSearch.style.display = 'block';
}

window.addEventListener('mouseup', function(event) {
    var isClickInsideElement = navRecentSearch.contains(event.target);
    if (!isClickInsideElement) {
        navRecentSearch.style.display = 'none';
    }
});

// animation cho search-1245
let searchInput1245 = document.getElementById('search-1245-input');
let searchIcon1245 = document.getElementById('search-1245-icon');
let logo1245 = document.getElementById('logo1');
let logoDisappeared1245 = document.getElementById('logo-disappeared1');
let navSearchBox1245 = document.getElementsByClassName('nav-search-1245-box')[0];
let faArrowLeft1245 = document.getElementsByClassName('fa-arrow-left')[1];
let search1245 = document.getElementsByClassName('search-1245')[0];
let navRecentSearch1245 = document.getElementsByClassName('nav-recent-search-1245')[0];

searchInput1245.onfocus = function(){
    searchIcon1245.style.left = '-20px';
    searchInput1245.style.paddingLeft = '16px';
    searchIcon1245.style.animation = 'fadeOut 0.05s 1 linear forwards';
    logo1245.style.display = 'none';
    logoDisappeared1245.style.display = 'block';
    faArrowLeft1245.style.left = '6px';
    navSearchBox1245.style.marginLeft = '0';
    navSearchBox1245.style.width = '250px';
    search1245.style.boxShadow = '0px 10px 10px rgba(82, 82, 82, 0.295)';
}

searchInput1245.onblur = function(){
    searchIcon1245.style.left = '12px';
    searchInput1245.style.paddingLeft = '36px';
    searchIcon1245.style.animation = 'fadeIn 0.6s 1 linear forwards';
    logo1245.style.display = 'block';
    logoDisappeared1245.style.display = 'none';
    faArrowLeft1245.style.left = '20px';
    navSearchBox1245.style.marginLeft = '12px';
    navSearchBox1245.style.width = '240px';
    search1245.style.boxShadow = 'none';
}


// hien thi va tat hien thi recent search 1245
searchInput1245.onclick = function(){
    navRecentSearch1245.style.display = 'block';
}

window.addEventListener('mouseup', function(event) {
    var isClickInsideElement1245 = navRecentSearch1245.contains(event.target);
    if (!isClickInsideElement1245) {
        navRecentSearch1245.style.display = 'none';
    }
});

//account box 
//account box 1: menu
let accountButton1 = document.getElementsByClassName('account-button')[0];
let accountBox1 = document.getElementsByClassName('account-box')[0];
let accountButton1Status = false;

window.addEventListener('mouseup', function(event) {
    var isClickInsideBox1 = accountBox1.contains(event.target);
    if (!isClickInsideBox1) {
        if(accountButton1.contains(event.target)){
            if(accountButton1Status == false){
                accountBox1.style.display = 'block';
                accountButton1Status = true;
            }else if(accountButton1Status == true){
                accountBox1.style.display = 'none';
                accountButton1Status = false;
            }
        }
        else {
            accountBox1.style.display = 'none';
            accountButton1Status = false;
        }
    }
});

//account box 2: messenger
let accountButton2 = document.getElementsByClassName('account-button')[1];
let accountBox2 = document.getElementsByClassName('account-box')[1];
let accountButton2Status = false;

//nav-menssenger-onclick-choice-box
// let messDetailBox = [...document.getElementsByClassName('messenger-detail-box-wrapper')];   Chu thich: lam sau(1)
// let flag = [false, false, false, false, false, false, false, false, false, false];

window.addEventListener('mouseup', function(event) {
    var isClickInsideBox2 = accountBox2.contains(event.target);
    if (!isClickInsideBox2) {
        if(accountButton2.contains(event.target)){
            if(accountButton2Status == false){
                accountBox2.style.display = 'block';
                accountButton2Status = true;
            }else if(accountButton2Status == true){
                accountBox2.style.display = 'none';
                accountButton2Status = false;
            }
        }
        else {
            accountBox2.style.display = 'none';
            accountButton2Status = false;
            // flag = [false, false, false, false, false, false, false, false, false, false];      Chu thich: lam sau(1) 
        }
    }
});


// messDetailBox.forEach((item, index) =>{
//     item.onclick = function(){
//         if(flag[index] == false){
//             item.style.display = 'block';
//             document.getElementsByClassName('messenger-detail-box-content')[index].style.display = 'block';
//             flag[index] = true;
//         } else {
//             item.style.display = 'none';
//             // item.addEventListener('mouseover', function(){
//             //     item
//             // })
//             document.getElementsByClassName('messenger-detail-box-content')[index].style.display = 'none';
//             document.getElementsByClassName('mes-li-hover')[index].addEventListener('mouseover', function(){
//                 document.getElementsByClassName('messenger-detail-box-content')[index].style.display = 'block';
//             });
//             flag[index] = false;
//         } 
//     }
// })

//account box 3: notifications
let accountButton3 = document.getElementsByClassName('account-button')[2];
let accountBox3 = document.getElementsByClassName('account-box')[2];
let accountButton3Status = false;

window.addEventListener('mouseup', function(event) {
    var isClickInsideBox3 = accountBox3.contains(event.target);
    if (!isClickInsideBox3) {
        if(accountButton3.contains(event.target)){
            if(accountButton3Status == false){
                accountBox3.style.display = 'block';
                accountButton3Status = true;
            }else if(accountButton3Status == true){
                accountBox3.style.display = 'none';
                accountButton3Status = false;
            }
        }
        else {
            accountBox3.style.display = 'none';
            accountButton3Status = false;
        }
    }
});

//account box 4: setting
let accountButton4 = document.getElementsByClassName('account-button')[3];
let accountBox4 = document.getElementsByClassName('account-box')[3];
let accountButton4Status = false;

window.addEventListener('mouseup', function(event) {
    var isClickInsideBox4 = accountBox4.contains(event.target);
    if (!isClickInsideBox4) {
        if(accountButton4.contains(event.target)){
            if(accountButton4Status == false){
                accountBox4.style.display = 'block';
                accountButton4Status = true;
            }else if(accountButton4Status == true){
                accountBox4.style.display = 'none';
                accountButton4Status = false;
            }
        }
        else {
            accountBox4.style.display = 'none';
            accountButton4Status = false;
        }
    }
});

