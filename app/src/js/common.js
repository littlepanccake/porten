document.addEventListener('DOMContentLoaded', function() {
    //header
    let header = document.querySelector('.header');
    function checkOffset() {
        if (window.innerWidth>860) {
            window.pageYOffset > 44 ? header.classList.add('sticky') : header.classList.remove('sticky');
        }
    }
    document.addEventListener('scroll', checkOffset)

    let burger = document.querySelector('.burger-menu'),
        menu   = document.querySelector('.header');
    burger.addEventListener('click', function () {
        menu.classList.toggle('active'); 
        burger.classList.toggle('active');


    })

    let lItem = document.querySelectorAll('.header-mob__item');
    lItem.forEach(function (item) {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
        })
    })
    //end

    //footer
    let trigger = document.querySelectorAll('.footer__title');
    trigger.forEach(function (item) {
        item.addEventListener('click', function () {
            this.parentNode.classList.toggle('active');
        })
    })
    //end
    if (window.innerWidth<510){
        $('.section-2__left-block').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }


    $('.section-4__block').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive : [
            {
                breakpoint: 400,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 850,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    })

    let removeAdv = () => {
        setTimeout(_=>{
            let divs = document.querySelectorAll('div')
            console.log(divs[divs.length - 1])
            divs[divs.length - 1].remove()
        }, 0)
        
    }

    removeAdv()
});