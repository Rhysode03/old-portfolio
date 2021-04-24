$(document).ready(function () {
    $('h1').slideUp(1200)
    $('h1').slideDown(1200)
    $('h1').fadeOut(1200)
    $('h1').fadeIn(1200)
    $('.description').hide(3000)
    $('.description').show(3000)


    $('.slide').click(function () {
        $('#picture').delay(1000).animate({
            height: '0px',
            width: '0px',
        }, function () {
                $(this).show(3000)
            })
            $('#picture').delay(500).animate({
                height: '600px',
                width: '80%',
            }, function () {
                    $(this).slideUp(3000)
                })
        $('#picture').delay(600).animate({
            height: '600px',
            width: '80%'
        }, function () {
                $(this).slideDown(3000)
        })
    })
})
