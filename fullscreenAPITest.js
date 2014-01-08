/**
 * Fullscreen API Test
 *
 * @author Jeroen Desloovere <jeroen@siesqo.be>
 * @source https://github.com/deslooverej/fullscreen-api
 */
fullscreenAPITest =
{
	init: function()
	{
		// start fullscreen
		$('#btnStart').on('click', function()
		{
			fullscreenAPI.start();
		});

		// start fullscreen for container
		$('#btnStartContainer').on('click', function()
		{
			fullscreenAPI.start('container');
		});

		// stop fullscreen
		$('#btnStop').on('click', function()
		{
			fullscreenAPI.stop();
		});
	}
}

$(fullscreenAPITest.init);
