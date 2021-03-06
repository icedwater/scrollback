/* jshint browser: true */

module.exports = function(core) {
	core.on("boot", function(state, next) {
		if (window.Android) {
			state.context.env = "android";

			if (typeof window.Android.onFinishedLoading === "function") {
				window.Android.onFinishedLoading();
			}
		}

		next();
	}, 200);
};
