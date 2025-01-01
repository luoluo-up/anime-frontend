<template>
    <div class="category">
        <div class="box-width ec-ad">
            <a style="padding-top:20px" href="#" target="_blank">
                <img class="slide-pc" src="../assets/images/TV/2.jpg" alt="展示你的位置" />
            </a>
        </div>
        <div class="ec-casc-list box-width">
            <div class="top20" style="overflow: hidden">
                <!-- 频道分类 -->
                <div class="nav-swiper rel">
                    <div class="filter-text bj cor5">
                        <span>频道</span>
                    </div>
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide nav-dt" :class="{ active: selectedChannel === '连载新番' }"
                            @click="selectChannel('连载新番')">
                            <a href="javascript:">连载新番</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedChannel === '完结旧番' }"
                            @click="selectChannel('完结旧番')">
                            <a href="javascript:">完结旧番</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedChannel === '剧场版' }"
                            @click="selectChannel('剧场版')">
                            <a href="javascript:">剧场版</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedChannel === '美漫' }"
                            @click="selectChannel('美漫')">
                            <a href="javascript:">美漫</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedChannel === 'I' }"
                            @click="selectChannel('I')">
                            <a href="javascript:">I</a>
                        </li>
                    </ul>
                </div>

                <!-- 类型分类 -->
                <div class="nav-swiper rel">
                    <div class="filter-text bj cor5">
                        <span>类型</span>
                    </div>
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide nav-dt" :class="{ active: selectedType === '全部' }"
                            @click="selectType('全部')">
                            <a href="javascript:">全部</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '搞笑' }" @click="selectType('搞笑')">
                            <a href="javascript:">搞笑</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '原创' }" @click="selectType('原创')">
                            <a href="javascript:">原创</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '轻小说改' }"
                            @click="selectType('轻小说改')">
                            <a href="javascript:">轻小说改</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '恋爱' }" @click="selectType('恋爱')">
                            <a href="javascript:">恋爱</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '百合' }" @click="selectType('百合')">
                            <a href="javascript:">百合</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '漫改' }" @click="selectType('漫改')">
                            <a href="javascript:">漫改</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '校园' }" @click="selectType('校园')">
                            <a href="javascript:">校园</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '战斗' }" @click="selectType('战斗')">
                            <a href="javascript:">战斗</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '治愈' }" @click="selectType('治愈')">
                            <a href="javascript:">治愈</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '奇幻' }" @click="selectType('奇幻')">
                            <a href="javascript:">奇幻</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '日常' }" @click="selectType('日常')">
                            <a href="javascript:">日常</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '青春' }" @click="selectType('青春')">
                            <a href="javascript:">青春</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '乙女向' }" @click="selectType('乙女向')">
                            <a href="javascript:">乙女向</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '悬疑' }" @click="selectType('悬疑')">
                            <a href="javascript:">悬疑</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '后宫' }" @click="selectType('后宫')">
                            <a href="javascript:">后宫</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '科幻' }" @click="selectType('科幻')">
                            <a href="javascript:">科幻</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '冒险' }" @click="selectType('冒险')">
                            <a href="javascript:">冒险</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '热血' }" @click="selectType('热血')">
                            <a href="javascript:">热血</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '异世界' }" @click="selectType('异世界')">
                            <a href="javascript:">异世界</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '游戏改' }" @click="selectType('游戏改')">
                            <a href="javascript:">游戏改</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '音乐' }" @click="selectType('音乐')">
                            <a href="javascript:">音乐</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '偶像' }" @click="selectType('偶像')">
                            <a href="javascript:">偶像</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '美食' }" @click="selectType('美食')">
                            <a href="javascript:">美食</a>
                        </li>
                        <li class="swiper-slide" :class="{ active: selectedType === '耽美' }" @click="selectType('耽美')">
                            <a href="javascript:">耽美</a>
                        </li>
                    </ul>
                </div>

                <!-- 地区分类 -->
                <div class="nav-swiper rel">
                    <div class="filter-text bj cor5">
                        <span>地区</span>
                    </div>
                    <ul class="swiper-wrapper">
                        <li data-type="area" data-val="" class="swiper-slide nav-dt"
                            :class="{ active: selectedArea === '' }" @click="selectArea('')">
                            <a href="javascript:">全部</a>
                        </li>
                        <li data-type="area" data-val="日本" class="swiper-slide"
                            :class="{ active: selectedArea === '日本' }" @click="selectArea('日本')">
                            <a href="javascript:">日本</a>
                        </li>
                    </ul>
                </div>

                <!-- 年份分类 -->
                <div class="nav-swiper rel">
                    <div class="filter-text bj cor5">
                        <span>年份</span>
                    </div>
                    <ul class="swiper-wrapper">
                        <li data-type="year" data-val="" class="swiper-slide nav-dt"
                            :class="{ active: selectedYear === '' }" @click="selectYear('')">
                            <a href="javascript:">全部</a>
                        </li>
                        <li data-type="year" data-val="2024" class="swiper-slide"
                            :class="{ active: selectedYear === '2024' }" @click="selectYear('2024')">
                            <a href="javascript:">2024</a>
                        </li>
                        <li data-type="year" data-val="2023" class="swiper-slide"
                            :class="{ active: selectedYear === '2023' }" @click="selectYear('2023')">
                            <a href="javascript:">2023</a>
                        </li>
                        <li data-type="year" data-val="2022" class="swiper-slide"
                            :class="{ active: selectedYear === '2022' }" @click="selectYear('2022')">
                            <a href="javascript:">2022</a>
                        </li>
                        <li data-type="year" data-val="2021" class="swiper-slide"
                            :class="{ active: selectedYear === '2021' }" @click="selectYear('2021')">
                            <a href="javascript:">2021</a>
                        </li>
                        <li data-type="year" data-val="2020" class="swiper-slide"
                            :class="{ active: selectedYear === '2020' }" @click="selectYear('2020')">
                            <a href="javascript:">2020</a>
                        </li>
                        <li data-type="year" data-val="2019" class="swiper-slide"
                            :class="{ active: selectedYear === '2019' }" @click="selectYear('2019')">
                            <a href="javascript:">2019</a>
                        </li>
                        <li data-type="year" data-val="2018" class="swiper-slide"
                            :class="{ active: selectedYear === '2018' }" @click="selectYear('2018')">
                            <a href="javascript:">2018</a>
                        </li>
                        <li data-type="year" data-val="2017" class="swiper-slide"
                            :class="{ active: selectedYear === '2017' }" @click="selectYear('2017')">
                            <a href="javascript:">2017</a>
                        </li>
                        <li data-type="year" data-val="2016" class="swiper-slide"
                            :class="{ active: selectedYear === '2016' }" @click="selectYear('2016')">
                            <a href="javascript:">2016</a>
                        </li>
                        <li data-type="year" data-val="2015" class="swiper-slide"
                            :class="{ active: selectedYear === '2015' }" @click="selectYear('2015')">
                            <a href="javascript:">2015</a>
                        </li>
                        <li data-type="year" data-val="2014" class="swiper-slide"
                            :class="{ active: selectedYear === '2014' }" @click="selectYear('2014')">
                            <a href="javascript:">2014</a>
                        </li>
                        <li data-type="year" data-val="2013" class="swiper-slide"
                            :class="{ active: selectedYear === '2013' }" @click="selectYear('2013')">
                            <a href="javascript:">2013</a>
                        </li>
                        <li data-type="year" data-val="2012" class="swiper-slide"
                            :class="{ active: selectedYear === '2012' }" @click="selectYear('2012')">
                            <a href="javascript:">2012</a>
                        </li>
                        <li data-type="year" data-val="2011" class="swiper-slide"
                            :class="{ active: selectedYear === '2011' }" @click="selectYear('2011')">
                            <a href="javascript:">2011</a>
                        </li>
                        <li data-type="year" data-val="2010" class="swiper-slide"
                            :class="{ active: selectedYear === '2010' }" @click="selectYear('2010')">
                            <a href="javascript:">2010</a>
                        </li>
                        <li data-type="year" data-val="2009" class="swiper-slide"
                            :class="{ active: selectedYear === '2009' }" @click="selectYear('2009')">
                            <a href="javascript:">2009</a>
                        </li>
                        <li data-type="year" data-val="2008" class="swiper-slide"
                            :class="{ active: selectedYear === '2008' }" @click="selectYear('2008')">
                            <a href="javascript:">2008</a>
                        </li>
                        <li data-type="year" data-val="2007" class="swiper-slide"
                            :class="{ active: selectedYear === '2007' }" @click="selectYear('2007')">
                            <a href="javascript:">2007</a>
                        </li>
                        <li data-type="year" data-val="2006" class="swiper-slide"
                            :class="{ active: selectedYear === '2006' }" @click="selectYear('2006')">
                            <a href="javascript:">2006</a>
                        </li>
                        <li data-type="year" data-val="2005" class="swiper-slide"
                            :class="{ active: selectedYear === '2005' }" @click="selectYear('2005')">
                            <a href="javascript:">2005</a>
                        </li>
                    </ul>
                </div>

                <!-- 语言分类 -->
                <div class="nav-swiper rel">
                    <div class="filter-text bj cor5">
                        <span>语言</span>
                    </div>
                    <ul class="swiper-wrapper">
                        <li data-type="lang" data-val="" class="swiper-slide nav-dt"
                            :class="{ active: selectedLang === '' }" @click="selectLang('')">
                            <a href="javascript:">全部</a>
                        </li>
                        <li data-type="lang" data-val="日语" class="swiper-slide"
                            :class="{ active: selectedLang === '日语' }" @click="selectLang('日语')">
                            <a href="javascript:">日语</a>
                        </li>
                    </ul>
                </div>

                <!-- 版本分类 -->
                <div class="nav-swiper rel">
                    <div class="filter-text bj cor5">
                        <span>版本</span>
                    </div>
                    <ul class="swiper-wrapper">
                        <li data-type="version" data-val="" class="swiper-slide nav-dt"
                            :class="{ active: selectedVersion === '' }" @click="selectVersion('')">
                            <a href="javascript:">全部</a>
                        </li>
                        <li data-type="version" data-val="TV" class="swiper-slide"
                            :class="{ active: selectedVersion === 'TV' }" @click="selectVersion('TV')">
                            <a href="javascript:">TV</a>
                        </li>
                        <li data-type="version" data-val="TC" class="swiper-slide"
                            :class="{ active: selectedVersion === 'TC' }" @click="selectVersion('TC')">
                            <a href="javascript:">TC</a>
                        </li>
                        <li data-type="version" data-val="OVA" class="swiper-slide"
                            :class="{ active: selectedVersion === 'OVA' }" @click="selectVersion('OVA')">
                            <a href="javascript:">OVA</a>
                        </li>
                        <li data-type="version" data-val="SP" class="swiper-slide"
                            :class="{ active: selectedVersion === 'SP' }" @click="selectVersion('SP')">
                            <a href="javascript:">SP</a>
                        </li>
                        <li data-type="version" data-val="OAD" class="swiper-slide"
                            :class="{ active: selectedVersion === 'OAD' }" @click="selectVersion('OAD')">
                            <a href="javascript:">OAD</a>
                        </li>
                    </ul>
                </div>

                <!-- 资源分类 -->
                <div class="nav-swiper rel">
                    <div class="filter-text bj cor5">
                        <span>资源</span>
                    </div>
                    <ul class="swiper-wrapper">
                        <li data-type="state" data-val="" class="swiper-slide nav-dt"
                            :class="{ active: selectedState === '' }" @click="selectState('')">
                            <a href="javascript:">全部</a>
                        </li>
                        <li data-type="state" data-val="正片" class="swiper-slide"
                            :class="{ active: selectedState === '正片' }" @click="selectState('正片')">
                            <a href="javascript:">正片</a>
                        </li>
                        <li data-type="state" data-val="预告片" class="swiper-slide"
                            :class="{ active: selectedState === '预告片' }" @click="selectState('预告片')">
                            <a href="javascript:">预告片</a>
                        </li>
                        <li data-type="state" data-val="花絮" class="swiper-slide"
                            :class="{ active: selectedState === '花絮' }" @click="selectState('花絮')">
                            <a href="javascript:">花絮</a>
                        </li>
                    </ul>
                </div>

                <!-- 字母
                                    <!-- 字母分类 -->
                <div class="nav-swiper rel">
                    <div class="filter-text bj cor5">
                        <span>字母</span>
                    </div>
                    <ul class="swiper-wrapper">
                        <li data-type="letter" data-val="" class="swiper-slide nav-dt"
                            :class="{ active: selectedLetter === '' }" @click="selectLetter('')">
                            <a href="javascript:">全部</a>
                        </li>
                        <li data-type="letter" data-val="A" class="swiper-slide"
                            :class="{ active: selectedLetter === 'A' }" @click="selectLetter('A')">
                            <a href="javascript:">A</a>
                        </li>
                        <li data-type="letter" data-val="B" class="swiper-slide"
                            :class="{ active: selectedLetter === 'B' }" @click="selectLetter('B')">
                            <a href="javascript:">B</a>
                        </li>
                        <li data-type="letter" data-val="C" class="swiper-slide"
                            :class="{ active: selectedLetter === 'C' }" @click="selectLetter('C')">
                            <a href="javascript:">C</a>
                        </li>
                        <li data-type="letter" data-val="D" class="swiper-slide"
                            :class="{ active: selectedLetter === 'D' }" @click="selectLetter('D')">
                            <a href="javascript:">D</a>
                        </li>
                        <li data-type="letter" data-val="E" class="swiper-slide"
                            :class="{ active: selectedLetter === 'E' }" @click="selectLetter('E')">
                            <a href="javascript:">E</a>
                        </li>
                        <li data-type="letter" data-val="F" class="swiper-slide"
                            :class="{ active: selectedLetter === 'F' }" @click="selectLetter('F')">
                            <a href="javascript:">F</a>
                        </li>
                        <li data-type="letter" data-val="G" class="swiper-slide"
                            :class="{ active: selectedLetter === 'G' }" @click="selectLetter('G')">
                            <a href="javascript:">G</a>
                        </li>
                        <li data-type="letter" data-val="H" class="swiper-slide"
                            :class="{ active: selectedLetter === 'H' }" @click="selectLetter('H')">
                            <a href="javascript:">H</a>
                        </li>
                        <li data-type="letter" data-val="I" class="swiper-slide"
                            :class="{ active: selectedLetter === 'I' }" @click="selectLetter('I')">
                            <a href="javascript:">I</a>
                        </li>
                        <li data-type="letter" data-val="J" class="swiper-slide"
                            :class="{ active: selectedLetter === 'J' }" @click="selectLetter('J')">
                            <a href="javascript:">J</a>
                        </li>
                        <li data-type="letter" data-val="K" class="swiper-slide"
                            :class="{ active: selectedLetter === 'K' }" @click="selectLetter('K')">
                            <a href="javascript:">K</a>
                        </li>
                        <li data-type="letter" data-val="L" class="swiper-slide"
                            :class="{ active: selectedLetter === 'L' }" @click="selectLetter('L')">
                            <a href="javascript:">L</a>
                        </li>
                        <li data-type="letter" data-val="M" class="swiper-slide"
                            :class="{ active: selectedLetter === 'M' }" @click="selectLetter('M')">
                            <a href="javascript:">M</a>
                        </li>
                        <li data-type="letter" data-val="N" class="swiper-slide"
                            :class="{ active: selectedLetter === 'N' }" @click="selectLetter('N')">
                            <a href="javascript:">N</a>
                        </li>
                        <li data-type="letter" data-val="O" class="swiper-slide"
                            :class="{ active: selectedLetter === 'O' }" @click="selectLetter('O')">
                            <a href="javascript:">O</a>
                        </li>
                        <li data-type="letter" data-val="P" class="swiper-slide"
                            :class="{ active: selectedLetter === 'P' }" @click="selectLetter('P')">
                            <a href="javascript:">P</a>
                        </li>
                        <li data-type="letter" data-val="Q" class="swiper-slide"
                            :class="{ active: selectedLetter === 'Q' }" @click="selectLetter('Q')">
                            <a href="javascript:">Q</a>
                        </li>
                        <li data-type="letter" data-val="R" class="swiper-slide"
                            :class="{ active: selectedLetter === 'R' }" @click="selectLetter('R')">
                            <a href="javascript:">R</a>
                        </li>
                        <li data-type="letter" data-val="S" class="swiper-slide"
                            :class="{ active: selectedLetter === 'S' }" @click="selectLetter('S')">
                            <a href="javascript:">S</a>
                        </li>
                        <li data-type="letter" data-val="T" class="swiper-slide"
                            :class="{ active: selectedLetter === 'T' }" @click="selectLetter('T')">
                            <a href="javascript:">T</a>
                        </li>
                        <li data-type="letter" data-val="U" class="swiper-slide"
                            :class="{ active: selectedLetter === 'U' }" @click="selectLetter('U')">
                            <a href="javascript:">U</a>
                        </li>
                        <li data-type="letter" data-val="V" class="swiper-slide"
                            :class="{ active: selectedLetter === 'V' }" @click="selectLetter('V')">
                            <a href="javascript:">V</a>
                        </li>
                        <li data-type="letter" data-val="W" class="swiper-slide"
                            :class="{ active: selectedLetter === 'W' }" @click="selectLetter('W')">
                            <a href="javascript:">W</a>
                        </li>
                        <li data-type="letter" data-val="X" class="swiper-slide"
                            :class="{ active: selectedLetter === 'X' }" @click="selectLetter('X')">
                            <a href="javascript:">X</a>
                        </li>
                        <li data-type="letter" data-val="Y" class="swiper-slide"
                            :class="{ active: selectedLetter === 'Y' }" @click="selectLetter('Y')">
                            <a href="javascript:">Y</a>
                        </li>
                        <li data-type="letter" data-val="Z" class="swiper-slide"
                            :class="{ active: selectedLetter === 'Z' }" @click="selectLetter('Z')">
                            <a href="javascript:">Z</a>
                        </li>
                        <li data-type="letter" data-val="0-9" class="swiper-slide"
                            :class="{ active: selectedLetter === '0-9' }" @click="selectLetter('0-9')">
                            <a href="javascript:">0-9</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="page-whole top20">
                <div class="site-tabs b-b br">
                    <a data-type="time" class="active" href="javascript:">按最新</a>
                    <a data-type="hits" href="javascript:">按最热</a>
                    <a data-type="score" href="javascript:">按评分</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedChannel = ref('');
