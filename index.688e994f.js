const e={form:document.querySelector(".js-submit-form"),button:document.querySelector(".search-button"),navItemMenu:document.querySelectorAll(".nav_item_menu"),mobileMenu:document.querySelector(".menu__container"),openBurgerBtn:document.getElementById("open_burger_btn"),closeBurgerBtn:document.getElementById("close_burger_btn"),libraryBtnMenu:document.getElementById("library_btn_menu"),modal:document.querySelector(".modal"),modalContent:document.querySelector(".modal-data"),movieImage:document.querySelector(".image-wrap"),movieDescr:document.querySelector(".movie-descr"),buttonClose:document.querySelectorAll(".modal-close"),modalBackdrop:document.querySelectorAll(".modal-body"),headerNavLinks:document.querySelectorAll(".nav_item"),headerNavButtons:document.querySelector(".nav_list_button"),buttonWatched:document.getElementById("watched"),buttonQueue:document.getElementById("queue"),butttonsLibrary:document.querySelector(".modal-nav"),buttonHeaderNav:document.querySelector(".nav_list_button"),logo:document.querySelector(".logo"),homeBtn:document.getElementById("home_btn"),libraryBtn:document.getElementById("library_btn"),signOut:document.getElementById("auth_btn"),user:document.querySelector(".user"),products:document.querySelectorAll(".portfolio-card"),overlays:document.querySelectorAll(".portfolio-card__overlay"),body:document.querySelector("body"),scrollToTopBtn:document.getElementById("scrollToTopBtn")};function t(t){t.preventDefault(),e.mobileMenu.classList.toggle("open")}function o(e){e.preventDefault();let t=e.currentTarget.querySelector("p.portfolio-card__overlay");t.classList.add("active__link"),("ontouchstart"in window||navigator.maxTouchPoints)&&(e.preventDefault(),t.classList.add("active__link"))}e.openBurgerBtn.addEventListener("click",t),e.closeBurgerBtn.addEventListener("click",t),e.form.addEventListener("submit",async e=>{e.preventDefault();let t=document.querySelector(".js-submit-form"),o=document.getElementById("country").value,n=document.getElementById("city").value,l=document.getElementById("info").value,c=document.getElementById("name").value,r=document.getElementById("tel").value,u=document.getElementById("email").value,d=document.getElementById("comment").value,m=document.getElementById("mailing").checked,a=[];document.querySelectorAll(".category input[type='checkbox']:checked").forEach(function(e){a.push(e.parentElement.textContent.trim())});let s=[];document.querySelectorAll(".status input[type='checkbox']:checked").forEach(function(e){s.push(e.parentElement.textContent.trim())});let i={country:o,city:n,info:l,name:c,tel:r,email:u,comment:d,mailing:m,categories:a,statuses:s};console.log(i);try{if((await fetch("https://esa-backend.vercel.app/submitForm",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).ok)t.reset(),console.log("Лист успішно відправлено");else throw Error("Помилка при відправці форми")}catch(e){console.error("Помилка відправки листа:",e)}}),e.products.length>0&&e.products.forEach(e=>{let t=e.querySelector(".portfolio-card__overlay");t.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),t.classList.remove("active__link")}),e.addEventListener("click",o)});const n=e.buttonClose;if(n)for(let e=0;e<n.length;e++)n[e].addEventListener("click",c);const l=e.modalBackdrop;if(l)for(let e=0;e<l.length;e++)l[e].addEventListener("click",c);function c(t){t.preventDefault(),e.modal.classList.remove("open"),"A"===t.target.nodeName?t.target.closest(".modal").classList.remove("open"):"BUTTON"===t.target.nodeName&&t.target.closest(".modal").classList.remove("open"),e.body.classList.remove("lock"),e.movieImage.innerHTML="",e.movieDescr.innerHTML=""}window.addEventListener("scroll",function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?e.scrollToTopBtn.style.display="block":e.scrollToTopBtn.style.display="none"}),e.scrollToTopBtn.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.scrollTop=0,document.documentElement.scrollTop=0});
//# sourceMappingURL=index.688e994f.js.map
