<template>
    <div class="topic">
        <TopicTitle :title="title" :show="show" />
        <div class="topic-card">
            <TopicCard v-for="(item, index) in info" :info="item" :key="index" />
        </div>
    </div>
</template>
<script setup>
import TopicTitle from './topic-title.vue'
import TopicCard from './topic-card.vue';
const props = defineProps({
    title: {
        type: String,
        default: '热门话题'
    },
    show: {
        type: Boolean,
        default: false
    },
    info: {
        type: Array,
        default: () => []
    }
})
</script>
<style scoped lang="scss">
.topic {
    margin: 0 0.625rem;

    .topic-card {
        display: flex;
        margin-top: 20px;
        overflow: hidden;
        // justify-content: space-between;
        gap: 10px;
        // 换行
        flex-wrap: wrap;
    }

}
</style>