// BroAI Premium Script

document.addEventListener("DOMContentLoaded", () => {

    console.log("BroAI Loaded Successfully 🚀");

    // Smooth Scroll

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});

// Scroll Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(
'.feature-card, .market-card, .price-card, .testimonial-card'
).forEach(el => {

    observer.observe(el);

});

// Navbar Shadow

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 5px 25px rgba(0,0,0,.3)";

    }
    else{

        navbar.style.boxShadow = "none";

    }

});

// Button Click Effects

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.style.transform = "scale(.95)";

        setTimeout(() => {

            btn.style.transform = "scale(1)";

        },150);

    });

});

// Future Notification

function showComingSoon(){

    alert("🚀 Feature Coming Soon In BroAI Pro!");

}
