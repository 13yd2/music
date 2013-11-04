function modalClose(opts,modal) {
	window.sound.stop();
}

function modalOpen(opts,modal) {
    $('#demo-name').html(opts['demo-name']);
    window.sound.load({
      url: opts['demo-url']
    });
}

