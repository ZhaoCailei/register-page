document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('registerBtn');
    if(btn) {
        btn.addEventListener('click', () => {
            const user = document.getElementById('username').value;
            const pwd = document.getElementById('password').value;
            const confirmPwd = document.getElementById('confirmPwd').value;
            
            if(!user || !pwd || !confirmPwd) {
                alert('请填写完整信息');
                return;
            }
            if(pwd !== confirmPwd) {
                alert('两次密码不一致');
                return;
            }
            alert('注册成功！');
        });
    }
});