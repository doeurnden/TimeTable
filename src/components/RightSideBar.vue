<template>
    <div class="contianer">
        <nav class="navbar">
            <button class="navbars course" @click="showInfo(1)" :class="{ active: activeButton === 1}">
                <span><i class="icon pi pi-book" ></i>Course</span>
            </button>
            <button class="navbars room" @click="showInfo(2)" :class="{ active: activeButton === 2}">
                <span><i class="icon pi pi-building"></i>Room</span>
            </button>
            <button class="navbars lecturer" @click="showInfo(3)" :class="{ active: activeButton === 3}">
                <span><i class="icon pi pi-users"></i>Lecturer</span>
            </button>
        </nav>
        <!-- course  -->
        <div class="sub-container" v-if="activeButton === 1">
            <div class="search">
                <input type="text" placeholder="search subject">
                <i class="icon pi pi-search"></i>
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
                            <div class="btn"><button>Unsigned</button></div>
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
                            <div class="btn"><button>Unsigned</button></div>
                            <div> TP : 16 H</div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>Internet Programming</div>
                            <div class="btn"><button>Unsigned</button></div>
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
                            <div class="btn"><button>Unsigned</button></div>
                            <div> TP : 16 H</div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>Internet Programming</div>
                            <div class="btn"><button>Unsigned</button></div>
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
                            <div class="btn"><button>Unsigned</button></div>
                            <div> TP : 16 H</div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>Internet Programming</div>
                            <div class="btn"><button>Unsigned</button></div>
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
                            <div class="btn"><button>Unsigned</button></div>
                            <div> TP : 16 H</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>Internet Programming</div>
                            <div class="btn"><button>Unsigned</button></div>
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
                            <div class="btn"><button>Unsigned</button></div>
                            <div> TP : 16 H</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>Internet Programming</div>
                            <div class="btn"><button>Unsigned</button></div>
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
                            <div class="btn"><button>Unsigned</button></div>
                            <div> TP : 16 H</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="icons">
                            <i class="icon pi pi-ellipsis-v"></i>
                            <i class="icon pi pi-ellipsis-v"></i>
                        </div>
                        <div class="course-info">
                            <div>Internet Programming</div>
                            <div class="btn"><button>Unsigned</button></div>
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
                            <div class="btn"><button>Unsigned</button></div>
                            <div> TP : 16 H</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- room  -->
        <div class="sub-container" v-if="activeButton === 2">
            <div class="search">
                <input type="text" placeholder="search room">
                <i class="icon pi pi-search"></i>
            </div>
            <div class="data">
                <div class="items">
                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>

                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>

                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>

                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>

                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>

                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>

                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>

                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>
                    
                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>
                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>
                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>
                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>
                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>
                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>
                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>
                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>
                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>
                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>
                    <div class="item-room">
                        <div class="room-number"><h3>A - 201</h3></div>
                        <div class="room-name">
                            <h3>Office</h3>
                            <p>N/A Desk</p>
                            <p>N/A Chair</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- lecturer -->
        <div class="sub-container" v-if="activeButton === 3">
            <div class="search">
                <input type="text" placeholder="search lecturer">
                <i class="icon pi pi-search"></i>
            </div>
            <div class="data">
                <div class="items">
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>

                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>

                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>

                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>

                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>

                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>

                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>

                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>

                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>

                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-lecturer">
                        <div class="icon">
                            <img src="../assets/image/avatar.png" alt="avatar">
                        </div>
                        <div class="info">
                            <h4>No ID Card | Admin</h4>
                            <p>Admin</p>
                            <div class="depart-gen">
                                <div><i class="icon pi pi-home"></i>GIC</div>
                                <div><i class="icon pi pi-user"></i>M</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'primeicons/primeicons.css';
export default {
    data() {
        return {
            activeButton: 1
        }
    },
    methods: {
        showInfo(buttonNumber) {
            this.activeButton = buttonNumber;
        }
    }
}
</script>

