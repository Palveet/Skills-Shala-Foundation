
// Smooth Easing
jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	}
});

// Smooth Scrolling
$(".smooth").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
		}, 2000, 'easeInOutQuint');
});
