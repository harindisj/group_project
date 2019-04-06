// Y axis scroll speed
var velocity = 0.5;

function update(){
    var pos = $(window).scrollTop();
    $('.container').each(function() {
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-18;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
    });
};

$(window).bind('scroll', update);

<main>
 <div class="cd-fixed-bg cd-fixed-bg--1">
 </div>

 <div class="cd-scrolling-bg cd-scrolling-bg--color-2"></div>

  <div class="cd-scrolling-bg__content">
       <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore incidunt suscipit similique, dolor corrupti cumque qui consectetur autem laborum fuga quas ipsam doloribus sequi...
       </p>
    </div>
</main>
