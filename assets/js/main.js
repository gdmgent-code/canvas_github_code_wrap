function getContentByPromise(url){
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onload = function() {
            if (xhr.status == 200) {
                const data = xhr.responseText
                resolve(data)
            } else {
                reject(status)
            }
        }
        xhr.onerror = function() {
            reject(Error("Network Error"))
        }
        xhr.send()
    });
}

/*
Raw: https://raw.githubusercontent.com/gdmgent-code/gdmgent-v2/master/functions/src/index.js
Normal: https://gdmgent-code.github.io/canvas_github_code_wrap/index.html?ghFileUrl=https://github.com/gdmgent-code/gdmgent-v2/blob/master/functions/src/index.js
*/


;((window) => {
    hljs.initHighlightingOnLoad()
    hljs.initLineNumbersOnLoad()

    const _ghElement = document.querySelector('#ghFileContainer')
    const githubFileUrl = decodeURIComponent(window.location.search.match(/(\?|&)ghFileUrl\=([^&]*)/)[2])
    const codeType = decodeURIComponent(window.location.search.match(/(\?|&)codeType\=([^&]*)/)[2])
    if (_ghElement && githubFileUrl) {
        getContentByPromise(`https://cors.io?${githubFileUrl}`)
        .then(function(response) {
            const htmlStr = response
            /*const docParser = new DOMParser()
            const docElement = docParser.parseFromString(htmlStr, 'text/html')
            const fileElement = docElement.querySelector('.file')
            _ghElement.appendChild(fileElement)*/
            _ghElement.innerHTML = `
            <pre>
                <code class="javascript">
                    ${htmlStr}
                </code>
            </pre>
            `
            hljs.highlightBlock(_ghElement)
            //hljs.lineNumbersBlock(_ghElement)

        }, function(error) {
            console.log(error)
        })
    }
})(window)