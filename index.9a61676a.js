const e={form:document.querySelector(".js-submit-form"),button:document.querySelector(".search-button"),navItemMenu:document.querySelectorAll(".nav_item_menu"),mobileMenu:document.querySelector(".menu__container"),openBurgerBtn:document.getElementById("open_burger_btn"),closeBurgerBtn:document.getElementById("close_burger_btn"),libraryBtnMenu:document.getElementById("library_btn_menu"),headerNavLinks:document.querySelectorAll(".nav_item"),headerNavButtons:document.querySelector(".nav_list_button"),buttonWatched:document.getElementById("watched"),buttonQueue:document.getElementById("queue"),butttonsLibrary:document.querySelector(".modal-nav"),buttonHeaderNav:document.querySelector(".nav_list_button"),logo:document.querySelector(".logo"),homeBtn:document.getElementById("home_btn"),libraryBtn:document.getElementById("library_btn"),signOut:document.getElementById("auth_btn"),user:document.querySelector(".user")};function t(t){t.preventDefault(),e.mobileMenu.classList.toggle("open")}e.openBurgerBtn.addEventListener("click",t),e.closeBurgerBtn.addEventListener("click",t),e.form.addEventListener("submit",async e=>{e.preventDefault();let t=document.querySelector(".js-submit-form"),n=document.getElementById("country").value,o=document.getElementById("city").value,u=document.getElementById("info").value,c=document.getElementById("name").value,r=document.getElementById("tel").value,l=document.getElementById("email").value,m=document.getElementById("comment").value,d=document.getElementById("mailing").checked,a=[];document.querySelectorAll(".category input[type='checkbox']:checked").forEach(function(e){a.push(e.parentElement.textContent.trim())});let i=[];document.querySelectorAll(".status input[type='checkbox']:checked").forEach(function(e){i.push(e.parentElement.textContent.trim())});let y={country:n,city:o,info:u,name:c,tel:r,email:l,comment:m,mailing:d,categories:a,statuses:i};console.log(y);try{if((await fetch("https://esa-backend.vercel.app/submitForm",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)})).ok)t.reset(),console.log("Лист успішно відправлено");else throw Error("Помилка при відправці форми")}catch(e){console.error("Помилка відправки листа:",e)}});
//# sourceMappingURL=index.9a61676a.js.map
