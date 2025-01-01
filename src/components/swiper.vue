<template>
    <div class="slider">
        <div class="slide" :style="currentSlideStyle"></div>
        <div class="dots">
            <span v-for="(image, index) in images" :key="index" class="dot" :class="{ active: currentIndex === index }"
                @click="goToSlide(index)"></span>
        </div>
    </div>
    <div class="info">
        <h2 class="title">{{ currentFilm.title }}</h2>
        <p class="description">{{ currentFilm.description }}</p>
        <p class="type">{{ currentFilm.type }}</p>
        <button @click="$router.push('/detail')" class="play-button"><i class="iconfont icon-lianxi2hebing-10"></i>
            立即播放</button>
        <span @click="$router.push('/detail')" class="detail about-fan">影片详情</span>
        <i class="iconfont icon-shoucang about-fan"></i>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

// 使用 import.meta.url 导入图片  
const images = [
    new URL('../assets/images/home/1.jpg', import.meta.url).href,
    new URL('../assets/images/home/2.jpg', import.meta.url).href,
    new URL('../assets/images/home/3.jpg', import.meta.url).href,
    new URL('../assets/images/home/4.jpg', import.meta.url).href,
    new URL('../assets/images/home/5.jpg', import.meta.url).href,
    new URL('../assets/images/home/6.jpg', import.meta.url).href
];

// 影片信息数组  
const films = [
    {
        title: "约会大作战I",
        description: "在这个充满异世界冒险的故事中，主人公五河士道被赋予了拯救精灵的使命。他必须与各种各样的美少女精灵们展开约会，以获得她们的力量。每一次约会都是一次挑战，士道不仅要面对精灵们的个性，还要解决她们的过去与烦恼。",
        type: "动画，爱情，奇幻"
    },
    {
        title: "约会大作战II",
        description: "五河士道继续他的约会之旅，这一次他遇到了新的精灵和更强大的敌人。随着士道的约会次数增加，他逐渐发现这些精灵背后的秘密，以及她们与世界的联系。士道必须在爱情与责任之间找到平衡。",
        type: "动画，爱情，奇幻"
    },
    {
        title: "约会大作战III",
        description: "在第三季中，士道的约会对象变得更加复杂，新的精灵加入了战斗。士道不仅要面对外部的威胁，还要处理与精灵们之间的情感纠葛。每一次约会都充满了挑战和惊喜。",
        type: "动画，爱情，奇幻"
    },
    {
        title: "约会大作战IV",
        description: "士道的约会之旅进入了新的阶段，随着新角色的加入，故事变得更加紧张。士道必须面对来自过去的敌人，同时也要保护他所爱的精灵们。爱情与战斗交织在一起，士道的选择将影响整个世界。",
        type: "动画，爱情，奇幻"
    },
    {
        title: "约会大作战V",
        description: "在系列的第五部中，士道面临着前所未有的挑战。新的敌人出现，威胁着他与精灵们的关系。士道必须团结所有的精灵，面对即将到来的危机，寻找拯救世界的办法。",
        type: "动画，爱情，奇幻"
    },
    {
        title: "无职转生",
        description: "故事讲述了一名无业中年男子在一次意外中重生到一个魔法与冒险的异世界。他决定不再逃避人生，努力成为一个有用的人。在这个新世界中，他学习魔法，结交朋友，并面对各种挑战，逐渐成长为一个强大的魔法师。",
        type: "动画，奇幻，冒险"
    }
];

const currentIndex = ref(0);
const autoPlay = ref(null);

// 计算当前幻灯片的样式  
const currentSlideStyle = computed(() => {
    return {
        backgroundImage: `url(${images[currentIndex.value]})`,
        backgroundSize: '30vw auto',
        backgroundRepeat: 'repeat',
        width: '100%',
        height: '100%',
        transition: 'background-image 0.5s ease-in-out'
    };
});

// 获取当前影片信息  
const currentFilm = computed(() => films[currentIndex.value]);

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
};

const goToSlide = (index) => {
    currentIndex.value = index;
};

onMounted(() => {
    autoPlay.value = setInterval(nextSlide, 5000);
});  
</script>

<style scoped>
.slider {
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    z-index: 0;
}

.slide {
    width: 100%;
    height: 100%;
}

.dots {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    gap: 10px;
    z-index: 1;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
}

.dot.active {
    background-color: rgba(255, 255, 255, 1);
}

.info {
    position: absolute;
    bottom: 50px;
    left: 20px;
    color: white;
    padding: 10px;
    max-width: 50vw;
    /* 最大宽度为50% */
}

.title {
    font-size: 24px;
    margin: 0;
}

.description {
    margin: 5px 0;
    display: -webkit-box;
    /* 使用盒子模型 */
    -webkit-box-orient: vertical;
    /* 垂直排列 */
    -webkit-line-clamp: 2;
    /* 限制为2行 */
    overflow: hidden;
    /* 隐藏超出部分 */
    text-overflow: ellipsis;
    /* 超出部分用省略号表示 */
}

.type {
    margin: 5px 0;
}

.play-button {
    background-color: #dc6b82;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

.detail {
    margin: 0 10px;
}

.about-fan {
    background-color: rgba(80, 81, 85, 0.5);
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}
</style>