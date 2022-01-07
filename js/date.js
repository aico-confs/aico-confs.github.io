// 確認檔案是否存在
function fileExists(url){
    var isExists;
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

   

function checkday(dateTime, num=-1){
    while (!(dateTime.getDay()>0 && dateTime.getDay()<6)) {
        let date = dateTime.setDate(dateTime.getDate()+num);
        dateTime = new Date(date);
        }
        return dateTime.toLocaleDateString().split('/');
        }
function updateDate(date){
    // ex：date = [2021,2,3];
    // 更新星期幾
    let dateTime = new Date(date);
    day = ['日', '一', '二', '三', '四', '五', '六'][dateTime.getDay()];
    // 補零以符合格式
    date[1] = date[1].padStart(2,'0');
    date[2] = date[2].padStart(2,'0');
    $("#datetxt").text('  日期：' + date.join('/') +'  (週' + day+')');
    // 更新圖片
    $("#img").attr("src" , "../img/"+date.join('')+".jpg");
    if(!(fileExists("../img/"+date.join('')+".jpg"))){
        alertify.alert("沒有這天的檢討單");
    }
    // 更新input
    $("#date").attr("value" , date.join('-'));
    // 更新input(視覺上)
    $("#date").val(date.join('-'));

}
function BtnupdateDate(num){
    // 日期增減
    let date = document.getElementById('date').getAttribute('value');
    let dateTime = new Date(date);
    date = dateTime.setDate(dateTime.getDate()+num);
    dateTime = new Date(date);
    // 跳過週末的函式
    date = checkday(dateTime, num);

    updateDate(date);

}
// 首次更新日期

$(document).ready(function(){
    // let date = document.getElementById('date').getAttribute('value').split('-');
    // 跳過週末的函式
    date = checkday(new Date());
    updateDate(date);
    }
);

// 按鈕更新日期
$('#back').click(function()
{
    BtnupdateDate(-1);
}
       
);
$('#next').click(function()
{
    BtnupdateDate(1);
}
       
);        

// Firefox, Google Chrome, Opera, Safari, Internet Explorer from version 9
function OnInput (event) {

    let  date =  event.target.value.split('-');
    updateDate(date);
    }
    // Internet Explorer
    function OnPropChanged (event) {
    if (event.propertyName.toLowerCase () == "value") {
    let  date =  event.srcElement.value.split('-');
    updateDate(date);
        }
}

