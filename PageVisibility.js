// http://github.com/sole/PageVisibility.js
//
// Simple utility class using code from
// https://developer.mozilla.org/en-US/docs/DOM/Using_the_Page_Visibility_API 
// To use, simply overwrite the default callback property with your own function:
// PageVisibility.onVisibilityChangeCallback = function yourFunction( isVisible ) {
//     alert('visible? ' + isVisible);
// }
(function() {
	var pv = { },
		hidden,
		visibilityChange;

	if (typeof document.hidden !== "undefined") {
		hidden = "hidden";
		visibilityChange = "visibilitychange";
	} else if (typeof document.mozHidden !== "undefined") {
		hidden = "mozHidden";
		visibilityChange = "mozvisibilitychange";
	} else if (typeof document.msHidden !== "undefined") {
		hidden = "msHidden";
		visibilityChange = "msvisibilitychange";
	} else if (typeof document.webkitHidden !== "undefined") {
		hidden = "webkitHidden";
		visibilityChange = "webkitvisibilitychange";
	}

	pv.hiddenProperty = hidden;
	pv.visibilityChangeEvent = visibilityChange;

	pv.onVisibilityChange = function( event ) {
		var isHidden = document[hidden];
		pv.onVisibilityChangeCallback( !isHidden );
	}

	pv.onVisibilityChangeCallback = function( isVisible ) {
		console.log( 'default callback', isVisible );
	}

	document.addEventListener(visibilityChange, pv.onVisibilityChange, false);

	window.PageVisibility = pv;

})();
