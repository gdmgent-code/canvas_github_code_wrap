;((window) => {
    const _ghFrameElement = document.querySelector('#ghFrame')
    _ghFrameElement.addEventListener('load', (ev) => {
        console.log(ev)
    })
    const githubFileUrl = decodeURIComponent(window.location.search.match(/(\?|&)ghFileUrl\=([^&]*)/)[2])
    if (_ghFrameElement && githubFileUrl) {
        fetch(`http://cors.io/?${githubFileUrl}`, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*',
            }
        })
        .then(function(response) {
            console.log(response);
            return response.json()
        })
        .then(function(myJson) {
            console.log(JSON.stringify(myJson))
        })
        .catch(error => console.error('Error:', error));
    }
})(window)