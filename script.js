function mycard(){
    let productmenu = document.querySelector(".menu-preview");
    let previewBox = productmenu.querySelectorAll(".preview");
     document.querySelectorAll(".menu-container .menu-card").forEach(product =>{
        product.onclick =()=>{
 productmenu.style.display="flex";
let name=product.getAttribute('data-name');
 previewBox.forEach(preview=>{
 let target=preview.getAttribute('data-target');
   if(name==target){
  preview.classList.add("active");
                };
            });
        };
     });

previewBox.forEach(close =>{
    close.querySelector(".fa-times").onclick= ()=>{
close.classList.remove("active");
productmenu.style.display="none"
    };
})

}