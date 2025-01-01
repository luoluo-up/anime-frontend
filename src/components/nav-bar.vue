<template>
    <div class="navbar">
        <nav>
            <div class="left">
                <div class="avatar">
                    <img src="../assets/images/avatar.jpg" alt="" srcset="" />
                    <span>次元城动漫</span>
                </div>
                <div class="show">
                    <router-link to="/">首页</router-link>
                    <router-link to="/TV">TV动画</router-link>
                    <router-link to="/TV">BD动画</router-link>
                    <router-link to="/TV">剧场版</router-link>
                    <router-link to="/TV">OVA</router-link>
                    <router-link to="/#">更多</router-link>
                </div>
            </div>
            <div class="right">
                <router-link to="/#"><i class="icon-qiandao iconfont"></i></router-link>
                <router-link to="/#"><i class="iconfont icon-sousuo"></i></router-link>
                <router-link to="/#"><i class="iconfont icon-lishi"></i></router-link>
                <router-link to="/myinfo"><i class="iconfont icon-touxiang_avatar"></i></router-link>
                <router-link to="/#" class="show">下载APP</router-link>
                <i class="iconfont icon-hanbao" @click="toggleShow"></i>
            </div>
        </nav>
        <div class="hidden" :class="{ 'is-active': show }">
            <router-link to="/">首页</router-link>
            <router-link to="/#">TV动画</router-link>
            <router-link to="/#">BD动画</router-link>
            <router-link to="/#">剧场版</router-link>
            <router-link to="/#">OVA</router-link>
            <router-link to="/#">更多</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false); // 初始状态为 false  

const toggleShow = () => {
    show.value = !show.value; // 切换 show 的值  
};  
</script>

<style scoped lang="scss">
.navbar {
    position: fixed;
    width: 100%;
    z-index: 2;
}

nav {
    max-height: 15vh;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;

    img {
        margin-top: -0.0625rem;
        width: 1.625rem;
        height: 1.625rem;
        border-radius: 50%;
    }

    .left {
        display: flex;
        align-items: center;

        .avatar {
            display: flex;
            align-items: center;

            gap: 15px;
            margin-right: 20px;

            span {
                font-weight: 600;
                font-size: 0.9rem;
            }
        }

        a {
            margin-right: 20px;
        }
    }

    .right {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            margin-right: 20px;
        }

        a:nth-last-child(3) {
            display: block;
            background-color: #da6b81;
            color: #fff;
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            border-radius: 50%;
        }

        a:nth-last-child(2) {
            background-color: #da6b81;
            color: #ffffff;
            padding: 10px;
            border-radius: 5px;
            font-size: 14px;
        }
    }
}

a {
    font-weight: 600;
    color: #000;

    &:active {
        color: #da6b81;
    }

    &:hover {
        color: #da6b81;
    }
}

.hidden {
    max-height: 0;
    /* 初始状态为隐藏 */
    overflow: hidden;
    /* 隐藏溢出内容 */
    opacity: 0;
    /* 初始透明度 */
    transition: max-height 0.5s ease, opacity 0.5s ease;
    /* 添加过渡效果 */
}

.hidden.is-active {
    max-height: 200px;
    /* 展开后的最大高度，根据内容调整 */
    opacity: 1;
    /* 展开后的透明度 */
}

.icon-hanbao {
    display: none;
}

@media (max-width: 575px) {
    nav {
        padding: 0.5rem;
    }

    .hidden {
        z-index: 5;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        color: #000;

        a {
            margin: 5px auto;
        }
    }

    .icon-hanbao {
        font-weight: 600;
        display: block;
    }

    .show {
        display: none !important;
    }
}
</style>