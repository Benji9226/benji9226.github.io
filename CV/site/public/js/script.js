function changeTheme(theme) {
    document.documentElement.classList.remove(
        'theme-blue',
        'theme-purple',
        'theme-amber'
    );

    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem('resumeTheme', theme);
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');

    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('resumeDarkMode', isDark);
}

document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme (defaults to blue)
    const savedTheme = localStorage.getItem('resumeTheme') || 'blue';
    changeTheme(savedTheme);

    // Always start in LIGHT mode
    document.documentElement.classList.remove('dark');
    localStorage.setItem('resumeDarkMode', false);

    // Animate progress bars
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress');

                progressBars.forEach((bar) => {
                    const width = bar.style.width;
                    bar.style.width = '0';

                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.resume-section').forEach((section) => {
        observer.observe(section);
    });
});

/* You can write your own code below */
