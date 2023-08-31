<template>
    <div class="contianer">
        <nav class="navbar">
            <button class="navbars course" @click="showInfo(1)" :class="{ active: activeButton === 1 }">
                <span><i class="icon pi pi-book"></i>Course</span>
            </button>
            <button class="navbars room" @click="showInfo(2)" :class="{ active: activeButton === 2 }">
                <span><i class="icon pi pi-building"></i>Room</span>
            </button>
            <button class="navbars lecturer" @click="showInfo(3)" :class="{ active: activeButton === 3 }">
                <span><i class="icon pi pi-users"></i>Lecturer</span>
            </button>
        </nav>
        <!-- course  -->
        <div class="sub-container" v-if="activeButton === 1">
            <div class="search">
                <input type="text" placeholder="Search subject ..">z
                <i class="icon pi pi-search"></i>
            </div>
            <div class="data">
                <div class="items">
                    <div class="item" v-for="course in courses" :key="course.id">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>
                                <h1>{{ course.name_en }}</h1>
                            </div>
                            <div class="btn"><button>Unsigned</button></div>
                            <div>
                                <h1>TP : 16 H</h1>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>
                                <h1>Internet Programming</h1>
                            </div>
                            <div class="btn"><button>Unsigned</button></div>
                            <div>
                                <h1>TP : 16 H</h1>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>
                                <h1>Internet Programming</h1>
                            </div>
                            <div class="btn"><button>Unsigned</button></div>
                            <div>
                                <h1>TP : 16 H</h1>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>
                                <h1>Internet Programming</h1>
                            </div>
                            <div class="btn"><button>Unsigned</button></div>
                            <div>
                                <h1>TP : 16 H</h1>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>
                                <h1>Internet Programming</h1>
                            </div>
                            <div class="btn"><button>Unsigned</button></div>
                            <div>
                                <h1>TP : 16 H</h1>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>
                                <h1>Internet Programming</h1>
                            </div>
                            <div class="btn"><button>Unsigned</button></div>
                            <div>
                                <h1>TP : 16 H</h1>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>
                                <h1>Internet Programming</h1>
                            </div>
                            <div class="btn"><button>Unsigned</button></div>
                            <div>
                                <h1>TP : 16 H</h1>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>
                                <h1>Internet Programming</h1>
                            </div>
                            <div class="btn"><button>Unsigned</button></div>
                            <div>
                                <h1>TP : 16 H</h1>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>
                                <h1>Internet Programming</h1>
                            </div>
                            <div class="btn"><button>Unsigned</button></div>
                            <div>
                                <h1>TP : 16 H</h1>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>
                                <h1>Internet Programming</h1>
                            </div>
                            <div class="btn"><button>Unsigned</button></div>
                            <div>
                                <h1>TP : 16 H</h1>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>
                                <h1>Internet Programming</h1>
                            </div>
                            <div class="btn"><button>Unsigned</button></div>
                            <div>
                                <h1>TP : 16 H</h1>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>
                                <h1>Internet Programming</h1>
                            </div>
                            <div class="btn"><button>Unsigned</button></div>
                            <div>
                                <h1>TP : 16 H</h1>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>
                                <h1>Internet Programming</h1>
                            </div>
                            <div class="btn"><button>Unsigned</button></div>
                            <div>
                                <h1>TP : 16 H</h1>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>
                                <h1>Internet Programming</h1>
                            </div>
                            <div class="btn"><button>Unsigned</button></div>
                            <div>
                                <h1>TP : 16 H</h1>
                            </div>
                        </div>
                    </div> -->

                </div>
            </div>
        </div>
        <!-- room  -->
        <div class="sub-container" v-if="activeButton === 2">
            <div class="search">
                <input type="text" placeholder="Search room ..">
                <i class="icon pi pi-search"></i>
            </div>
            <div class="data">
                <div class="items">
                    <div class="item-room" v-for="room in rooms" :key="room.id">
                        <div class="room-number">
                            <h3>{{ room.building.code }} - {{ room.name }}</h3>
                        </div>
                        <div class="room-name">
                            <h4>{{ room.room_type.name }}</h4>
                            <!-- <p>{{ room.nb_desk }} Desk</p> -->
                            <p>
                                <span v-if="room.nb_desk === null">N/A</span>
                                <span v-else>{{ room.nb_desk }}</span>
                                Desk
                            </p>
                            <p>
                                <span v-if="room.nb_chair === null">N/A</span>
                                <span v-else>{{ room.nb_chair }}</span>
                                Chair
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- lecturer -->
        <div class="sub-container" v-if="activeButton === 3">
            <div class="search">
                <input type="text" placeholder="Search lecturer ..">
                <i class="icon pi pi-search"></i>
            </div>
            <div class="data">
                <div class="items">
                    <div class="item-lecturer" v-for="lecturer in lecturers" :key="lecturer.id">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>
                                <span v-if="lecturer.id_card === null">No ID Card</span>
                                <span v-else>{{ lecturer.id_card }}</span>
                                | {{ lecturer.name_latin }}
                            </h4>
                            <p>{{ lecturer.name_latin }}</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>{{ lecturer.department.code }}</div>
                                <div><i class="icon pi pi-user"></i>{{ lecturer.gender.code }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>{{ test }}</div>
</template>

<script>

import 'primeicons/primeicons.css';
import axios from 'axios';

export default {
    data() {
        return {
            activeButton: 1,
            rooms: [],
            lecturers: [],
            courses: [],
            // test: VUE_APP_ROOM
        }
    },
    methods: {
        showInfo(buttonNumber) {
            this.activeButton = buttonNumber;
        }
    },
    mounted() {
        axios.get(process.env.VUE_APP_ROOM)
            .then(response => {
                this.rooms = response.data;
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
        axios.get(process.env.VUE_APP_LECTURER)
            .then(response => {
                this.lecturers = response.data.data;
            });
        axios.get(process.env.VUE_APP_COURSE)
            .then(response => this.courses = response.data);
    }
}
</script>

<style scoped>
/* navbar button color change */
button.navbars.course.active,
button.navbars.room.active,
button.navbars.lecturer.active {
    background-color: #0c356a;
}

/* container */
.contianer {
    width: 20%;
    height: 94.6vh;
    /* background-color: rgb(190, 190, 190); */
    font-family: Arial, Helvetica, sans-serif;
    padding-right: 7px;
}

/* navbar */
.contianer .navbar {
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    /* background-color: antiquewhite; */
    padding-bottom: 5px;
    /* padding-left: 5%; */
    position: relative;
}

.contianer .navbar .navbars {
    width: 84px;
    height: 35px;
    border: none;
    border-radius: 5px;
    background-color: #3aa6b9;
    color: white;
    position: absolute;
    transition: all 0.6s;
}

.contianer .navbar .navbars:nth-child(1) {
    top: 17px;
}

.contianer .navbar .navbars:nth-child(2) {
    top: 17px;
    left: 92px;
}

.contianer .navbar .navbars:nth-child(3) {
    top: 17px;
    left: 184px;
}

.contianer .navbar .navbars:hover {
    background-color: #0c356a;
    transition: all 0.6s;
}

.contianer .navbar .navbars span {
    font-size: 15px;
}

.contianer .navbar .navbars span .icon {
    padding-right: 9px;
}

/* .sub-container */
.contianer .sub-container {
    width: 100%;
    height: 95%;
    /* background-color: aqua; */
}

/* .search */
.contianer .sub-container .search {
    width: 100%;
    height: 35px;
    /* background-color: aqua; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    margin-top: 35px;
    margin-bottom: 10px;
    outline: 0px;
}

.contianer .sub-container .search input {
    width: 100%;
    padding: .4rem;
    outline: none;
    position: relative;
    font-size: 16px;
    /* background-color: #EEEEEE; */
    border: 1px solid #B2B2B2;
    border-radius: 3px;
}

.contianer .sub-container .search input::placeholder {
    font-size: 15px;
    padding-left: 4px;
    font-weight: medium;
    color: #9DB2BF;
}

.contianer .sub-container .search .icon {
    position: absolute;
    right: 0.45rem;
    width: 43px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #35A29F;
    border-radius: 3px;
    color: white;
    transition: all 0.6s;
}

.contianer .sub-container .search .icon:hover {
    cursor: pointer;
    background-color: #3E7C17;
    transition: all 0.6s;
}

.contianer .sub-container .data {
    width: 100%;
    height: 92.4%;
    background-color: rgb(255, 255, 255);
    border: 1px solid #B2B2B2;
    border-radius: 3px;
}

.contianer .sub-container .data .items {
    width: 95%;
    height: 95%;
    background-color: #ece8e8;
    /* padding: 5%; */
    margin: 3%;
    overflow-y: scroll;
    border-radius: 3px;
}

/* item course  */
.contianer .sub-container .data .items .item {
    height: 80px;
    /* width: 100%; */
    background-color: #ffffff;
    /* padding: 5%; */
    margin: 4.5%;
    transition: all 0.4s;
    border-left: 2px solid #ff0000;
    border-radius: 3px;
}

.contianer .sub-container .data .items .item:hover {
    background-color: #A7ECEE;
    box-shadow: -2px 2px 6px -4px rgba(0, 0, 0, 0.79);
    cursor: all-scroll;
    transition: all 0.4s;
}

.contianer .sub-container .data .items .item .icons {
    width: 100%;
    height: 20%;
    /* background-color: aliceblue; */
    font-size: 12px;
    display: flex;
    align-items: center;
    padding: 12px 0px 12px 6px;
}

.contianer .sub-container .data .items .item .course-info {
    height: 70%;
    width: 100%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 5%;
    border-radius: 3px;
}

.contianer .sub-container .data .items .item .course-info h1 {
    font-size: 15px;
}

.contianer .sub-container .data .items .item .course-info .btn button {
    color: white;
    background-color: #ff0000;
    border: none;
    border-radius: 5px;
    padding: .2rem;
    font-size: 12px;
}

/* item-room */
.contianer .sub-container .data .items .item-room {
    height: 83px;
    background-color: #ffffff;
    margin: 5%;
    /* border-left: 2px solid #ff0000; */
    display: flex;
    transition: all 0.4s;
    border-radius: 3px;
}

.contianer .sub-container .data .items .item-room:hover {
    background-color: #ECF2FF;
    box-shadow: -2px 2px 6px -4px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    transition: all 0.4s;
}

.contianer .sub-container .data .items .item-room .room-number {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #71dcfe;
    color: white;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}

.contianer .sub-container .data .items .item-room .room-number h4 {
    font-size: 21px;
}

.contianer .sub-container .data .items .item-room .room-name {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-top: 0.45rem;
    padding-left: .5rem;
}

.contianer .sub-container .data .items .item-room .room-name h3 {
    font-size: 18px;
    padding-bottom: 4.60px;
}

.contianer .sub-container .data .items .item-room .room-name p {
    font-size: 12px;
}

/* item-lecturer */
.contianer .sub-container .data .items .item-lecturer {
    height: 85px;
    background-color: #ffffff;
    border-left: 2px solid #002aff;
    border-radius: 3px;
    display: flex;
    margin: 4.5%;
    transition: all 0.5s;
}

.contianer .sub-container .data .items .item-lecturer:hover {
    background-color: #ECF2FF;
    box-shadow: -2px 2px 6px -4px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    transition: all 0.5s;
}

.contianer .sub-container .data .items .item-lecturer .icon {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
}

.contianer .sub-container .data .items .item-lecturer .icon img {
    width: 100%;
    object-fit: cover;
}

.contianer .sub-container .data .items .item-lecturer .info {
    width: 80%;
    padding-top: 0.57rem;
    padding-left: .5rem;
}

.contianer .sub-container .data .items .item-lecturer .info h4 {
    font-size: 16px;
    padding-bottom: 5px;
}

.contianer .sub-container .data .items .item-lecturer .info p {
    font-size: 14px;
}

.contianer .sub-container .data .items .item-lecturer .info .depart-gen {
    width: 100%;
    display: flex;
    /* gap: .5rem; */
}

.contianer .sub-container .data .items .item-lecturer .info .depart-gen div {
    width: 50%;
    display: flex;
    font-size: 12px;
    padding-top: 9.3px;
}
</style>