<template>
    <header class="header">
        <div class="nav--pc h-100 grid wide">
            <div class="row h-100">
                <div class="nav-pc__list nav-pc__list--left h-100 col col-9 md-9 lg-9">
                    <div class="logo__container w-30 h-100">

                        <router-link :to="{ name: 'home' }" class="categories-item__link">
                            <p class="frame__name"> Huī<span>Tài Láng();</span></p>
                        </router-link>

                    </div>

                    <ul class="categories w-70">
                        <div class="row h-100 text-center">
                            <li class="categories__item col col-3 md-3 lg-3">
                                <router-link :to="{ name: 'home' }" class="categories-item__link">
                                    TRANG CHỦ
                                </router-link>
                            </li>

                            <li class="categories__item  col col-3 md-3 lg-3">
                                <router-link :to="{ name: 'course' }" class="categories-item__link">
                                    KHÓA HỌC
                                </router-link>
                            </li>

                            <li class="categories__item  col col-3 md-3 lg-3">
                                <router-link :to="{ name: 'roadmap' }" class="categories-item__link">
                                    LỘ TRÌNH
                                </router-link>
                            </li>

                            <li class="categories__item  col col-3 md-3 lg-3">
                                <router-link :to="{ name: 'blog' }" class="categories-item__link">
                                    BLOG
                                </router-link>
                            </li>

                        </div>
                    </ul>
                </div>


                <input type="checkbox" class="check__profile" id="check__profile-user">
                <div class="profile__user">

                    <div class="input">

                        <router-link :to="{ name: 'personalpage' }">
                            <div class="value">
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2">
                                    <path fill="#7D8590"
                                        d="m1.5 13v1a.5.5 0 0 0 .3379.4731 18.9718 18.9718 0 0 0 6.1621 1.0269 18.9629 18.9629 0 0 0 6.1621-1.0269.5.5 0 0 0 .3379-.4731v-1a6.5083 6.5083 0 0 0 -4.461-6.1676 3.5 3.5 0 1 0 -4.078 0 6.5083 6.5083 0 0 0 -4.461 6.1676zm4-9a2.5 2.5 0 1 1 2.5 2.5 2.5026 2.5026 0 0 1 -2.5-2.5zm2.5 3.5a5.5066 5.5066 0 0 1 5.5 5.5v.6392a18.08 18.08 0 0 1 -11 0v-.6392a5.5066 5.5066 0 0 1 5.5-5.5z">
                                    </path>
                                </svg>
                                Trang cá nhân
                            </div>
                        </router-link>

                        <div class="value">
                            <svg id="svg8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <g id="layer1" transform="translate(-33.022 -30.617)">
                                    <path fill="#7D8590" id="path26276"
                                        d="m49.021 31.617c-2.673 0-4.861 2.188-4.861 4.861 0 1.606.798 3.081 1.873 3.834h-7.896c-1.7 0-3.098 1.401-3.098 3.1s1.399 3.098 3.098 3.098h4.377l.223 2.641s-1.764 8.565-1.764 8.566c-.438 1.642.55 3.355 2.191 3.795s3.327-.494 3.799-2.191l2.059-5.189 2.059 5.189c.44 1.643 2.157 2.631 3.799 2.191s2.63-2.153 2.191-3.795l-1.764-8.566.223-2.641h4.377c1.699 0 3.098-1.399 3.098-3.098s-1.397-3.1-3.098-3.1h-7.928c1.102-.771 1.904-2.228 1.904-3.834 0-2.672-2.189-4.861-4.862-4.861zm0 2c1.592 0 2.861 1.27 2.861 2.861 0 1.169-.705 2.214-1.789 2.652-.501.203-.75.767-.563 1.273l.463 1.254c.145.393.519.654.938.654h8.975c.626 0 1.098.473 1.098 1.1s-.471 1.098-1.098 1.098h-5.297c-.52 0-.952.398-.996.916l-.311 3.701c-.008.096-.002.191.018.285 0 0 1.813 8.802 1.816 8.82.162.604-.173 1.186-.777 1.348s-1.184-.173-1.346-.777c-.01-.037-3.063-7.76-3.063-7.76-.334-.842-1.525-.842-1.859 0 0 0-3.052 7.723-3.063 7.76-.162.604-.741.939-1.346.777s-.939-.743-.777-1.348c.004-.019 1.816-8.82 1.816-8.82.02-.094.025-.189.018-.285l-.311-3.701c-.044-.518-.477-.916-.996-.916h-5.297c-.627 0-1.098-.471-1.098-1.098s.472-1.1 1.098-1.1h8.975c.419 0 .793-.262.938-.654l.463-1.254c.188-.507-.062-1.07-.563-1.273-1.084-.438-1.789-1.483-1.789-2.652.001-1.591 1.271-2.861 2.862-2.861z">
                                    </path>
                                </g>
                            </svg>
                            Khóa học của tôi
                        </div>
                        <div class="value">
                            <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#7D8590"
                                    d="m109.9 20.63a6.232 6.232 0 0 0 -8.588-.22l-57.463 51.843c-.012.011-.02.024-.031.035s-.023.017-.034.027l-4.721 4.722a1.749 1.749 0 0 0 0 2.475l.341.342-3.16 3.16a8 8 0 0 0 -1.424 1.967 11.382 11.382 0 0 0 -12.055 10.609c-.006.036-.011.074-.015.111a5.763 5.763 0 0 1 -4.928 5.41 1.75 1.75 0 0 0 -.844 3.14c4.844 3.619 9.4 4.915 13.338 4.915a17.14 17.14 0 0 0 11.738-4.545l.182-.167a11.354 11.354 0 0 0 3.348-8.081c0-.225-.02-.445-.032-.667a8.041 8.041 0 0 0 1.962-1.421l3.16-3.161.342.342a1.749 1.749 0 0 0 2.475 0l4.722-4.722c.011-.011.018-.025.029-.036s.023-.018.033-.029l51.844-57.46a6.236 6.236 0 0 0 -.219-8.589zm-70.1 81.311-.122.111c-.808.787-7.667 6.974-17.826 1.221a9.166 9.166 0 0 0 4.36-7.036 1.758 1.758 0 0 0 .036-.273 7.892 7.892 0 0 1 9.122-7.414c.017.005.031.014.048.019a1.717 1.717 0 0 0 .379.055 7.918 7.918 0 0 1 4 13.317zm5.239-10.131c-.093.093-.194.176-.293.26a11.459 11.459 0 0 0 -6.289-6.286c.084-.1.167-.2.261-.3l3.161-3.161 6.321 6.326zm7.214-4.057-9.479-9.479 2.247-2.247 9.479 9.479zm55.267-60.879-50.61 56.092-9.348-9.348 56.092-50.61a2.737 2.737 0 0 1 3.866 3.866z">
                                </path>
                            </svg>
                            Viết blog
                        </div>

                        <div class="value">
                            <svg id="Line" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#7D8590" id="XMLID_1646_"
                                    d="m17.074 30h-2.148c-1.038 0-1.914-.811-1.994-1.846l-.125-1.635c-.687-.208-1.351-.484-1.985-.824l-1.246 1.067c-.788.677-1.98.631-2.715-.104l-1.52-1.52c-.734-.734-.78-1.927-.104-2.715l1.067-1.246c-.34-.635-.616-1.299-.824-1.985l-1.634-.125c-1.035-.079-1.846-.955-1.846-1.993v-2.148c0-1.038.811-1.914 1.846-1.994l1.635-.125c.208-.687.484-1.351.824-1.985l-1.068-1.247c-.676-.788-.631-1.98.104-2.715l1.52-1.52c.734-.734 1.927-.779 2.715-.104l1.246 1.067c.635-.34 1.299-.616 1.985-.824l.125-1.634c.08-1.034.956-1.845 1.994-1.845h2.148c1.038 0 1.914.811 1.994 1.846l.125 1.635c.687.208 1.351.484 1.985.824l1.246-1.067c.787-.676 1.98-.631 2.715.104l1.52 1.52c.734.734.78 1.927.104 2.715l-1.067 1.246c.34.635.616 1.299.824 1.985l1.634.125c1.035.079 1.846.955 1.846 1.993v2.148c0 1.038-.811 1.914-1.846 1.994l-1.635.125c-.208.687-.484 1.351-.824 1.985l1.067 1.246c.677.788.631 1.98-.104 2.715l-1.52 1.52c-.734.734-1.928.78-2.715.104l-1.246-1.067c-.635.34-1.299.616-1.985.824l-.125 1.634c-.079 1.035-.955 1.846-1.993 1.846zm-5.835-6.373c.848.53 1.768.912 2.734 1.135.426.099.739.462.772.898l.18 2.341 2.149-.001.18-2.34c.033-.437.347-.8.772-.898.967-.223 1.887-.604 2.734-1.135.371-.232.849-.197 1.181.089l1.784 1.529 1.52-1.52-1.529-1.784c-.285-.332-.321-.811-.089-1.181.53-.848.912-1.768 1.135-2.734.099-.426.462-.739.898-.772l2.341-.18h-.001v-2.148l-2.34-.18c-.437-.033-.8-.347-.898-.772-.223-.967-.604-1.887-1.135-2.734-.232-.37-.196-.849.089-1.181l1.529-1.784-1.52-1.52-1.784 1.529c-.332.286-.81.321-1.181.089-.848-.53-1.768-.912-2.734-1.135-.426-.099-.739-.462-.772-.898l-.18-2.341-2.148.001-.18 2.34c-.033.437-.347.8-.772.898-.967.223-1.887.604-2.734 1.135-.37.232-.849.197-1.181-.089l-1.785-1.529-1.52 1.52 1.529 1.784c.285.332.321.811.089 1.181-.53.848-.912 1.768-1.135 2.734-.099.426-.462.739-.898.772l-2.341.18.002 2.148 2.34.18c.437.033.8.347.898.772.223.967.604 1.887 1.135 2.734.232.37.196.849-.089 1.181l-1.529 1.784 1.52 1.52 1.784-1.529c.332-.287.813-.32 1.18-.089z">
                                </path>
                                <path id="XMLID_1645_" fill="#7D8590"
                                    d="m16 23c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z">
                                </path>
                            </svg>
                            Cài đặt
                        </div>
                        <router-link v-on:click="logoutUser()" to="/">
                        <div class="value">
                            <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
                            Đăng xuất
                        </div>
                        </router-link>

                    </div>
                </div>

                <div class="nav-pc__list nav-pc__list--right h-100 col col-2 md-2 lg-2 col-o-1 md-o-1 lg-o-1">
                    <div class="auth-btn__wrapper h-100">
                        <button type="button" class="nav-auth__btn w-70 h-60" v-if="userStore.account == null">
                            <router-link :to="{ name: 'register' }" class="nav-auth__link">
                                Đăng nhập
                            </router-link>
                        </button>
                        <button type="button" class="user__fullname" v-else>
                            <label for="check__profile-user">
                                {{ userStore.account.fullName }}
                            </label>
                        </button>
                    </div>

                </div>
            </div>
        </div>

        <div class="nav-mobile__wrapper h-100 grid wide">
            <div class="row w-100 h-100">
                <label for="nav-mobile__input" class="nav__bars-btn col col-1 md-1">
                    <font-awesome-icon :icon="['fas', 'bars']" class="menu__icon w-70 h-70" />
                </label>

                <div class="nav-mobile__logo h-100 col col-4 md-5 col-o-2 md-o-1">
                    <!-- /<img src="../assets/images/NISMO.png" alt="logo" class="logo__img w-100 h-100"> -->
                </div>

                <div class="categories--auth h-100 col col-3 md-3 col-o-2 md-o-2">
                    <div class="row">
                        <button type="button" class="nav-auth__btn w-100 h-60">
                            <router-link :to="{ name: 'login' }" class="nav-auth__link">
                                Đăng nhập
                            </router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <input type="checkbox" hidden class="nav-mobile__input" id="nav-mobile__input">
        <label for="nav-mobile__input" class="overlay--nav"></label>

        <nav class="nav--mobile">
            <label for="nav-mobile__input" class="btn__close">
                <font-awesome-icon :icon="['fas', 'times']" />
            </label>
            <ul class="nav-mobile__list">
                <li class="nav-mobile__item">
                    <font-awesome-icon :icon="['fas', 'home']" />
                    <router-link :to="{ name: 'home' }" class="nav-mobile__link">TRANG CHỦ</router-link>
                </li>
                <li class="nav-mobile__item">
                    <font-awesome-icon :icon="['fas', 'graduation-cap']" />
                    <router-link :to="{ name: 'home' }" class="nav-mobile__link">KHÓA HỌC</router-link>
                </li>
                <li class="nav-mobile__item">
                    <font-awesome-icon :icon="['fas', 'road']" />
                    <router-link :to="{ name: 'home' }" class="nav-mobile__link">LỘ TRÌNH</router-link>
                </li>
                <li class="nav-mobile__item">
                    <font-awesome-icon :icon="['fas', 'chalkboard-teacher']" />
                    <router-link :to="{ name: 'home' }" class="nav-mobile__link">GIÁO VIÊN</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
