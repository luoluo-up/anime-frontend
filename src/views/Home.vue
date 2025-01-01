<template>
    <NavBar />
    <Swiper />
    <SmallTopic title="每周看点儿啥" :show="true" :info="info" />
    <SmallTopic title="有啥推荐捏" :info="info1" />
    <SmallTopic title="热乎的新番" :info="info2" />
    <SmallTopic title="专题模块" />
    <SmallTopic title="刚上架的BD动画" :info="info3" />
    <div class="link">
        <h1>友情链接</h1>
        <a href="http://bilibili.com" target="_blank" rel="noopener noreferrer">哔哩哔哩</a>
    </div>
</template>
<script setup>
import NavBar from '../components/nav-bar.vue';
import Swiper from '../components/swiper.vue';
import SmallTopic from '../components/small-topic.vue';
import { ref } from 'vue'
const info = ref([{
    title: '约会大作战VI',
    tips: '2.9',
    imgUrl: require('../assets/images/home/1.jpg')
}, {
    title: '约会大作战V',
    tips: '1.9',
    imgUrl: require('../assets/images/home/2.jpg')
}, {
    title: '约会大作战IV',
    tips: '2.19',
    imgUrl: require('../assets/images/home/3.jpg')
}, {
    title: '约会大作战III',
    tips: '3.21',
    imgUrl: require('../assets/images/home/4.jpg')
}, {
    title: '约会大作战II',
    tips: '6.1',
    imgUrl: require('../assets/images/home/5.jpg')
}, {
    title: '约会大作战',
    tips: '1.1',
    imgUrl: require('../assets/images/home/6.jpg')
}, {
    title: '约会大作战OVA',
    tips: '3.1',
    imgUrl: require('../assets/images/home/7.jpg')
}, {
    title: '约会大作战外传',
    tips: '3.1',
    imgUrl: require('../assets/images/home/8.jpg')
}]);

// 随机打乱数组并选择前四项  
const shuffleAndSelect = (array) => {
    const arrayCopy = [...array]; // 创建数组的副本  
    const shuffled = arrayCopy.sort(() => Math.random() - 0.5); // 打乱副本  
    return shuffled.slice(0, 4); // 选择前四项  
};

const info1 = ref(shuffleAndSelect(info.value)); // 生成 info1  
// 生成可用图片数组  
const availableImages = Array.from({ length: 10 }, (_, i) => `../src/assets/images/home/${i + 1}.jpg`);

// 生成 info2，包含 10 项内容，每项使用所有图片  
const generateInfo2 = () => {
    const info2 = [];
    for (let i = 0; i < availableImages.length; i++) {
        info2.push({
            title: `约会大作战 ${i + 1}`,
            tips: `${i + 1}.0`,
            imgUrl: availableImages[i] // 使用所有图片  
        });
    }
    return info2;
};

// 生成 info2  
const info2 = ref(generateInfo2());


// 生成 info3，包含 15 项内容，随机选择图片  
const generateInfo3 = () => {
    const info3 = [];
    for (let i = 0; i < 15; i++) {
        const randomImage = availableImages[Math.floor(Math.random() * availableImages.length)];
        info3.push({
            title: `约会大作战 ${i + 1}`,
            tips: `${(i % 10) + 1}.0`, // 生成循环的 tips 值  
            imgUrl: randomImage // 随机选择图片  
        });
    }
    return info3;
};

// 生成 info3  
const info3 = ref(generateInfo3());  
</script>
<style scoped lang="scss">
.link {
    margin: 0 0.625rem;
    padding-bottom: 20px;
}
</style>