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


function auth_code()
{
    var code = document.getElementById("code").value;

    if(code != " " && code > 999)
    {
        window.location.assign("LoginPage.html");
        alert("successfully found!!!");
    }
        else
    {
        alert("請輸入正確格式");
        return;
    }
}
function auth_time()
{
    var time = document.getElementById("time").value;

    if(time != " " && (time > 0 && time < 6) && Number.isInteger(parseInt(time)) == true)
    {
        window.location.assign("LoginPage.html");
        alert("successfully found!!!");
    }
    else if(parseInt(time) <= 0 || parseInt(time) >= 6)
    {
        alert("請輸入一到五!!!");
    }
}
function auth_name()
{
    var name = document.getElementById("name").value;

    if(name != " " && name.charCodeAt() > 255)
    {
        window.location.assign("LoginPage.html");
        alert("successfully found!!!");
    }
    else
    {
        alert("請輸入中文!!!");
        return;
    }
}
function auth_teachername()
{
    var teachername = document.getElementById("teachername").value;

    if(teachername != " " && teachername.charCodeAt() > 255)
    {
        window.location.assign("LoginPage.html");
        alert("successfully found!!!");
    }
    else
    {
        alert("請輸入中文!!!");
        return;
    }
}

// var code_btn = document.getElementById("code_btn");