const selectedType = ref('');
const selectedArea = ref('');
const selectedYear = ref('');
const selectedLang = ref('');
const selectedVersion = ref('');
const selectedState = ref('');
const selectedLetter = ref('');

const selectChannel = (channel) => {
    selectedChannel.value = channel;
};

const selectType = (type) => {
    selectedType.value = type;
};

const selectArea = (area) => {
    selectedArea.value = area;
};

const selectYear = (year) => {
    selectedYear.value = year;
};

const selectLang = (lang) => {
    selectedLang.value = lang;
};

const selectVersion = (version) => {
    selectedVersion.value = version;
};

const selectState = (state) => {
    selectedState.value = state;
};

const selectLetter = (letter) => {
    selectedLetter.value = letter;
};  
</script>

<style scoped lang="scss">
.category {
    width: 100%;
    padding: 0 4.5rem;

    .box-width {
        max-width: 100%;
        margin: 0 auto;
    }

    .ec-ad {
        text-align: center;
        margin-bottom: 20px;

        .slide-pc {
            object-fit: cover;
            width: 100%;
            height: 30vh;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
    }

    .nav-swiper {
        display: flex;
        align-items: center;

        .filter-text {
            font-weight: bold;
        }

        .swiper-wrapper {
            display: flex;
            overflow-x: auto;
            font-size: .9rem;
        }

        .swiper-slide {
            margin-right: 10px;
            cursor: pointer;
            transition: all .3s ease-in-out;

            a {
                text-decoration: none;
                // color: #333;
            }

            &.active {
                background-color: #da6b81;
                /* 粉色背景 */
                color: #fff;
                /* 字体变成白色 */
                border-radius: 5px;
                /* 圆角效果 */
                padding: 5px 10px;

                a {
                    color: #fff;
                }
            }
        }
    }

    .site-tabs {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;

        a {
            padding: 10px 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            color: #333;
            text-decoration: none;

            &.active {
                background-color: #da6b81;
                color: #fff;
            }
        }
    }
}
</style>