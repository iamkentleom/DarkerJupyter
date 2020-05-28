browser.tabs.query({active: true, url:["*://*/*.ipynb", "*://*/tree*", "*://*/terminals/*"]}, tab => {
    if(tab[0] !== undefined){
        let id = tab[0].id

        let btn = document.getElementById('toggle')
        let txt = document.getElementById('detect')
        let box = document.getElementById('box')

        box.style.display = 'inline-block'
        txt.style.display = 'none'

        browser.storage.local.get()
        .then(ans => {
            btn.checked = ans[id] === undefined ? true : ans[id]
        })
        
        btn.addEventListener('click', changeColor)

        function changeColor(){
            if(btn.checked){
                browser.tabs.insertCSS({
                    file: './dark.css'
                })
                browser.storage.local.set({ [id]: true})
            }else{
                browser.tabs.removeCSS({
                    file: './dark.css'
                })
                browser.storage.local.set({ [id]: false})
            }
        }
    }else{
        let txt = document.getElementById('detect')
        let box = document.getElementById('box')
        box.style.display = 'none'
        txt.style.display = 'block'
    }
    async function version(){
        const res = await fetch('./manifest.json')
        const data = await res.json()
        document.getElementById('version').innerText = data.version
    }
    version()
})