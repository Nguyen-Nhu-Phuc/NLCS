<template>
    <div class="grid wide">
        <h3>Người dùng</h3>
        <button @click="selectAllUsers">
            {{ selectedUsers.length === users.length ? 'Bỏ chọn tất cả' : 'Tích chọn tất cả' }}
        </button>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên user</th>
                    <th scope="col">Email</th>
                    <th scope="col">Thời gian tạo</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user._id">
                    <td>
                        <input type="checkbox" v-model="selectedUsers" :value="user._id" />
                    </td>
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.fullName }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.createdAt }}</td>
                    <td>
                        <button @click="editUser(user._id)">Chỉnh sửa</button>
                        <button @click="deleteUser(user._id)">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="deleteSelectedUsers">Xóa các người dùng đã chọn</button>
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
            selectedUsers: [], // Array to store the selected user IDs
        };
    },

    data() {
        return {
            users: [], // Change 'courses' to 'users'
        };
    },

    computed: {
        urlServer() {
            return import.meta.env.VITE_APP_URL_SERVER;
        },
    },

    mounted() {
        this.fetchUsers(); // Change to fetch user data
    },

    methods: {
        async fetchUsers() {
            try {
                const res = await axios.get(`${this.urlServer}/api/user/stored`); // Fetch user data
                this.users = res.data; // Update 'users' with fetched data
            } catch (error) {
                console.error('Error getting data from MongoDB:', error);
            }
        },

        async deleteUser(id) {
            const confirmDelete = window.confirm('Bạn có chắc chắn muốn xóa người dùng này không?');

            if (confirmDelete) {
                try {
                    // Implement your user deletion logic here
                    const res = await axios.delete(`${this.urlServer}/api/user/${id}`);

                    if (res.status === 200) {
                        // Implement your success logic here
                        await this.fetchUsers();
                        console.log('Người dùng đã được xóa thành công.');
                    } else {
                        // Implement your error handling logic here
                        console.error('Lỗi khi xóa người dùng:', res);
                    }
                } catch (error) {
                    console.error('Lỗi khi xóa người dùng:', error);
                }
            }
        },

        async editUser(id) {
            // Implement your user editing logic here
            // You can navigate to an edit page or show a modal for editing the user
            console.log('Chỉnh sửa người dùng:', id);
        },

        deleteSelectedUsers() {
            const confirmed = window.confirm('Bạn có chắc chắn muốn xóa các người dùng đã chọn không?');

            if (confirmed) {
                for (const userId of this.selectedUsers) {
                    this.deleteUser(userId);
                }

                this.selectedUsers = [];
            }
        },

        selectAllUsers() {
            if (this.selectedUsers.length === this.users.length) {
                // Deselect all users if all are currently selected
                this.selectedUsers = [];
            } else {
                // Select all users
                this.selectedUsers = this.users.map((user) => user._id);
            }
        },
    },
};
</script>
