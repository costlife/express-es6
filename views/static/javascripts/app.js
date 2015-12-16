$(function () {

    var $form = $('.j-form').on('submit', function (e) {
        e.preventDefault();
    });

    var $username = $('[name=username]').on('keyup', function (e) {
        if (e.keyCode === 13) {
            $btnAdd.trigger('click');
        }
    });

    var $btnAdd = $('.j-add').on('click', function (e) {
        $.post('userAdd', {
            username: $username.val()
        }, function (resp) {
            var html = '<tr><td>' + resp.user.username + '</td></tr>';
            $('.j-table tbody').append(html);
            $username.val('');
        });
    });

    var $btnDel = $('.j-del').on('click', function (e) {
        $.post('userDel', {
        }, function (resp) {
            $('.j-table tbody').html('');
        });
    });
});