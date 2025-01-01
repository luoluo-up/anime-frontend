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
// 引入图片  
import img1 from '../assets/images/home/1.jpg';
import img2 from '../assets/images/home/2.jpg';
import img3 from '../assets/images/home/3.jpg';
import img4 from '../assets/images/home/4.jpg';
import img5 from '../assets/images/home/5.jpg';
import img6 from '../assets/images/home/6.jpg';
import img7 from '../assets/images/home/7.jpg';
import img8 from '../assets/images/home/8.jpg';

// 账户信息  
const info = ref([{
    title: '约会大作战VI',
    tips: '2.9',
    imgUrl: img1
}, {
    title: '约会大作战V',
    tips: '1.9',
    imgUrl: img2
}, {
    title: '约会大作战IV',
    tips: '2.19',
    imgUrl: img3
}, {
    title: '约会大作战III',
    tips: '3.21',
    imgUrl: img4
}, {
    title: '约会大作战II',
    tips: '6.1',
    imgUrl: img5
}, {
    title: '约会大作战',
    tips: '1.1',
    imgUrl: img6
}, {
    title: '约会大作战OVA',
    tips: '3.1',
    imgUrl: img7
}, {
    title: '约会大作战外传',
    tips: '3.1',
    imgUrl: img8
}]);
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