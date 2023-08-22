<template>
    <div class="container">
        <div class="header">
            <h1>Conflict Information !</h1>
        </div>
        <div class="body">
            <div class="inside">
                <div class="top"> 
                    <h2>Lecturer</h2>
                </div>
                
                <div class="dept">
                    <div class="bg">
                        <h3>> GCA-I3</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>


</script>
    

<style scoped>
    .container{
        float:right;
        width: 50%;
        height: 260px;
        background-color: white;
        border: 1px solid #e8e8e8; 
        border-radius: 3px;
        box-shadow: #dd4c39;
    }
    .body{
        height:210px ;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e8e8e8; 
        border-radius: 3px;
    }
    .header{
        height: 50px;
        background-color: #dd4c39;
        text-align: center;
        color: white;
    }
    .inside{
        width: 90%;
        height: 180px;
        background-color: white; 
        border: 1px solid #e8e8e8;
        border-radius: 3px;
        
    }
    .top{
        width: 90%;
        background-color: #ffffff;
        height: 50px;
        /* text-align: center; */
        font-weight: bolder;
        margin-left: 15px;
        padding-top: 4px;
        
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
    .bg{
        background-color: #ffffff;
        height: 50px;
        width: 85%;
        margin-top: 14px;
        margin-left: 18px;
        padding-left: 10px;
    }

</style>