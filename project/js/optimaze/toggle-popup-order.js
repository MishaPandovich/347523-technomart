var modalBasketOpen=document.querySelectorAll(".goods__link--mark"),modalBasketPopup=document.querySelector(".modal-basket"),modalBasketClose=document.querySelector(".modal-close--basket"),modalBasketNextBuy=document.querySelector(".modal-basket__link--next-buy");function togglePopup(e,o,t,a){e.addEventListener("click",function(e){e.preventDefault(),o.classList.add("modal--show")}),t.addEventListener("click",function(e){e.preventDefault(),o.classList.remove("modal--show")}),a.addEventListener("click",function(e){e.preventDefault(),o.classList.remove("modal--show")}),document.addEventListener("keyup",function(e){27===e.keyCode&&o.classList.remove("modal--show")})}for(var i=0;i<modalBasketOpen.length;i++)togglePopup(modalBasketOpen[i],modalBasketPopup,modalBasketClose,modalBasketNextBuy);
