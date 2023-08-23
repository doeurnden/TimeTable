<template>
    <div class="contianer">
        <nav class="navbar">
            <div class="course">
                <p><i class="icon pi pi-book"></i></p>
                <p>course</p>
            </div>
            <div class="room">
                <p><i class="icon pi pi-building"></i></p>
                <p>room</p>
            </div>
            <div class="lecturer">
                <p><i class="icon pi pi-users"></i></p>
                <p>lecturer</p>
            </div>
        </nav>
        <div class="sub-container">
            <div class="search">
                <input type="text" placeholder="search subject">
            </div>
            <div class="data">
                <div class="items">
                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>Internet Programming</div>
                            <div><button>Unasigned</button></div>
                            <div>TP : 16 H</div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>Internet Programming</div>
                            <div><button>Unasigned</button></div>
                            <div> TP : 16 H</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'primeicons/primeicons.css';
</script>

<style scoped>
.contianer {
    width: 20%;
    height: 100vh;
    background-color: rgb(190, 190, 190);
}
.contianer .navbar{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: antiquewhite;
}
.contianer .navbar .course, .room, .lecturer{
    display: flex;
    gap: .5rem;
}
.contianer .sub-container{
    width: 100%;
    height: 90%;
    /* background-color: aqua; */
}
.contianer .sub-container .search{
    width: 100%;
    height: 10%;
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
}
.contianer .sub-container .search input{
    width: 80%;
}
.contianer .sub-container .data{
    width: 100%;
    height: 90%;
}
.contianer .sub-container .data .items{
    width: 100%;
    height: 100%;
    /* padding: 1rem; */
    /* margin: 1rem; */
}
.contianer .sub-container .data .items .item{
    height: 15%;
    width: 100%;
    background-color: rgb(13, 0, 255);
}
.contianer .sub-container .data .items .item .icons{
    height: 30%;
    width: 100%;
    /* background-color: aliceblue; */
    /* padding: 0;
    margin: 0; */
    display: flex;
    align-items: center;
}
.contianer .sub-container .data .items .item .course-info{
    height: 70%;
    width: 100%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>