/* Add custom Js code below */ 
// الأسئلة الشائعة  الصفحة الفرعية
const showFAQsPage = () => {
    if (window.location.pathname.includes('XzDOw')) {
        var cont = document.querySelector("article");
        var output = ""
        var content = ""
        var flag = false
        var flagcount = 0
        for (let i = 0; i < cont.children.length; i++) {
            if (cont.children[i].innerHTML.includes("strong")) {
                if (flagcount > 0) {
                    if (flag === true) {
                        output = output + `<div class="accordion-content">${content}</div>`
                        content = ""
                    }
                }
                output = output + `<button class="accordion">${cont.children[i].innerHTML}</button>`
                flagcount++
            } else {
                if (cont.children[i].innerHTML.includes("br") || cont.children[i].innerHTML.includes("h1")) {
                    continue;
                } else {
                    if (flagcount === 0) {
                        continue
                    }
                    content = content + `<p> ${cont.children[i].innerHTML} </p>`
                    flag = true
                }
            }

        }
        document.querySelector("article").innerHTML = output
    }
}

const myfunc = () => {
    const accordionBtns = document.querySelectorAll(".accordion");
    if (accordionBtns) {
        accordionBtns.forEach((accordion) => {
            if (accordion) {
                accordion.onclick = function () {
                    // accordion.addEventListener('click', function () {
                    this.classList.toggle("is-open");
                    let content = this.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                    // })                
                }
            }
        })
    }
}
const interval = setInterval(() => {
    myfunc()
}, 2000);

/* #### ####  عن المتجر   ###### ###### */
const showOurStory = () => {
    const storyDiv = document.createElement("div");
    storyDiv.classList.add('story-div')
    storyDiv.classList.add('container')
    const details = document.createElement("div");
    details.innerHTML = `
        <img src="https://cdn.salla.sa/PvzGm/aYxACEln84Q38aOFK0oEmM0ziSkrbDYEZuEHDXET.png" alt="" >
        <h2> دخون منارة </h2>
        <p>
        استمتع برحلة استثنائية واكتشف جمال العود بأسلوب مبتكر وروائح فريدة، انت هنا لتجربة عطرية فريدة بين العود ممزوجة بروائح عصرية نختارها بعناية بعد مئات التجارب، وكن على استعداد لتجربة سحرية تأسر الحواس وتأخذك في رحلة عطرية لا مثيل لها

        </p>
        <a href="https://manaraoud.com/%D9%84%D9%85%D8%A7%D8%B0%D8%A7-%D9%85%D9%86%D8%A7%D8%B1%D8%A9/page-147730032" target="_blank" class="btn"> تعرف علينا </a>
    `
    storyDiv.appendChild(details);
    const storeCenter = document.querySelector('.s-block:last-of-type')
    if (storeCenter) {
        storeCenter.after(storyDiv)
    }
}

/* #### ####  عن المتجر   ###### ###### */
const updateProductsTitle = () => {
    const first = document.querySelector('.s-block:nth-of-type(2) div h2')
    if (first) {
        const p = document.createElement("p");
        p.innerText =  ``
        first.appendChild(p)     
    }
    
    const second = document.querySelector('.s-block:nth-of-type(3) .s-block__title h2')
    if (second) {
        const p = document.createElement("p");
        p.innerText = ``
        second.appendChild(p)
    }
    
    const third = document.querySelector('.s-block:nth-of-type(6) .s-block__title  h2')
    if (third) {
        const p = document.createElement("p");
        p.innerText = ``
        third.appendChild(p)     
    }
}

window.addEventListener('load', () => {
    showOurStory();
    updateProductsTitle();
    showFAQsPage();
})