import axios from 'axios';
import { useUserStore } from '../stores/user.js';

export default {
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },
    methods: {
        logoutUser() {
            localStorage.clear();
            this.$router.push('/register');
        }
    },
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/grid.scss';


.user__fullname {
    color: #fff;
    padding: 0.9rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    opacity: 1;
    background-color: #4bb6b7;
    font-size: 15px;

    &:hover {
        opacity: 0.7;
    }
}

.frame__name {
    color: #fff;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    margin-top: 18px;
}

.header {
    height: $height-header-nav;
    background-color: #121212;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 13;
}

.nav-pc__list--left {
    display: flex !important;
}

.items__wrapper {
    display: flex;
    align-items: center;
}

.logo__container {
    max-height: $height-logo;
}

.categories {
    list-style: none;

    .row {
        align-items: center;
    }
}

.categories__item {
    font-family: 'Poppins', sans-serif;
}

.categories-item__link {
    color: $white-color;
    text-decoration: none;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;

    &:hover {
        color: #4bb6b7;
    }
}

.categories-item--active .categories-item__link {
    color: $red-dark-color;
}

.categories--auth .row {
    width: 80%;
    height: 100%;
    float: right;
}

.nav-pc__list--right .row {
    align-items: center;
    justify-content: flex-end;
}

