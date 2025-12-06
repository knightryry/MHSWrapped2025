document.addEventListener('DOMContentLoaded', () => {
    // Animate group numbers (count up effect)
    function animateNumber(id, target, duration = 1200) {
        const el = document.getElementById(id);
        let current = 0;
        const frameRate = 1000 / 60;
        const steps = Math.round(duration / frameRate);
        let step = 0;
        const counter = setInterval(() => {
            step++;
            current = Math.round(target * (step / steps));
            el.textContent = current.toLocaleString();
            if (step >= steps) {
                el.textContent = target.toLocaleString();
                clearInterval(counter);
            }
        }, frameRate);
    }
    animateNumber('students-minutes', 21500);
    animateNumber('staff-minutes', 17800);

    // Button share animation
    const shareBtn = document.getElementById('shareBtn');
    shareBtn.addEventListener('click', () => {
        shareBtn.classList.add('clicked');
        setTimeout(() => shareBtn.classList.remove('clicked'), 400);
        // Optionally, copy to clipboard or show a modal
        // navigator.clipboard.writeText('Check out MHS Music Wrapped!');
    });
});