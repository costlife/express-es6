$(function () {

    var action = $('#ACTION_LINK').data('action');

    var $form = $('.j-form').on('submit', function (e) {
        e.preventDefault();
    });

    var $username = $('[name=username]').on('keyup', function (e) {
        if (e.keyCode === 13) {
            $btnAdd.trigger('click');
        }
    });

    var $btnAdd = $('.j-add').on('click', function (e) {
        $.post('api/' + action + '/add', {
            username: $username.val()
        }, function (resp) {
            var html = '<tr><td>' + resp.user.username + '</td></tr>';
            $('.j-table tbody').append(html);
            $username.val('');
        });
    });

    var $btnClear = $('.j-clear').on('click', function (e) {
        $.post('api/' + action + '/clear', {
        }, function (resp) {
            $('.j-table tbody').html('');
        });
    });
    
});