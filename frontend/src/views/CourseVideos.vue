<template>
    <div class="grid wide">
        <div class="row">
            <div class="col lg-3">
                <button>HỌC NGAY</button>
            </div>
            <div class="col lg-9">
                <h1>Xây dựng web với Node JS & Expreess JS</h1>
                <router-link :to="{ name: 'lesson' }">
                                    Thêm video
                                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>@import '../assets/styles/grid.scss';

</style>