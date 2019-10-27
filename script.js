chrome.tabs.query({active: true, url:["http://*/notebooks/*", "https://hub.gke.mybinder.org/*"]}, tab => {
    if(tab[0] !== undefined){
        let txt = document.getElementById('detect')
        let box = document.getElementById('box')
        box.style.display = 'inline-block'
        txt.style.display = 'none'

        let btn = document.getElementById('toggle')
        btn.addEventListener('click', changeColor)
        
        function changeColor(){
            if(btn.checked){
                browser.tabs.insertCSS({
                    file: './dark.css'
                })
            }else{
                browser.tabs.removeCSS({
                    file: './dark.css'
                })
            } 
        }  
    }else{
        let txt = document.getElementById('detect')
        let box = document.getElementById('box')
        box.style.display = 'none'
        txt.style.display = 'block'
    }
})