.nav-auth__link {
    text-decoration: none;
    color: $white-color;
}

.auth-btn__wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.nav-auth__btn {
    background-color: #4bb6b7;
    border: none;
    font-size: 1.1rem;
    border-radius: 25px;
    cursor: pointer;

    &:hover {
        background: #fff;

        .nav-auth__link {
            color: $black-color;
        }
    }
}

.nav-mobile__wrapper {
    display: none;

    .row {
        align-items: center;
    }
}

.nav__bars-btn {
    color: $white-color;
    cursor: pointer;
}

.overlay--nav {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #4bb6b7;
}

.nav--mobile {
    background-color: antiquewhite;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 50%;
    max-width: 80%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    transform: translateX(-100%);
    opacity: 0;
    transition: transform linear .8s, opacity linear .8s;
}

.nav-mobile__list,
.nav-mobile__item {
    text-align: center;
}

.nav-mobile__list {
    margin-top: 4rem;
}

.nav-mobile__item {
    font-size: 1.4rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem 0;

    &:hover {
        background-color: rgb(244, 211, 167);
    }
}

.nav-mobile__link {
    text-decoration: none;
    color: $black-color;
    margin-left: 16px;
}

.btn__close {
    position: absolute;
    font-size: 1.3rem;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    opacity: 1;

    &:hover {
        opacity: 0.6;
    }
}

