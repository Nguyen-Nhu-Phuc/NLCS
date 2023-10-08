<template>
    <div class="grid wide">
        <div class="row">
            <div>
                <img class="profile__banner" src="../assets/images/profile_banner.png" alt="">
            </div>

            <div>
                <img class="profile__user" src="../assets/images/cat.jpg" alt="">
            </div>
            <div class="profile__name">Sói Xám</div>
        </div>

        <div class="row">
            <div class="col lg-4">
                <div class="profile__user--introduce">
                    <div class="user__introduce">Giới thiệu</div>
                    <div class="user__introduces">Thành viên của Huī Tài Láng - Học lập trình để đi làm từ một năm trước
                    </div>
                </div>
                <div class="profile__user--introduce">
                    <div class="user__introduce">Hoạt động gần đây</div>
                    <div class="user__introduces">Chưa có hoạt động gần đây</div>
                </div>
            </div>


            <div class="col lg-8">
                <div class="profile__course">
                    <div class="user__course">Các khóa học đã tham gia</div>
                    <div class="row profile__frame" v-for="course in  courses " :key="course._id">
                        <div class="col lg-5">
                            <img class="image__course" :src="course.image" alt="">
                        </div>
                        <div class="col lg-7">
                            <div class="note__course">{{ course.name }}</div>
                            <div class="notes__course">{{ course.description }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { useUserStore } from '../stores/user.js';



export default {
    setup() {
        const userStore = useUserStore();
        return {
            userStore
        }
    },

    data() {
        return {
            courses: [], // Mảng chứa dữ liệu khóa học từ MongoDB
        };
    },
    computed: {
        urlServer() {
            return import.meta.env.VITE_APP_URL_SERVER;
        }
    },

    mounted() {
        // Gọi phương thức để lấy dữ liệu từ MongoDB khi component được mounted
        this.fetchCourses();
    },
    methods: {
        async fetchCourses() {
            try {
                const res = await axios.get(`${this.urlServer}/api/course/stored`);
                this.courses = res.data;
                console.log(this.courses); // Kiểm tra dữ liệu từ MongoDB
            } catch (error) {
                console.error('Error get data from MongoDB:', error);
            }
        },


        async deleteCourse(id) {
            const res = await axios.delete(`http://localhost:3000/api/course/${id}`);
            if (res.status == 200) {
                await this.fetchCourses();
                this.$router.push('/course');
            }
        },
    },
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/grid.scss';


.profile__banner {
    width: 1224px;
    border: 1px solid black;
    border-radius: 10px;

}

.profile__user {
    margin-left: 40px;
    margin-top: -94px;
    width: 200px;
    height: 200px;
    border: 10px solid white;
    border-radius: 50%;
    z-index: 100;
}

.profile__name {
    font-size: 35px;
    margin-left: 40px;
}

.profile__user--introduce {
    border: 2px solid #eee;
    border-radius: 5px;
    margin-top: 35px;
}

.profile__course {
    border: 2px solid #eee;
    border-radius: 5px;
    margin-top: 35px;
}

.profile__frame {
    margin-top: 12px;
}

.user__introduce {
    font-size: 20px;
    font-weight: bold;
}

.user__introduces {
    font-size: 1.22rem;

}

.image__course {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
}

.user__course {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 20px;
}

.note__course {
    font-size: 25px;
    font-weight: bold;
}

.notes__course {
    font-size: 1.22rem;
}
</style>