$(document).ready(function() {
  $('ul.nav-tabs li').click(function(event){
    $('li').removeClass('active')
    $('div').removeClass('active')
    $(this).addClass('active')
    var id = $(this).children('a').attr('href').replace(/\//,'')
    console.log('id', id)
    $('div' + id).addClass('active')
  })
})