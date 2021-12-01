{

	const navIcon = document.querySelector(".index__nav--icon");
	const navMenu = document.querySelector(".index__nav");
	const navBack = document.querySelector(".index__nav--btn");

	navIcon.addEventListener("click",()=>{
		navMenu.removeAttribute("id");
		navMenu.setAttribute("id","navAdd");
		navBack.addEventListener("click",()=>{
			navMenu.removeAttribute("id");
			navMenu.setAttribute("id","navRemove");
		});
	});

}