<style scoped>
/* navbar button color change */
button.navbars.course.active {
  background-color: #0c356a;
}
button.navbars.room.active {
  background-color: #0c356a;
}
button.navbars.lecturer.active {
  background-color: #0c356a;
}
/* container */
.contianer {
    width: 20%;
    height: 100vh;
    /* background-color: rgb(190, 190, 190); */
    font-family: Arial, Helvetica, sans-serif;
}

/* navbar */
.contianer .navbar {
    width: 100%;
    height: 6%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    /* background-color: antiquewhite; */
    padding-bottom: 5px;
    /* padding-left: 5%; */
}

.contianer .navbar .navbars {
    border: 1px solid black;
}

:hover {
    cursor: pointer;
}

.contianer .navbar .navbars {
    width: 30%;
    height: 70%;
    border: none;
    border-radius: 5px;
    background-color: #3aa6b9;
    color: white;
}

.contianer .navbar .navbars:hover {
    background-color: #0c356a;
}

.contianer .navbar .navbars span .icon {
    padding-right: .5rem;
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
    height: 5%;
    /* background-color: aqua; */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin: .5rem 0;
}

.contianer .sub-container .search input {
    width: 90%;
    padding: .3rem;
    outline: none;
    position: relative;
}

.contianer .sub-container .search .icon {
    position: absolute;
    right: 2rem;
}

.contianer .sub-container .data {
    width: 100%;
    height: 92.2%;
    background-color: rgb(255, 255, 255);
    border: 1px solid black;
}

.contianer .sub-container .data .items {
    width: 90%;
    height: 95%;
    background-color: #ece8e8;
    /* padding: 5%; */
    margin: 5%;
    overflow-y: scroll;
}
/* item course  */
.contianer .sub-container .data .items .item {
    height: 15%;
    /* width: 100%; */
    background-color: #ffffff;
    /* padding: 5%; */
    margin: 5%;
    /* margin-top: 10%; */
    border-left: 2px solid #ff0000;
}

.contianer .sub-container .data .items .item:hover {
    cursor: pointer;
}

.contianer .sub-container .data .items .item .icons {
    height: 30%;
    width: 100%;
    /* background-color: aliceblue; */
    /* padding: 0;
    margin: 0; */
    display: flex;
    align-items: center;
    padding-left: .5rem;
}

.contianer .sub-container .data .items .item .course-info {
    height: 70%;
    width: 100%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 5%;
}

.contianer .sub-container .data .items .item .course-info .btn button {
    color: white;
    background-color: #ff0000;
    border: none;
    border-radius: 5px;
    padding: .2rem;
}
/* item-room */
.contianer .sub-container .data .items .item-room{
    height: 15%;
    background-color: #ffffff;
    margin: 5%;
    /* border-left: 2px solid #ff0000; */
    display: flex;
}
.contianer .sub-container .data .items .item-room .room-number{
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #71dcfe;
    color: white;
}
.contianer .sub-container .data .items .item-room .room-name{
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-top: 1rem;
    padding-left: .5rem;
}
/* item-lecturer */
.contianer .sub-container .data .items .item-lecturer{
    height: 15%;
    background-color: #ffffff;
    margin: 5%;
    border-left: 2px solid #002aff;
    display: flex;
}
.contianer .sub-container .data .items .item-lecturer .icon{
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
}.contianer .sub-container .data .items .item-lecturer .icon img{
    width: 100%;
}
.contianer .sub-container .data .items .item-lecturer .info{
    width: 80%;
    padding-top: 1rem;
    padding-left: .5rem;
}
.contianer .sub-container .data .items .item-lecturer .info .depart-gen{
    width: 100%;
    display: flex;
    /* gap: .5rem; */
}
.contianer .sub-container .data .items .item-lecturer .info .depart-gen div{
    width: 50%;
    display: flex;
}
</style>