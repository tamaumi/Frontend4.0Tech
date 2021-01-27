document.addEventListener('DOMContentLoaded',function(){
    window.addEventListener('scroll',function(){
        let btnBackToTop = document.querySelector('.box-btn-backtop')
        let setMenu = document.querySelector('.menu')
        let setLogo = document.querySelector('.img-logo')
        let setItemMenu = document.querySelector('.item-menu')

        if(window.pageYOffset>50){
            btnBackToTop.classList.add('show-box-backtop')
            setMenu.classList.add('fix-menu')
            setLogo.classList.add('fix-logo')
            setItemMenu.classList.add('fix-menuitem')
            
        }
        else{
            btnBackToTop.classList.remove('show-box-backtop')
            setMenu.classList.remove('fix-menu')
            setLogo.classList.remove('fix-logo')
            setItemMenu.classList.remove('fix-menuitem')
            
        }
        btnBackToTop.onclick = function(){
            document.body.scroll = 0
            document.documentElement.scrollTop = 0
        }
    },)

},false)
