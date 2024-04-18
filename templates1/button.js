// const dropdowns= document.querySelectorAll'.dropdown');
//
// dropdowns.forEach(dropdown =>{
//
//     const select = dropdown.querySelector('.select');
//     const caret = dropdown.querySelector('.caret');
//     const menu = dropdown.querySelector('.menu');
//     const options = dropdown.querySelectorAll('.menu li');
//     const selected = dropdown.querySelector('.selected');
//
//
// select.addEventListener('click',() =>{
//     select.classList.toggle('select-clicked');
//
//     caret.classList.toggle('caret-rotate');
//
//     menu.classList.toggle('menu-open');
// });
//
// options.forEach(option =>{
//
//     option.addEventListener('click', ()=>{
//
//         selected.innerText = option.innerText;
//
//         select.classList.remove('select-clicked');
//
//         caret.classList.remove('click-rotate');
//
//         menu.classList.remove('menu-open');
//
//         options.forEach(option =>{
//             option.claalist.remove('active');
//         });
//         option.classList.add('active');
//         });
//     });
// });


function authenticate() {
    var code = document.getElementById("code").value;
    var time = document.getElementById("time").value;
    var name = document.getElementById("name").value;
    var teachername = document.getElementById("teachername").value;

    var firstChecked = document.getElementById("first").checked;
    var secondChecked = document.getElementById("second").checked;
    var thirdChecked = document.getElementById("third").checked;
    var fourthChecked = document.getElementById("fourth").checked;

    var checkedCount = 0;
    if (firstChecked) checkedCount++;
    if (secondChecked) checkedCount++;
    if (thirdChecked) checkedCount++;
    if (fourthChecked) checkedCount++;

    if (!firstChecked && !secondChecked && !thirdChecked && !fourthChecked) {
        alert("請至少勾選一個條件");
        return;
    }

    if (firstChecked && code === "") {
        alert("請輸入選課代號");
        return;
    }
    if (secondChecked && time === "None") {
        alert("請選擇星期");
        return;
    }
    if (thirdChecked && name === "") {
        alert("請輸入科目名稱");
        return;
    }
    if (fourthChecked && teachername === "") {
        alert("請輸入開課教師姓名");
        return;
    }

    // // 执行查询操作
    // alert("执行查询操作...");
}

// function auth_time()
// {
//     var time = document.getElementById("time").value;
//
//     if(time != " " && (time > 0 && time < 6) && Number.isInteger(parseInt(time)) == true)
//     {
//         window.location.assign("LoginPage.html");
//         alert("successfully found!!!");
//     }
//     else if(parseInt(time) <= 0 || parseInt(time) >= 6)
//     {
//         alert("請輸入一到五!!!");
//     }
// }
// function auth_name()
// {
//     var name = document.getElementById("name").value;
//
//     if(name != " " && name.charCodeAt() > 255)
//     {
//         window.location.assign("LoginPage.html");
//         alert("successfully found!!!");
//     }
//     else
//     {
//         alert("請輸入中文!!!");
//         return;
//     }
// }
// function auth_teachername()
// {
//     var teachername = document.getElementById("teachername").value;
//
//     if(teachername != " " && teachername.charCodeAt() > 255)
//     {
//         window.location.assign("LoginPage.html");
//         alert("successfully found!!!");
//     }
//     else
//     {
//         alert("請輸入中文!!!");
//         return;
//     }
// }

// var code_btn = document.getElementById("code_btn");


