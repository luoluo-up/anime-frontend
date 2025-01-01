<template>
    <div class="container">
        <div class="sidebar">
            <div class="user-info">
                <div class="avatar">
                    <img src="../assets/images/avatar.jpg" alt="" srcset="">
                </div>
                <div class="username">ohsehun</div>
                <div class="membership">默认会员</div>
                <div class="points">积分：0</div>
                <button class="sign-button">打卡签到</button>
            </div>
            <ul class="menu">
                <li>会员首页</li>
                <li>我的收藏</li>
                <li>播放记录</li>
                <li>充值记录</li>
                <li>退出账号</li>
            </ul>
        </div>
        <div class="content">
            <h2>账户信息</h2>
            <div class="info-item">
                <label>账号</label>
                <input type="text" value="ohsehun" readonly />
            </div>
            <div class="info-item">
                <label>用户组</label>
                <input type="text" value="默认会员" readonly />
            </div>
            <div class="info-item">
                <label>会员期限</label>
                <input type="text" value="" readonly />
            </div>
            <div class="info-item">
                <label>注册时间</label>
                <input type="text" value="2024-11-02 18:25:50" readonly />
            </div>
            <div class="info-item">
                <label>登录IP</label>
                <input type="text" value="46.232.48.6" readonly />
            </div>
            <div class="info-item">
                <label>登录时间</label>
                <input type="text" value="2024-12-26 19:30:24" readonly />
            </div>
            <div class="info-item">
                <label>账户积分</label>
                <input type="text" value="0" readonly />
            </div>
            <div class="info-item">
                <label>昵称</label>
                <input type="text" value="" readonly />
            </div>
            <div class="info-item">
                <label>原始密码</label>
                <input type="password" value="••••••••••" readonly />
            </div>
            <div class="info-item">
                <label>新密码（不修改请留空）</label>
                <input type="password" />
            </div>
            <div class="info-item">
                <label>重复密码</label>
                <input type="password" />
            </div>
            <div class="info-item">
                <label>QQ号码</label>
                <input type="text" value="" />
            </div>
            <div class="info-item">
                <label>邮箱[绑定]</label>
                <input type="text" value="ohsehun" />
            </div>
            <div class="info-item">
                <label>手机[绑定]</label>
                <input type="text" value="" />
            </div>
            <div class="info-item">
                <label>找回密码问题</label>
                <input type="text" value="" />
            </div>
            <div class="info-item">
                <label>找回密码答案</label>
                <input type="text" value="" />
            </div>
            <button class="save-button">保存</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserProfile',
};  
</script>

<style scoped>
.container {
    display: flex;
    padding: 20px;
    background-color: #f9f9f9;
    padding-top: 80px;
}

.sidebar {
    width: 250px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.user-info {
    text-align: center;
    margin-bottom: 20px;
}

.avatar {
    width: 80px;
    height: 80px;
    background-color: #f0a500;
    border-radius: 50%;
    margin: 0 auto;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.username {
    font-size: 20px;
    font-weight: bold;
}

.membership,
.points {
    margin: 5px 0;
}

.sign-button {
    background-color: #f0a500;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.menu {
    list-style: none;
    padding: 0;
}

.menu li {
    padding: 10px 0;
    cursor: pointer;
    text-align: center;
}

.content {
    flex: 1;
    margin-left: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.info-item {
    margin-bottom: 15px;
}

.info-item label {
    display: block;
    margin-bottom: 5px;
}

.info-item input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.save-button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
</style>