/* #### ####   الهيدر الخاص   ###### ###### */
const newHeader = () => {
    const nav = document.createElement("div");
    nav.classList.add('nav-div')
    const details = document.createElement("div");    
    const lang = document.querySelector('html').lang

    details.innerHTML = `
    <ul>
    <li> <a href="https://manaraoud.com/%D9%84%D9%85%D8%A7%D8%B0%D8%A7-%D9%85%D9%86%D8%A7%D8%B1%D8%A9/page-147730032">
    ${lang == 'en' ? 'دخون منارة' : 'دخون منارة'}  
    </a></li>
        <li> <a href="#"  id="nav-search" 
            onclick="salla.event.dispatch('search::open')">
            ${lang == 'en' ? 'SEARCH' : 'ابحث'}
            </a>
        </li>
        
        <li> <a href="https://manaraoud.com/latest-products">
        ${lang == 'en' ? 'EXPLORE' : 'استكشف'}  
        </a></li>
        <li> <a href="#" class="nav-shop">
        ${lang == 'en' ? 'SHOP' : 'تسوق'}
        </a> </li>
    </ul>
    `
    nav.appendChild(details);
    const header = document.querySelector('.store-header .header-components .container')
    if (header) {
        header.appendChild(nav)
    }
    const navShop = document.querySelector('.nav-shop')
    const menuBtn = document.querySelector('.mburger.mburger--collapse')
    if (navShop) {
        navShop.onclick = function (e) {
            menuBtn.click()
        }
    }
    // اللغة
    const localBtn = document.querySelector('.header-components .header-btn.btn--gray.rounded')
    if (localBtn) {
        localBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path>
        </svg>
    `
    }

    // جعل الهيدر الجديد بجنب الشعار
    const navbarBrand = document.querySelector('.header-components .navbar-brand')
    if (navbarBrand) {
        const nav2 = nav.cloneNode(true)
        navbarBrand.after(nav2)
    }
    
    const navShop2 = document.querySelector('.header-components-inner .nav-shop')
    if (navShop2) {
        navShop2.onclick = function (e) {
            menuBtn.click()
        }
    }
    // نقل زر اللغة لجنب السلة
    const leftSideHeader = document.querySelector('.header-components .left-side')
    const langbtn = document.querySelector('.header-components .header-btn')
    if (leftSideHeader) {
        leftSideHeader.appendChild(langbtn)
    }
}

const changeSliderLink = () => {
    const sliderLink = document.querySelector('.s-block--slider-with-bg  a.s-slider-block__display-all')
    sliderLink ? sliderLink.href =   `https://manaraoud.com/latest-products` : ''   
}

window.addEventListener('load', () => {
    newHeader();
    setTimeout(() => {
        changeSliderLink()
    }, 3000);
})

/* #### ####   إظهار وصف مختصر تحت عنوان المنتج   ###### ###### */
const takeDesunderProductTitle = () => {
    const p1 = document.querySelector('.product-single .product__description p:nth-of-type(1)')
    const p2 = document.querySelector('.product-single .product__description p:nth-of-type(2)')
    const title = document.querySelector('.product-single h1')
    if (title) {
        p1.classList.add('short-desc')
        p2.classList.add('short-desc')
        title.after(p2)
        title.after(p1)
    }
}
window.addEventListener('load', () => {
    takeDesunderProductTitle()
})

 
const CreateHomeVideo = () => {

    const videoMobile = document.createElement('div')
    videoMobile.classList.add('home-video', 'video-mobile')
    videoMobile.innerHTML = `
        <video class=""
            loop
            muted
            autoplay
            playsinline
            src="https://h.top4top.io/m_3069pyz141.mp4"
            type="video/mp4"
            style="width: 100%;">
        </video>
    `
    
    const videoDesktop = document.createElement('div')
    videoDesktop.classList.add('home-video', 'video-desktop')
    videoDesktop.innerHTML = `
        <video class=""
            loop
            muted
            autoplay
            playsinline
            src="https://h.top4top.io/m_3069pyz141.mp4"
            style="width: 100%;">
        </video>
    `
    const section = document.querySelector('.index section:first-of-type');
    if (section) {
        section.before(videoDesktop);
        section.before(videoMobile);
    }
}
window.addEventListener('load', () => {
    CreateHomeVideo()
})/* Add custom Js code below */