$(document).ready(function() {
  $('ul.nav-tabs li').click(function(event){
    event.preventDefault()
    $('li').removeClass('active')
    $('div').removeClass('active')
    $(this).addClass('active')
    var id = $(this).children('a').attr('href').replace(/\//,'')
    $('div' + id).addClass('active')
  })
})
