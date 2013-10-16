/**
 * jsFrontend Fullscreen API
 *
 * @author Jeroen Desloovere <jeroen@siesqo.be>
 * @source https://github.com/deslooverej/fullscreen-api
 */
jsFrontendFullscreenAPI =
{
	prefix: false,
	init: function()
	{
		// get prefixes
		var prefixes = ['webkit', 'moz', 'ms', 'o'];

		// we require the 'documentElement' to check fullscreen support
		element = document.documentElement;

		// if 'requestFullScreen' is natively supported just use it
		if(element.requestFullScreen) jsFrontendFullscreenAPI.prefix = '';

		// not natively supported
		else
		{
			// loop over all the known prefixes until we find one
			for(var i = 0; i < prefixes.length; i++)
			{
				if(element[prefixes[i] + 'RequestFullScreen'])
				{
					jsFrontendFullscreenAPI.prefix = prefixes[i];
				}
			}
		}

		// browser doesn't support Fullscreen API
		if(!jsFrontendFullscreenAPI.prefix) return false;
	},

	/**
	 * Start fullscreen
	 *
	 * @param string[optional] elementId The name from the element you want to make fullscreen
	 */
	start: function(elementId)
	{
		// init element to execute fullscreen on
		var element = (elementId == null) ? document.documentElement : document.getElementById(elementId);

		// init prefix
		var prefix = jsFrontendFullscreenAPI.prefix;

		// fullscreen not supported, stop here
		if(!prefix) return false;

		// execute fullscreen for not-native browsers
		if(prefix !== '') element[prefix + 'RequestFullScreen']();

		// natively supported
		else element.requestFullScreen();
	},

	/**
	 * Stop fullscreen
	 */
	stop: function()
	{
		// init prefix
		var prefix = jsFrontendFullscreenAPI.prefix;

		// fullscreen not supported, stop here
		if(!prefix) return false;

		// execute fullscreen for not-native browsers
		if(prefix !== '') document[prefix + 'CancelFullScreen']();

		// natively supported
		else document.cancelFullScreen();
	}
}

$(jsFrontendFullscreenAPI.init);
