<template>
    <div class="container">
        <div class="header">
            <span class="icon">
                <div class="warning-image">
                    <img src="../assets/warning.png" alt="warning-icon" title="warning alert">
                </div>
                <h1 class="Infor">Conflict Information !</h1>
                <!-- <img class="error-image" src="../assets/error.png" alt=""> -->
                <!-- <p class="error-image">x</p> -->
                <button title="click here" type="button">x</button>
                <font-awesome-icon :icon="['fas', 'code-merge']" />
                
            </span>
        </div>
        <div class="sub-container">
            <div class="blog-room">
                <p class="room">Room
                    <img class="room-image" src="../assets/room.png" alt="room-image-icon" title="room">
                </p>
                <div class="bg-gray">
                    <div class="detail">
                        <h3>>> GCA-I3</h3>
                        <div class="week">
                            <p>Group:A, Week 1</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog-lecturer">
                <p class="lecturer">Lecturer
                    <img class="person-image" src="../assets/person.png" alt="person-image-icon" title="Lecturer">  
                    <img class="merge" src="../assets/merge.png" alt="merge-icon" title="merge Lecturer"> 
                </p>
                <div class="bg-gray">
                    <div class="detail">
                        <h3>>> GCA-I3</h3>
                        <div class="week">
                            <p>Group:A, Week 1</p>
                        </div>
                    </div>
                </div>
            </div>     
     </div>
 </div>
   
</template>

<script>


</script>

<style scoped>

    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }
    .container{
        width: 30%;
        height: 450px;
        background-color: #ffffff;
        margin: 0px auto ;
    }
    .header{
        height: 50px;
        background-color: #dd4c39;
        color: white;
        /* text-align: center;
        margin-bottom: 5px; */
    }
    .icon{
        display: flex;
    }
    .Infor{
        padding-left: 2px;
        padding-top: 5px;
    }
    .warning-image{
        width: 30px;
        height: 40px;
        float: left;
        margin-left: 40px;
        padding-top: 11px;
        margin-right: 5px;
        /* padding-right: 2px; */
    }
    .warning-image img{
        width: 100%;
        height: 100%;

        
    }
    .error-image{
        width:10px;
        font-size: 25px;
        float: right;
        padding-top: 9px;
        padding-left: 20PX;
        font-family: 'Roboto', sans-serif;
        color: rgb(194, 190, 201);
    }
    button{
        width: 5%;
        height: 5%;
        margin-top: 10px;
        margin-left: 25px;
        color: rgb(201, 190, 190);
        background-color:#dd4c39 ;
        font-size: 25px;
        border: none;
        /* float: right; */

    }

    .sub-container{
        height: 400px;
        border: 1px solid #e8e8e8;
        border-radius: 3px;
    }
    .blog-room{
        width: 90%;
        height:190px ;
        background-color: #ffffff;
        margin: 0px auto;
        border: 1px solid #e8e8e8;
        margin-top: 10px;
        border-radius: 3px;
    }
    .blog-lecturer{
        width: 90%;
        height: 190px;
        background-color: #ffffff;
        margin: 0px auto;
        border: 1px solid #e8e8e8;
        border-radius: 3px;
        
    }
    .room{
        width: 90%;
        height: 50px;
        background-color: #ffffff;
        margin: 0px auto;
        /* padding-top: 10px; */
        font-size: 20px;
        padding-top: 13px;
        display: block;
        font-weight: 10px;
        text-indent: 5px;
    }
    .room-image{
        width: 6%;
        float: left;
        
    }
    .bg-gray{
        width: 90%;
        height: 115px;
        background-color: #f1f1f1;
        border: 1px solid #e8e8e8;
        margin: 0px auto;
        border-radius: 3px;
        /* margin-bottom: 20px; */
        /* display: flex; */
    }
    .lecturer{
        width: 90%;
        height: 50px;
        background-color: #ffffff;
        margin: 0px auto;
        font-size: 20px;
        padding-top: 13px;
        display: block;
        font-weight: 10px;
        text-indent: 5px;
    }
    .person-image{
        /* padding-top: 5px; */
        width: 7%;
        float: left;
    }
    .merge{
        /* padding-top: 5px; */
        width: 7%;
        float: right;
        background-color: #02B7E2;
    }
    .detail{
        width: 85%;
        height: 50px;
        background-color: #ffffff;
        margin: 0px auto;
        margin-top: 30px;
        padding-top: 15px;
        padding-left: 10px;
        /* margin-top: 14px;
        margin-left: 18px;
        padding-left: 10px;
        padding-top: 20px; */
        display: flex;
    }
    .week{
        width: 40%;
        height: 22px;
        background-color: #3279B7; 
        margin-left: 80px;
        margin-bottom: 15px;
        border-radius: 10px;
        padding-left: 4px;
        color: white;
        /* margin-bottom: 10px; */
        /* margin: 0px auto; */
    }


</style>
    

<!-- <style scoped>
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }
    .container{
        width: 25%;
        height: 450px;
        margin: 0px auto;
        
        /* background-color: white;
        border: 1px solid #e8e8e8; 
        border-radius: 3px;
        box-shadow: #dd4c39; */
    }
    .header{
        height: 50px;
        background-color: #dd4c39;
        text-align: center;
        color: white;
    }
    .sub-container{
       height: 500px;
        background-color: white;
        /* display: flex;
        align-items: center;
        justify-content: center; */
        border: 1px solid #e8e8e8; 
        /* border-radius: 3px; */
        margin-left: 17px;
    }
   
    .blog-room{
        width: 90%;
        height: 200px;
        background-color: white; 
        border: 1px solid #e8e8e8;
        /* border-radius: 3px;    */
        margin-left: 17px;
        margin-top: 10px;   
    }
    .header1{
        width: 90%;
        background-color: #ffffff;
        height: 50px;
        /* text-align: center; */
        font-weight: bolder;
        margin-left: 15px;
        padding-top: 4px;
        
    }
    .department{
        width: 93%;
        height: 115px;
        background-color: #f1f1f1;
        /* margin-top: 10px; */
        padding-top: 10px;
        border-width: 3px;
        margin-left: 11px;
    }
    .detail{
        background-color: #ffffff;
        height: 50px;
        width: 85%;
        margin-top: 24px;
        margin-left: 18px;
        padding-left: 10px;
        padding-top: 14px;
    }
   
  
    /* .blog-lecturer{
        height:200px ;
        background-color: white;
        border: 1px solid #e8e8e8; 
        border-radius: 3px;
    }
     */
    
    /* .detail{
        background-color: #ffffff;
        height: 50px;
        width: 85%;
        margin-top: 14px;
        margin-left: 18px;
        padding-left: 10px;
    } */
    
    

</style> -->