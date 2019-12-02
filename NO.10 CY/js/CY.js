
/*轮播*/
$(function() {
				var num = 0;
				$(".right").click(function() {
					num++;
					if (num === $(".lunbo>ul>li").length) {
						num = 0;
					}
					$(".lunbo li").eq(num).fadeIn().siblings("li").fadeOut();
					$(".box li").eq(num).addClass("show").siblings("li").removeClass("show");
				});

				$(".left").on("click", function() {
					num--;
					if (num === -1) {
						num = $(".lunbo>ul>li").length - 1;
					}
					$(".lunbo li").eq(num).fadeIn().siblings("li").fadeOut();
					$(".box li").eq(num).addClass("show").siblings("li").removeClass("show");
				});

				$(".box li").on("click", function() {
					var idx = $(this).index();
					$(".lunbo li").eq(idx).fadeIn().siblings("li").fadeOut();
					$(".box li").eq(idx).addClass("show").siblings("li").removeClass("show");
				});
				
				setInterval(function(){
					$(".right").click();
				},2500);
			});
