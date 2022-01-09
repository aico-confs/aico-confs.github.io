import './trade.js'
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

   
// 跳過周末
function checkday(dateTime, num=-1){
    while (!(dateTime.getDay()>0 && dateTime.getDay()<6)) {
        let date = dateTime.setDate(dateTime.getDate()+num);
        dateTime = new Date(date);
        }
        return dateTime.toLocaleDateString().split('/');
        }
// 更新前端
function updateDate(date){
    // ex：date = [2021,2,3];
    // 更新星期幾
    let dateTime = new Date(date);
    let day = ['日', '一', '二', '三', '四', '五', '六'][dateTime.getDay()];
    let year = date[0];
    // 補零以符合格式
    date[1] = date[1].padStart(2,'0');
    date[2] = date[2].padStart(2,'0');
    $("#datetxt").text('  日期：' + date.join('/') +'  (週' + day+')');
    // 更新圖片   
    if(fileExists("../img/"+date.join('')+".jpg")){      
        $("#masa_msg").attr("style" , "background-image: url('');");
        $("#img").attr("src" , "../img/"+date.join('')+".jpg");
    }else{
        // alertify.alert("沒有這天的檢討單");
        alertify.error("沒有這天的檢討單");
        $("#masa_msg").attr("style" , "background-image: url('../img/logo.png');");
        $("#img").attr("src" , "");
        
    }
    // 更新input
    $("#date").attr("value" , date.join('-'));
    // 更新input(視覺上)
    $("#date").val(date.join('-'));
    // 更新基本資訊及檢討單
    let all_title=document.querySelectorAll('.title h3 .fas');
    let ini_title = [' 樂高框情況：',' 盤型：','  跳空框：']
    let table_html=document.getElementById('tablepage');
    //reset
    all_title.forEach(function(x) {
            x.innerHTML = ini_title[0];
            ini_title.shift();
          });
    table_html.innerHTML = '';
    try{  
        let jsondata = getRequest(year,date[1]+date[2]);
        all_title[0].innerHTML +=jsondata['min-block'] + ' 點';
        all_title[1].innerHTML +=(jsondata['trend'] ? '趨勢':'盤整') + (jsondata['middle'] ? '上衝下洗回中間':'' );
        all_title[2].innerHTML +=(jsondata['jump-block']>0 ? '往上開 '+jsondata['jump-block']+' 點 ':'往下開 '+Math.abs(jsondata['jump-block'])+' 點 ');
        updateTable(jsondata);
    }catch{
        ;
    }
    // 更新檢討單
    
    
    


}
// 按鈕事件
function BtnupdateDate(num){
    // 日期增減
    let date = document.getElementById('date').getAttribute('value');
    let dateTime = new Date(date);
    // 日期調整
    dateTime.setDate(dateTime.getDate()+num);
    // 跳過週末的函式
    date = checkday(dateTime, num);

    updateDate(date);

}

// 刷新網頁時，更新成離今天最近的工作日日期
$(document).ready(function(){
    // let date = document.getElementById('date').getAttribute('value').split('-');
    // 跳過週末的函式
    let date = checkday(new Date());
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

$('#date').on('input', function(e) {
    let date = $('#date').val().split('-');
    updateDate(date);
    // console.log(e.target);//不要刪掉!這值得學習
  });
