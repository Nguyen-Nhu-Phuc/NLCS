<template>
    <div class="frame grid wide">
        <div class="frame__course row">
            <div class="col lg-3" v-for="course in  courses " :key="course._id">
                <div class="card">
                    <div class="image">
                        <router-link :to="{ name: 'coursevideos' }">
                            <img class="frame__image" :src="course.image" alt="">
                        </router-link>
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
                            <router-link :to="{ name: 'editcourse', params: { id: course._id } }" class="button__edit">
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

                        <button title="Add New" class="button">
                            <router-link :to="{ name: 'createcourse' }" class="item__link">
                                <font-awesome-icon :icon="['fas', 'plus']" />
                            </router-link>
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
                const res = await axios.get(`${this.urlServer}/api/course/stored`);
                this.courses = res.data;
                console.log(this.courses); // Kiểm tra dữ liệu từ MongoDB
            } catch (error) {
                console.error('Error get data from MongoDB:', error);
            }
        },


        async deleteCourse(id) {
            const confirmDelete = window.confirm('Bạn có chắc chắn muốn xóa khóa học này không?');

            if (confirmDelete) {
                try {
                    // Fetch the course data to get the image URL
                    const course = this.courses.find(course => course._id === id);
                    if (!course) {
                        console.error('Khóa học không tồn tại.');
                        return;
                    }

                    // Delete the course from MongoDB
                    const res = await axios.delete(`${this.urlServer}/api/course/${id}`);

                    if (res.status === 200) {
                        // Delete the image from Cloudinary
                        await this.deleteImageFromCloudinary(course.image);

                        // Fetch the updated list of courses
                        await this.fetchCourses();
                        this.$router.push('/course');
                        console.log('Khóa học và hình ảnh đã được xóa thành công.');
                    }
                } catch (error) {
                    console.error('Lỗi khi xóa khóa học:', error);
                }
            }
        },
        async deleteImageFromCloudinary(imageUrl) {
            try {
                // Extract the public ID from the Cloudinary image URL
                const publicId = imageUrl.split('/').pop().replace(/\.\w+$/, '');

                // Construct the Cloudinary API URL for image deletion
                const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/destroy/${publicId}`;

                // Make a DELETE request to Cloudinary's API to delete the image
                const cloudinaryResponse = await axios.delete(cloudinaryUrl, {
                    headers: {
                        'Authorization': `Bearer ${CLOUDINARY_API_KEY}`,
                    },
                });

                if (cloudinaryResponse.status === 200) {
                    console.log('Hình ảnh đã được xóa khỏi Cloudinary.');
                } else {
                    console.error('Không thể xóa hình ảnh từ Cloudinary:', cloudinaryResponse.data);
                }
            } catch (error) {
                console.error('Lỗi khi xóa hình ảnh từ Cloudinary:', error);
            }
        }


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

.actions button.button__delete {
    /* Add the following styles to remove the border */
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #fff;
    border-radius: 5px;
    background-color: red;
    font-size: 0.875rem;
    // line-height: 1.25rem;
    // font-weight: 500;
    height: 30px;
    width: 40px;
    align-items: center;
    gap: 0.25rem;
    padding: 0;
    /* Remove padding to make it look like a simple link */
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

.button__edit {
    color: #fff;
}


.button {
    border-radius: 50px;
    border: 3px solid #4bb6b7;
    margin-top: 45%;
    margin-left: 45%;
    position: relative;
    display: inline-block;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.2s, fill 0.2s;
}

.button:hover {
    transform: rotate(90deg);
}

.button:active {
    transform: scale(1);
}

.icon {
    width: 50px;
    height: 50px;
}

.icon path {
    stroke: slate-200;
    fill: none;
    transition: fill 0.2s;
}

.button:active .icon path {
    fill: slate-600;
}

.item__link {
    color: #4bb6b7;
}
</style>