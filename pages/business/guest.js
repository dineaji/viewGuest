function heightSync(elem){
    var $heightSyncElem = $(elem);
    if(!$heightSyncElem.length){
    	return;
    }
    var max = -1;
    $($heightSyncElem).css('height','auto');
    $.each($heightSyncElem, function (key,item) {
        var height = $(item).height(); 
            max = height > max ? height : max;
            console.log(max)
    });
    $($heightSyncElem).css('height',max+'px');
}

$(".nav-tabs-custom li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.nav-tabs-custom').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});

document.addEventListener('DOMContentLoaded', function () {
    heightSync(".detail-overview>li")
}, false);

$(window).on('resize',function(){
	heightSync(".detail-overview>li")
})