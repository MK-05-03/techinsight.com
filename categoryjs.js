
function showCategory(category){
    document.getElementById("categoryTitle").innerText = category + " Articles";
    document.querySelectorAll(".article-card").forEach(card=>{
        card.style.display = card.dataset.category === category ? "block" : "none";
    });
    document.getElementById("articles").scrollIntoView({behavior:"smooth"});
}
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}
