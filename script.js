function localFileVideoPlayer() {
	'use strict'
    var URL = window.URL || window.webkitURL
    var displayMessage = function (message, isError) {
        var element = document.querySelector('#message')
        element.innerHTML = message
        element.className = isError ? 'error' : 'success'
    }
    var playSelectedFile = function (event) {
        var file = this.files[0]
        var type = file.type
        var videoNode = document.querySelector('video')
        var canPlay = videoNode.canPlayType(type)
        if (canPlay === ''){
            canPlay = 'no'
        }
        let message = 'Possibility of playing: '+ canPlay.toUpperCase()
        var isError = canPlay === 'no' 
        displayMessage(message, isError)

        if (isError) {
            return
        }

        var fileURL = URL.createObjectURL(file)
        videoNode.src = fileURL
    }
    var inputNode = document.querySelector('input')
    inputNode.addEventListener('change', playSelectedFile, false)
}

localFileVideoPlayer();