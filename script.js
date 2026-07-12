const words = [
    " Amazing Websites.",
    " Creative Designs.",
    " Modern UI.",
    " Pure HTML CSS JS."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function type() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(type, 1200);

            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(type, deleting ? 50 : 100);
}

type();

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    btn.innerHTML = "✨ Welcome!";

    setTimeout(() => {

        btn.innerHTML = "Explore";

    }, 1500);

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".feature").forEach(card => {

    observer.observe(card);

});