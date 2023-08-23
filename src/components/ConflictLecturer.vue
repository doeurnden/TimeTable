<template>
    <div class="container">
        <div class="header">
            <span class="icon">
                <div class="warning-image">
                    <img src="../assets/warning.png" alt="warning-image-icon" title="warning alert">
                </div>
                <h1 class="Infor">Conflict Information !</h1>
                <!-- <img class="error-image" src="../assets/error.png" alt=""> -->
                <button title="click here" type="button">x</button>
                <font-awesome-icon :icon="['fas', 'code-merge']" />
                
            </span>
        </div>
        <div class="content">
            <div class="border">
                <div class="lecturer"> 
                        <img class="person-image" src="../assets/person.png" alt="lecturer-icon-image" title="lecturer">  
                        <img class="merge" src="../assets/merge.png" alt="merge-icon" title="merge Lecturer"> 
                        <p>Lecturer</p>   
                </div>
                <div class="dept">
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
        height: auto;
        margin: 0px auto;
        /* width: 50%;
        height: 260px;
        background-color: white;
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
    .icon{
        display: flex;
    }
    .Infor{
        padding-left: 2px;
        padding-top: 5px;
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
        width: 6%;
        font-size: 25px;
        float: right;
        padding-top: 9px;
        padding-left: 20PX;
        font-family: 'Roboto', sans-serif;
        color: rgb(201, 190, 190);
    }
   
    .content{
        height:210px ;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e8e8e8; 
        border-radius: 3px;
    }
    
    .border{
        width: 90%;
        height: 180px;
        background-color: white; 
        border: 1px solid #e8e8e8;
        border-radius: 3px;
        /* padding-bottom:5px; */
        margin: 0px auto;
    }
    .lecturer{
        width: 90%;
        background-color: #ffffff;
        height: 50px;
        /* text-align: center; */
        margin-left: 15px; 
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
    .dept{
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
        margin-top: 14px;
        margin-left: 18px;
        padding-left: 10px;
        padding-top: 14px;
        display: flex;
    }
    .week{
        width: 40%;
        background-color: #3279B7; 
        margin-left: 80px;
        margin-bottom: 15px;
        border-radius: 10px;
        padding-left: 4px;
        color: white;
        /* margin: 0px auto; */
    }

</style>