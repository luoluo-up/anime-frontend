<template>
    <NavBar />
    <Category />
    <div class="container">
        <TopicCard v-for="(item, index) in info" :key="index" :info="item" />
    </div>
</template>
<script setup>
import NavBar from '../components/nav-bar.vue';
import Category from '../components/category.vue';
import TopicCard from '../components/topic-card.vue';
import { ref } from 'vue'
const info = ref([{
    title: '约会大作战VI',
    // 上映日期
    tips: '2.9',
    imgUrl: '../src/assets/images/home/1.jpg'
}, {
    title: '约会大作战V',
    // 上映日期
    tips: '1.9',
    imgUrl: '../src/assets/images/home/2.jpg'
}, {
    title: '约会大作战IV',
    // 上映日期
    tips: '2.19',
    imgUrl: '../src/assets/images/home/3.jpg'
}, {
    title: '约会大作战III',
    // 上映日期
    tips: '3.21',
    imgUrl: '../src/assets/images/home/4.jpg'
}, {
    title: '约会大作战II',
    // 上映日期
    tips: '6.1',
    imgUrl: '../src/assets/images/home/5.jpg'
}, {
    title: '约会大作战',
    // 上映日期
    tips: '1.1',
    imgUrl: '../src/assets/images/home/6.jpg'
}, {
    title: '约会大作战OVA',
    // 上映日期
    tips: '3.1',
    imgUrl: '../src/assets/images/home/7.jpg'
}, {
    title: '约会大作战外传',
    // 上映日期
    tips: '3.1',
    imgUrl: '../src/assets/images/home/8.jpg'
}]
)
</script>
<style scoped lang="scss">
.container {
    display: flex;
    padding: 0 4.5rem;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 2rem;
}
</style>