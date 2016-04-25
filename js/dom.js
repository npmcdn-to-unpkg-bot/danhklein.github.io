document.querySelector('form')
  .addEventListener('submit',
    function(event) {
      event.stopPropagation();
      event.preventDefault();

      if (isWebBluetoothEnabled()) {
        ChromeSamples.clearLog();
        onFormSubmit();
      }
    });