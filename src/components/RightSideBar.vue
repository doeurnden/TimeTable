<template>
    <div class="contianer">
        <nav class="navbar">
            <div class="course">course</div>
            <div class="room">room</div>
            <div class="lecturer">lecturer</div>
        </nav>
        <div class="sub-container">
            <div class="search">
                <input type="text" placeholder="search subject">
            </div>
            <div class="data">
                <div class="items">
                    <div class="item">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contianer {
    width: 20rem;
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
</style>