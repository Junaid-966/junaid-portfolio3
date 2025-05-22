// function showDiv(id){
//     document.getElementById('div1').style.display='none';
//     document.getElementById('div2').style.display='none';
//     document.getElementById('div3').style.display='none';
//     document.getElementById(id).style.display='block';

//     // const contents = document.querySelectorAll('.hide');
//     // contents.forEach(div=> div.classList.remove('active'));
//     // document.getElementById(id).classList.add('active');
// }
function showDiv(divId){
    document.querySelectorAll('.hide').forEach(div => {
        div.style.display ='none';
    });
    document.getElementById(divId).style.display='block';
}
