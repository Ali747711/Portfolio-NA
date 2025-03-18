document.addEventListener('DOMContentLoaded', function() {
    const waves = document.querySelectorAll('.wave');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollTop / scrollHeight;
        
        // Adjust wave positions based on scroll
        waves.forEach((wave, index) => {
            const factor = index + 1;
            const rotation = 360 * scrollProgress * factor;
            const scale = 1 + (0.2 * scrollProgress * factor);
            const translateY = scrollTop * 0.1 * factor;
            
            wave.style.transform = `rotate(${rotation}deg) scale(${scale}) translateY(${-translateY}px)`;
        });
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});
