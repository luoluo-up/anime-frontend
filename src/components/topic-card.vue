<template>
    <div class="card" @click="$router.push('/detail')">
        <div class="img">
            <img :src="info.imgUrl" alt="">
            <span>9.0</span>
        </div>
        <div class="title">{{ info.title }}</div>
        <div class="tips">预计{{ info.tips }}开播</div>
    </div>
</template>
<script setup>
const props = defineProps({
    info: {
        type: Object,
        default: () => ({})
    }
})
</script>
<style scoped lang="scss">
@media (max-width: 575px) {
    .card {
        width: 31% !important;
    }
}

.card {
    width: 12.5%;
    overflow: hidden;

    .img {
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        width: 100%; // 确保图片容器宽度为100%  
        height: 200px; // 设置固定高度  

        img {
            width: 100%;
            height: 100%;
            object-fit: cover; // 保持比例并填充容器  
            transition: all 0.3s ease-in-out;

            &:hover {
                transform: scale(1.2);
            }
        }

        span {
            position: absolute;
            bottom: 0;
            right: 5px;
            color: #d8687f;
            font-size: 12px;
            padding: 2px 4px;
            font-weight: 600;
        }
    }

    .title {
        font-size: 14px;
        font-weight: 600;
        margin: 5px 0;
    }

    .tips {
        font-size: 12px;
        color: #999;
    }
}
</style>