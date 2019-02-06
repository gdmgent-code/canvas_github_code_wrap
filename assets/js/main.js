;((window) => {
    const _ghFrameElement = document.querySelector('#ghFrame')
    _ghFrameElement.addEventListener('load', (ev) => {
        console.log(ev)
    })
    const githubFileUrl = decodeURIComponent(window.location.search.match(/(\?|&)ghFileUrl\=([^&]*)/)[2])
    if (_ghFrameElement && githubFileUrl) {
        _ghFrameElement.setAttribute('src', githubFileUrl)
    }
})(window)