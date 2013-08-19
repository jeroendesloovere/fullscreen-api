/**
 * jsFrontend Fullscreen API Test
 *
 * @author Jeroen Desloovere <jeroen@siesqo.be>
 */
jsFrontendFullscreenAPITest =
{
	init: function()
	{
		// start fullscreen
		$('#btnStart').on('click', function()
		{
			jsFrontendFullscreenAPI.start();
		});

		// start fullscreen for container
		$('#btnStartContainer').on('click', function()
		{
			jsFrontendFullscreenAPI.start('container');
		});

		// stop fullscreen
		$('#btnStop').on('click', function()
		{
			jsFrontendFullscreenAPI.stop();
		});
	}
}

$(jsFrontendFullscreenAPITest.init);
