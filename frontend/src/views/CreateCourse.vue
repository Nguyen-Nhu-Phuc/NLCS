<template>
    <form @submit.prevent="createCourse" method="post">
        <div class="container" id="container">
            <div class="modal">
                <div class="modal__header">
                    <span class="modal__title">New course</span>
                    <button class="button button--icon" @click="closeModal">
                        <svg width="24" viewBox="0 0 24 24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div class="modal__body">
                    <div class="input">
                        <label class="input__label">Course name</label>
                        <input class="input__field" type="text" id="name" v-model="newCourse.name">
                        <p class="input__description">The title must contain a maximum of 32 characters</p>
                    </div>
                    <div class="input">
                        <label class="input__label">Description</label>
                        <textarea class="input__field input__field--textarea" id="description"
                            v-model="newCourse.description"></textarea>
                        <p class="input__description">Give your project a good description so everyone knows what it's for
                        </p>
                    </div>
                    <div class="input">
                        <label class="input__label">Course image</label>
                        <input class="input__field" type="file" id="image" ref="imageInput" @change="handleImageUpload">
                        <p class="input__description">Upload an image file (maximum 32 characters)</p>
                    </div>
                </div>
                <div class="modal__footer">
                    <button type="submit" class="button button--primary">Create course</button>
                </div>
            </div>
        </div>
    </form>
</template>
  
<script>
import axios from 'axios';
import { useUserStore } from '../stores/user.js';

export default {
    setup() {
        const userStore = useUserStore();

        const newCourse = {
            name: '',
            description: '',
            image: '', // Thêm trường image
        };

        const closeModal = () => {
            // Đặt lại các trường trong newCourse và đóng modal
            newCourse.name = '';
            newCourse.description = '';
            newCourse.image = '';
        };

        const handleImageUpload = async (event) => {
            const file = event.target.files[0];
            if (file) {
                const CLOUD_NAME = "dhquufqkd";
                const PRESET_NAME = "backgraud_image_courese";
                const FOLDER_NAME = "ECMA";
                const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

                const formData = new FormData();
                formData.append("upload_preset", PRESET_NAME);
                formData.append("folder", FOLDER_NAME);
                formData.append("file", file);

                try {
                    const response = await axios.post(api, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });
                    newCourse.image = response.data.secure_url;
                    console.log(response.data); // Kiểm tra kết quả từ Cloudinary
                } catch (error) {
                    console.error("Lỗi khi tải lên hình ảnh:", error);
                }

            }
        };

        const createCourse = async () => {
            try {
                // Kiểm tra xem có trường name và description không trống
                if (!newCourse.name || !newCourse.description) {
                    alert("Please fill in all required fields.");
                    return;
                }

                await axios.post(`http://localhost:3000/api/course/createcourse`, newCourse);
                closeModal();
                alert("Course created successfully!");
            } catch (err) {
                console.error(err);
                alert("An error occurred while creating the course. Please try again later.");
            }
        };

        return {
            userStore,
            newCourse,
            closeModal,
            handleImageUpload,
            createCourse,
        };
    },
};
</script>
  
  

<style>
.button {
    /* appaerance: none; */
    font: inherit;
    border: none;
    background: none;
    cursor: pointer;
}

.container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
}

.modal {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    box-shadow: 0 15px 30px 0 #4bb6b9;
    border-radius: 10px;
}

.modal__header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modal__body {
    padding: 1rem 1rem;
}

.modal__footer {
    padding: 0 1.5rem 1.5rem;
}

.modal__title {
    font-weight: 700;
    font-size: 1.25rem;
}

.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s ease;
}

.button--icon {
    width: 2.5rem;
    height: 2.5rem;
    background-color: transparent;
    border-radius: 0.25rem;
}

.button--icon:focus,
.button--icon:hover {
    background-color: #ededed;
}

.button--primary {
    background-color: #4bb6b7;
    color: #FFF;
    padding: 0.75rem 1.25rem;
    border-radius: 0.25rem;
    font-weight: 500;
    font-size: 0.875rem;
}

.button--primary:hover {
    background-color: #006489;
}

.input {
    display: flex;
    flex-direction: column;
}

.input+.input {
    margin-top: 1.75rem;
}

.input__label {
    font-weight: 700;
    font-size: 0.875rem;
}

.input__field {
    display: block;
    margin-top: 0.5rem;
    border: 1px solid #DDD;
    border-radius: 0.25rem;
    padding: 0.75rem 0.75rem;
    transition: 0.15s ease;
}

.input__field:focus {
    outline: none;
    border-color: #007dab;
    box-shadow: 0 0 0 1px #007dab, 0 0 0 4px rgba(0, 125, 171, 0.25);
}

.input__field--textarea {
    min-height: 100px;
    max-width: 100%;
}

.input__description {
    font-size: 0.875rem;
    margin-top: 0.5rem;
    color: #8d8d8d;
}
</style>