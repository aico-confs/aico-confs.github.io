
// document.querySelector(".pic").onclick = function(){
//         big_img.src = document.querySelector(".pic"+" img").src;
//         big.style.display = "block";
// }
function fileExists(url){
    let isExists;
    $.ajax({
        url:url,
        async:false,
        type:'HEAD',
        error:function(){
            isExists=0;
        },
        success:function(){
            isExists=1;
        }
    });
    if(isExists==1){
        return true;
    }
    else{
        return false;
    }
}


let big = document.querySelector(".big")
let big_img = document.querySelector(".big .img img")
big.onclick = function(){
    big.style.display = "none";
    big_img.src = "";
}



$('.pic').click(function()
    {

    let date = document.getElementById('date').getAttribute('value').split('-');
    date[1] = date[1].padStart(2,'0');
    date[2] = date[2].padStart(2,'0');    
    if(fileExists("../img/"+date.join('')+".jpg")){      
        big_img.src = document.querySelector(".pic"+" img").src;
        big.style.display = "block";
        }
    }
       
);