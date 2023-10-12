<template>
    <div class="grid wide">
        <h3>Khóa học của tôi</h3>
        <button @click="selectAllCourses">
            {{ selectedCourses.length === courses.length ? 'Bỏ chọn tất cả' : 'Tích chọn tất cả' }}
        </button>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên khóa học</th>
                    <th scope="col">Description</th>
                    <th scope="col">Thời gian tạo</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(course, index) in courses" :key="course._id">
                    <td>
                        <input type="checkbox" v-model="selectedCourses" :value="course._id" />
                    </td>
                    <td>{{ index + 1 }}</td>
                    <td>{{ course.name }}</td>
                    <td>{{ course.description }}</td>
                    <td>{{ course.createdAt }}</td>
                    <td>
                        <button @click="editCourse(course._id)">Chỉnh sửa</button>
                        <button @click="deleteCourse(course._id)">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="deleteSelectedCourses">Xóa các khóa học đã chọn</button>
    </div>
</template>
  
<script>
import axios from 'axios';
import { useUserStore } from '../stores/user.js';

export default {
    setup() {
        const userStore = useUserStore();
        return {
            userStore,
            selectedCourses: [], // Array to store the selected course IDs
        };
    },

    data() {
        return {
            courses: [],
        };
    },

    computed: {
        urlServer() {
            return import.meta.env.VITE_APP_URL_SERVER;
        },
    },

    mounted() {
        this.fetchCourses();
    },

    methods: {
        async fetchCourses() {
            try {
                const res = await axios.get(`${this.urlServer}/api/course/stored`);
                this.courses = res.data;
            } catch (error) {
                console.error('Error getting data from MongoDB:', error);
            }
        },

        async deleteCourse(id) {
            const confirmDelete = window.confirm('Bạn có chắc chắn muốn xóa khóa học này không?');

            if (confirmDelete) {
                try {
                    // Implement your course deletion logic here
                    const res = await axios.delete(`${this.urlServer}/api/course/${id}`);

                    if (res.status === 200) {
                        // Implement your success logic here
                        await this.fetchCourses();
                        console.log('Khóa học và hình ảnh đã được xóa thành công.');
                    } else {
                        // Implement your error handling logic here
                        console.error('Lỗi khi xóa khóa học:', res);
                    }
                } catch (error) {
                    console.error('Lỗi khi xóa khóa học:', error);
                }
            }
        },

        async editCourse(id) {
            // Implement your course editing logic here
            // You can navigate to an edit page or show a modal for editing the course
            console.log('Chỉnh sửa khóa học:', id);
        },

        deleteSelectedCourses() {
            const confirmed = window.confirm('Bạn có chắc chắn muốn xóa các khóa học đã chọn không?');

            if (confirmed) {
                for (const courseId of this.selectedCourses) {
                    this.deleteCourse(courseId);
                }

                this.selectedCourses = [];
            }
        },

        selectAllCourses() {
            if (this.selectedCourses.length === this.courses.length) {
                // Deselect all courses if all are currently selected
                this.selectedCourses = [];
            } else {
                // Select all courses
                this.selectedCourses = this.courses.map((course) => course._id);
            }
        },
    },
};
</script>
  
<style></style>
  