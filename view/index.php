<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 自己設計的CSS -->
    <link rel="stylesheet" href="../css/style.css">
    <!-- LOGO用 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <!-- alertify用 -->  
	<script src="../js/alertify.min.js"></script>
    <link rel="stylesheet" href="../css/alertify/alertify.core.css" />
    <link rel="stylesheet" href="../css/alertify/alertify.default.css" id="toggleCSS" />
    <!-- 定位用 -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    
    <title>艾柯的交易日記</title>
</head>
<body>

    <section style="min-height: 100vh; "><!-- 這裡的style是為了不和alertify打架 -->
    <div  class="big">
        <div class="img">
        <img  src="" alt="">
        </div>
    </div>
    <div class="topbar">
        <button id="back" class="back">back</button>
        <div class="search">
            <label >
                <div  class="icon" ><i class="fas fa-search-dollar"></i></div>
                <?php if(isset($_GET['date'])){
                	$date = $_GET['date'];
                }?>
	            <input id="date" type="date"  value=<?php echo $date;?>/>
                <!-- <li style="list-style:none;"><ion-icon name="search-outline"></ion-icon></li> -->
                
                
                
            </label>
        </div>
        <button id="next" class="button">next</button>
       
    </div>
    

    <div class="container" >

        <div class="details" >
           
         
            <div class= "title" >
                <!-- 日期當大標題 -->
                <h2 ><i id='datetxt' class="far fa-calendar-alt"></i></h2>
                <hr>
                
                <h3>
                    <i class="fas fa-network-wired"></i>
                </h3>
                  
                <h3>
                    <i class="fas fa-wave-square"></i>
                    
                </h3>

                <h3>
                    <i class="fas fa-expand"></i>
                    
                </h3>
            </div>
            <div id="tablepage" class="tablepage"  >
                <!-- 檢討單的地方 -->
    
    
            </div>
                   
           
        </div>
        <!-- 圖片 style="border:5px #FFAC55 solid"-->
        <div id='masa_msg' class="pic">
             <img loading="eager" id="img"   >
             <!-- <img src="./img/logo.png" > -->
        </div>
    </div>
 </section>
<script src="../js/msg.js"> </script><!-- 需在最前面 -->
<script src="../js/bigimg.js"> </script>
<script  src="../js/trade.js"> </script>
<script type="module" src="../js/date.js"></script>


        
   

</body>
</html>