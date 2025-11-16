// Wait for DOM content
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav ul li a");

    // Scroll animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    // Active navbar highlighting
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if(scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if(link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Simple modal for projects (optional)
    const projects = document.querySelectorAll(".projects-preview .project");
    projects.forEach(project => {
        project.addEventListener("click", () => {
            alert(`You clicked on: ${project.querySelector("h3").innerText}`);
        });
    });
});
