// toggle.classList.add('active');

// AJAX
// const endpoint = 'https://api.kcg.gov.tw/api/service/get/93da9fbe-2b80-439a-aec7-276366f7bfea'; 
const endpoint = '../tradingdata/history.json'; 
const request = new XMLHttpRequest();
let all_data;
request.open('GET', endpoint,true);
request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
request.send(null); 
request.addEventListener('load', getRequest); 
function getRequest(year=null , date=null) {
    // ex：str:year=2022, str:date=0107
    // 可以將註解拿掉查看
    //console.log(request);
    all_data = JSON.parse(request.responseText);
    // for (var i in obj) {
    //     result += obj_name + "." + i + " = " + obj[i] + "<br>";
    //   }
    // [1, 2, 3].forEach(function(x) {
    //     sum += x;
    //   });
    if (year && date){
        return all_data[year][date];
    }
    
}

function updateTable(day_data){
    let go ;
    let out ;
    let table_html=document.getElementById('tablepage');
    let result = '' ;
    let order;

    for(let i=0 ; i <day_data['trade'].length ; i++){
        go = [
            '<td>開盤法</td>',//0
            '<td>力道歸還法</td>',//1
            '<td>區間突破法</td>',//2
            '<td>基本型態法</td>',//3
            '<td>純訊號後回測</td>',//4
            '<td>短軌</td>',//5
            '<td>反向轉勢單</td>',//6
            '<td>續走單</td>',//7
        ];
            out = [ 
                '<td>樂高停利法</td>',//0
                '<td>力道歸還法</td>',//1
                '<td>中線停利法</td>',//2
                '<td>基本型態法</td>',//3
                '<td>強勢停利法</td>',//4
                '<td>短軌</td>',//5
                '<td>轉勢K</td>',//6
                '<td>6(3)點流</td>',//7
            ];
        result += '<h4>第'+(i+1)+'單</h4>\
                    \n\t<div class="kind">\
                        \n\t<table>\n\t';
        if (day_data['trade'][i][0] == 'long'){
            order = [['long', '多'],['short', '空']];
        }
        else{
            order = [['short', '空'],['long', '多']];
        }
        // 進出單是哪種方式
        let go_numlist = day_data['trade'][i][1];
        let out_numlist = day_data['trade'][i][2];
        // 進單
        result += '<tr class='+order[0][0]+'>\n\t';
        result +='<td>'+order[0][1]+'</td>\n\t';
        go_numlist.forEach(function(go_num) {
                go[go_num] = go[go_num].replace(/<.*?td.*?>/,'<td class="active">');//選擇特定方式active
              });
        
        result +=go.join('\n\t');
        result +='\n\t</tr>\n\t';
        // 補單
        result += '<tr class='+order[1][0]+'>\n\t';
        result +='<td>'+order[1][1]+'</td>\n\t';
        out_numlist.forEach(function(out_num) {
            out[out_num] = out[out_num].replace(/<.*?td.*?>/,'<td class="active">');
          });
        result +=out.join('\n\t');
        result +='\n\t</tr>\n\t';

        result +='</table>\n\t</div>'; 
        // 這次的單子結束

        }
    // 所有的單子結束
    table_html.innerHTML = result;

}