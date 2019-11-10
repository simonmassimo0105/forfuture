$(function() {
    $('#title').on('mouseover', function() {
        $(this).text('About Me');
    })
    $('#title').on('mouseleave', function() {
        $(this).text('Profile');
    })
});