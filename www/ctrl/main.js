$(document).ready(function(){
    $('#submit').on('click', function (event) {
        document.location.href('./home.html');
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        var url = 'http://user.ecjtu.net/api/login';
        var user_info = {};
        $.post(url, 
            {'username': username, 'password': password},
            function (data) {
                if (data.result) {
                    user_info.uc_token = data.token;
                    user_info.student_id = username;
                    var storage_support = window.localStorage;
                    if (storage_support)
                        localStorage.setItem(user_info);
                    document.location.href('./home.html');

                } else {
                    $('.helper').text('用户名或密码错误');
                }
            }, 'json');


    })
});