// всплывающее меню секции offers
    let settingGear = document.querySelector(".settings__gear");
    let settingList = document.querySelector(".settings__list");

    settingGear.addEventListener("mouseover", function(event){
     if(event){
            settingList.style.display = "block";
        }  
    })
    settingGear.addEventListener("mouseout", function(event){
     if(event){
         settingList.style.display = "none";
      }  
    })

// всплывающее меню Гамбургер
    let hamburger = document.querySelector(".hamburger");
    let hideMenu = document.querySelector(".hide-menu");
    let hideMenuClose = document.querySelector(".hide-menu__close");

    hamburger.addEventListener("click", function(event){
        if(event){
            hideMenu.style.display = "block";
        }  
    })

    hideMenuClose.addEventListener("click", function(event){
        if(event){
            hideMenu.style.display = "none";
        }
    })

//Всплывающее меню Команда
    let openItem = item => {
        let conteiner = item.closest(".team__item");
        let contentBlock = conteiner.find(".hidden-conteiner");
        let textBlock = contentBlock.find(".hidden-conteiner__block");
        let reqHeight = textBlock.height();


        conteiner.addClass("active");
        contentBlock.height(reqHeight);
    }

    let closeItem = conteiner => {
        let item = conteiner.find(".hidden-conteiner");
        let itemConteiner = conteiner.find(".team__item");

        itemConteiner.removeClass("active");
        item.height(0);
    }

    $(".team__link").click(e => {
        let $this = $(e.currentTarget);
        let conteiner = $this.closest(".team__list");
        let elemConteiner = $this.closest(".team__item");

        if(elemConteiner.hasClass("active")){
            closeItem(conteiner);
        }else {
            closeItem(conteiner);
            openItem($this);
        }


    })


// Отзывы
    let findBlock = (block) => {
        return $(".rewiews__person").filter( (item) => {
            return $(item).attr("data-view") == block;
        })
    }


    $('.pagginator__element').on("click", function(e){
        e.preventDefault();

        let click = $(e.currentTarget);
        let dataOpen = click.attr("data-open");
        let currentBlock = findBlock(dataOpen);
        let currentTarget =  click.closest(".pagginator__element");
        console.log(dataOpen);
        currentBlock.addClass("isActive").siblings().removeClass("isActive");
        currentTarget.addClass("active").siblings().removeClass("active");
    })