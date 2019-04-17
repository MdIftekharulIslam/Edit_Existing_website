$('.product-name[data-type="vitamin"]').css('background-color','#0ee5e6');

$('.product-name[data-type="mineralwater"]').css('background-color','#686b05');

$('.product-name[data-type="proteinbar"]').css('background-color', '#078406');

$('.produc-list').css('cursor', 'pointer');

$('.navbar a[href*="#"]').on('click', function (event) {
   event.preventDefault();

   $('html, body').animate({
       scrollTop: $($.attr(this, 'href')).offset().top
   }, 500);
 });

 var x = $('#history').clone().prop({'id' : 'history-clone'})
 $('#history').after(x)
   $('#history-clone p').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Enim ut sem viverra aliquet eget sit amet tellus. Vitae semper quis lectus nulla at volutpat diam ut. Amet nisl purus in mollis nunc sed. Varius quam quisque id diam vel quam elementum pulvinar etiam. Vitae et leo duis ut diam quam nulla porttitor massa. Turpis massa sed elementum tempus egestas sed sed. Pellentesque pulvinar pellentesque habitant morbi tristique. Est ultricies integer quis auctor elit sed vulputate mi. In metus vulputate eu scelerisque felis imperdiet. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Urna condimentum mattis pellentesque id. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Fermentum leo vel orci porta non pulvinar neque. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Aliquam sem et tortor consequat id porta nibh. In hac habitasse platea dictumst quisque sagittis.')

   $('#history-clone').css('background-color','#9e9e9e')

   $(document).ready(function() {
       var slickScript = document
   })