@media (max-width: 1023px) {
    #nav-mobile__input:checked~.overlay--nav {
        display: block;
    }

    #nav-mobile__input:checked~.nav--mobile {
        transform: translateX(0);
        opacity: 1;
    }

    .nav--pc {
        display: none;
    }

    .nav-mobile__wrapper {
        display: block;
    }
}

@media (min-width: 740px) and (max-width: 1023px) {
    .categories--auth .row {
        width: 82%;
    }
}

@media (max-width: 739px) {
    .menu__icon {
        float: right;
    }

    .nav-auth__btn {
        font-size: 0.9rem;
        width: 90%;
    }

    .categories--auth .row {
        width: 100%;
    }

    .nav--mobile {
        width: 75%;
    }
}

span {
    color: #4bb6b7;
}

// profile__user
.profile__user {
    display: none;
    position: fixed;
    top: 76px;
    right: 33px;
    // bottom: 0;
    width: 320px;
    background-color: #fff;
}

.check__profile:checked+.profile__user {
    display: block;
}

.check__profile {
    display: none;
}

.input {
    width: 320px;
    display: flex;
    flex-direction: column;
    background-color: #121212;
    justify-content: center;
    border-radius: 5px
}

.value {
    background-color: transparent;
    border: none;
    padding: 30px;
    color: white;
    display: flex;
    position: relative;
    gap: 5px;
    cursor: pointer;
    border-radius: 4px;
}

.value:not(:active):hover,
.value:focus {
    background-color: #21262C;
}

.value:focus,
.value:active {
    background-color: #1A1F24;
    outline: none;
}

.value::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -10px;
    width: 5px;
    height: 80%;
    background-color: #4bb6b7;
    border-radius: 5px;
    opacity: 0;
}

.value:focus::before,
.value:active::before {
    opacity: 1;
}

.value svg {
    width: 15px
}

.input:hover> :not(.value:hover) {
    transition: 300ms;
    filter: blur(1px);
    transform: scale(0.95, 0.95);
}
</style>