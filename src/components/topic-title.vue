<template>
    <div class="title">
        <div class="title-left">
            <h1>{{ title }}</h1>
            <div class="show">
                <span>{{ title }}</span>
                <span>更多</span>
            </div>
            <ul v-if="show">
                <li>周一</li>
                <li>周二</li>
                <li>周三</li>
                <li class="active">周四</li>
                <li>周五</li>
                <li>周六</li>
                <li>周日</li>
            </ul>
        </div>
        <div class="title-right active">更多</div>
    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        default: '有啥推荐捏'
    },
    show: {
        type: Boolean,
        default: false
    }
})
</script>
<style scoped lang="scss">
.title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title-left {
        display: flex;
        align-items: center;

        ul {
            display: flex;
            gap: 30px;
            align-items: center;
            justify-content: space-between;
        }
    }
}

.show {
    display: none;
}

@media (max-width: 575px) {
    .title-left {
        flex-direction: column;
        width: 100%;
    }

    .title-right {
        display: none;
    }

    ul {
        padding-left: 0;
        gap: 10px !important;
        width: 100%;
    }

    .show {
        margin-top: 2rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600
    }

    h1 {
        display: none;
    }
}

.active {
    padding: 8px 15px;
    border-radius: 5px;
    background-color: #dc6b82;
    color: #fff;
    font-weight: 600;
}
</style>