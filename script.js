// ==========================================
// PORTFOLIO JAVASCRIPT
// ==========================================



// 2. PAGE LOADING
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

// 3. TYPING EFFECT
const typingText = document.querySelector(".hero-left h1 span");
const words = [
    "FRONTEND-WEB DEVELOPMENT"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();

// 4. SCROLL REVEAL
const revealElements = document.querySelectorAll(
    ".project-card, .education-section, .process-item, .contact-item, .about-me-box"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});

// 5. PROJECT CLICK
const projects = document.querySelectorAll(".project-card");

projects.forEach((project, index) => {
    project.addEventListener("click", () => {
        const projectNames = [
            "Modul-01",
            "Modul-02",
            "Modul-03",
        ];

        alert(
            `Project ${index + 1}: ${projectNames[index]}\n\n` +
            "Project detail akan ditampilkan di sini."
        );
    });
});

// 6. PROJECT HOVER EFFECT
projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
        project.style.transform = "translateY(-8px)";
    });

    project.addEventListener("mouseleave", () => {
        project.style.transform = "translateY(0)";
    });
});


// 7. SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// 8. BACK TO TOP BUTTON
const backTop = document.createElement("button");
backTop.innerHTML = "↑";
backTop.classList.add("back-top");
document.body.appendChild(backTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backTop.classList.add("active");
    } else {
        backTop.classList.remove("active");
    }
});

backTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 9. CURRENT YEAR
const footer = document.querySelector("footer");

if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `©  OLIVIA FERDIANA — MALANG,INDONESIA`;
}

// 10. CURSOR EFFECT
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
});

// 11. BUTTON CLICK ANIMATION
document.querySelectorAll("a, button").forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.add("clicked");

        setTimeout(() => {
            button.classList.remove("clicked");
        }, 200);
    });
});

// ==========================================
// COPY EMAIL FUNCTIONALITY
// ==========================================
const copyCheckbox = document.querySelector('#copyCheckbox');
const emailText = "liviakanesa@gmail.com";

if (copyCheckbox) {
    copyCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            navigator.clipboard.writeText(emailText).then(() => {
                alert("Email liviakanesa@gmail.com successfully copied!");
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
    });
}

