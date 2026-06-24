const safeCreateIcons = () => {
    if (typeof lucide !== 'undefined') {
        try { lucide.createIcons(); } catch (e) {}
    }
};

document.addEventListener('DOMContentLoaded', () => {
    safeCreateIcons();

    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        });
    }

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileDrawer.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileDrawer.classList.contains('active')) {
                if (icon) icon.setAttribute('data-lucide', 'x');
            } else {
                if (icon) icon.setAttribute('data-lucide', 'menu');
            }
            safeCreateIcons();
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) icon.setAttribute('data-lucide', 'menu');
                safeCreateIcons();
            });
        });
    }
});


// Smart Agent Logic
document.addEventListener('DOMContentLoaded', () => {
    // Only popup automatically if we are NOT on the assessment page
    if (!window.location.pathname.includes('assessment')) {
        // Smart Check: Don't popup if user has dismissed it recently (sessionStorage)
        if (!sessionStorage.getItem('agentDismissed')) {
            setTimeout(() => {
                const modal = document.getElementById('agentModal');
                const btn = document.getElementById('floatingAgentBtn');
                if (modal) modal.classList.add('active');
                if (btn) btn.style.display = 'none';
            }, 20000);
        }
    }

    // Handle Close Button smartly
    const closeBtns = document.querySelectorAll('.agent-close-btn');
    closeBtns.forEach(btn => {
        // Override inline onclick for safer handling
        btn.onclick = null;
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = document.getElementById('agentModal');
            const floatingBtn = document.getElementById('floatingAgentBtn');
            if (modal) modal.classList.remove('active');
            if (floatingBtn) floatingBtn.style.display = 'flex';
            sessionStorage.setItem('agentDismissed', 'true');
        });
    });
});
