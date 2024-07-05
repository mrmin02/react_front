(function(root, $) {

	'use strict';

	$.fn.ellipsis = function() {
		return this.each(function() {
			var $this = $(this),
				isOverflow = $this.css('overflow') === 'hidden';

			if (isOverflow) {
				var text = $this.text(),
					lh = parseInt($this.css('line-height')),
					line = $this.attr('data-ellipsis'),
					maxHeight = lh * line;

				if(!maxHeight) {
					if(!lh) {
						console.error("ellipsis.js 에러: 요소에 line-height 속성을 추가하십시오.");
					}else if(!line) {
						console.error("ellipsis.js 에러: 요소에 data-ellipsis 속성을 추가하십시오.")
					}
				}else {
					for (var i = text.length; i > 0; i--) {
						if ($this.height() <= maxHeight) {
							break;
						} else {
							$this.text(text.substr(0, i) + '...');
						}
					}
				}
			}else {
				console.error("ellipsis.js 에러: 요소에 overflow: hidden 속성을 추가하십시오.");
			}
		});
	};
}(window, jQuery));