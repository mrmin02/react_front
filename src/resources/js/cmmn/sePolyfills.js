/**
 * startsWith
 */
if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(searchString, position) {
		position = position || 0;
		return this.indexOf(searchString, position) === position;
	};
}

/**
 * endsWith
 */
if (!String.prototype.endsWith) {
	String.prototype.endsWith = function(searchString, position) {
		var subjectString = this.toString();
		if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
			position = subjectString.length;
		}
		position -= searchString.length;
		var lastIndex = subjectString.indexOf(searchString, position);
		return lastIndex !== -1 && lastIndex === position;
	};
}

/**
 * closest
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector ||
		Element.prototype.webkitMatchesSelector;
}
if (!Element.prototype.closest) {
	Element.prototype.closest = function(s) {
		var el = this;

		do {
			if (el.matches(s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);
		return null;
	};
}

/**
 * 천단위 콤마찍기 - 숫자 타입에서 쓸 수 있도록 format() 함수 추가
 * @returns {*}
 */
if(!Number.prototype.format) {
	Number.prototype.format = function(){
		if(this==0) return 0;

		var reg = /(^[+-]?\d+)(\d{3})/;
		var n = (this + '');

		while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

		return n;
	};
}

/**
 * 천단위 콤마찍기 - 문자열 타입에서 쓸 수 있도록 format() 함수 추가
 * @returns {*}
 */
if(!String.prototype.format) {
	String.prototype.format = function(){
		var num = parseFloat(this);
		if( isNaN(num) ) return "0";

		return num.format();
	};
}

