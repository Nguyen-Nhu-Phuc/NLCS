<template>
    <div class="frame grid wide">
        <div class="frame__course row">
            <div class="col lg-3" v-for="course in courses" :key="course._id">
                <div class="card">
                    <div class="image">
                        <img class="frame__image" :src="course.image" alt="">
                    </div>
                    <div class="content">
                        <a href="#">
                            <span class="title">
                                {{ course.name }}
                            </span>
                        </a>

                        <p class="desc">
                            {{ course.description }}
                        </p>

                        <a class="action" href="#">
                            <router-link :to="{ name: 'editcourse', params: { id: course._id } }" class="item__link">
                                Chỉnh sửa
                                <span aria-hidden="true">
                                    →
                                </span>
                            </router-link>

                        </a>


                        <a class="actions" href="#">
                            <button type="button" @click="deleteCourse(course._id)" class="button__delete">
                                Xóa
                            </button>


                        </a>


                    </div>
                </div>


            </div>
            <div class="col lg-3">
                <div class="bt_add">
                    <div class="main">
                        <button class="Btn">
                            <router-link :to="{ name: 'createcourse' }" class="item__link">
                                <div class="sign">+</div>
                            </router-link>

                            <!-- <div class="text">Create</div> -->
                        </button>
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
                const res = await axios.get(`${this.urlServer}/api/course/stored`); // Thay đổi đường dẫn API của bạn
                this.courses = res.data; // Gán dữ liệu từ MongoDB vào biến courses
                console.log(this.courses);
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

.coure {
    background-color: #121212;
    height: 400px;
    border-radius: 10px;
}

span {
    color: #fff;
    line-height: 300px;

}

.frame__course {
    margin-top: 30px;
}

.frame__image {
    //padding-top: 8px;
    // max-width: 300px;
    //max-height: 137px;
    height: 150px;
    width: 280px;
    border-radius: 0.5rem;
}

h3,
p {
    color: #fff;
    text-align: center;
    font-family: 'Poppins', sans-serif;

}

.course__content {
    margin-top: 45px;
}

.user__image {
    width: 50px;
    height: 50px;
    border-radius: 40px;
    text-align: right;
}

hr {
    color: #fff;
}

.name__user {
    color: #fff;
    font-family: 'Poppins', sans-serif;
}

.course__user {
    text-align: right;
}

.user__name {
    padding-top: 15px;
}

//

.card {
    margin-bottom: 20px;
    max-width: 300px;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid #121212;
}

.card a {
    text-decoration: none
}

.content {
    text-align: center;
    padding: 1.1rem;
}

.image {
    border-radius: 5px;
    object-fit: cover;
    width: 100%;
    height: 150px;
    //background-color: rgb(239, 205, 255);
}

.title {
    color: #111827;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
}

.desc {
    margin-top: 0.5rem;
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.action {
    height: 30px;
    display: inline-flex;
    margin-top: 1rem;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    align-items: center;
    gap: 0.25rem;
    background-color: #4bb6b7;
    padding: 4px 8px;
    border-radius: 4px;
    margin-right: 60px;
}

.action span {
    transition: .3s ease;
}

.action:hover span {
    transform: translateX(4px);
}

.actions {
    height: 30px;
    display: inline-flex;
    margin-top: 1rem;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    align-items: center;
    gap: 0.25rem;
    background-color: red;
    padding: 4px 8px;
    border-radius: 4px;
}

.actions span {
    transition: .3s ease;
}

.actions:hover span {
    transform: translateX(4px);
}

.bt_add {
    height: 290px;
    width: 285px;
    border-radius: 0.5rem;
    border: 1px solid #121212;
}

.Btn {
    // display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 45px;
    height: 45px;
    border-radius: calc(45px/2);
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: .3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    background: #4bb6b7;
    margin-top: 129px;
    margin-left: 116px;
}

/* plus sign */
.sign {
    width: 100%;
    font-size: 2.2em;
    color: white;
    transition-duration: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* text */
.text {
    position: absolute;
    right: 0%;
    width: 0%;
    opacity: 0;
    color: white;
    font-size: 1.4em;
    font-weight: 500;
    transition-duration: .3s;
}

/* hover effect on button width */
.Btn:hover {
    width: 125px;
    transition-duration: .3s;
}

.Btn:hover .sign {
    width: 30%;
    transition-duration: .3s;
    padding-left: 15px;
}

/* hover effect button's text */
.Btn:hover .text {
    opacity: 1;
    width: 70%;
    transition-duration: .3s;
    padding-right: 15px;
}
</style>