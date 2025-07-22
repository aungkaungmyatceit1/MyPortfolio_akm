
let theme = document.documentElement;
let btns = document.querySelectorAll(".btn")

btns.forEach((btn)=> {
    btn.addEventListener("click", (e)=> {
        let btnCLass = e.currentTarget.classList;
        if (btnCLass.contains("btn-1")) {
            theme.style.setProperty("--theme-color", "#13099b")
        }
        else if(btnCLass.contains("btn-2")){
            theme.style.setProperty("--theme-color", "#fc0713")

        }
        else if(btnCLass.contains("btn-3")){
            theme.style.setProperty("--theme-color", "#034918")
        }
        else{
            theme.style.setProperty("--theme-color", "#c08e03")
        }
    })
})