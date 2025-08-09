const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('.sidebar nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.remove('active');
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Phone reveal + simple captcha
(function () {
    const guard = document.getElementById('phone-guard');
    if (!guard) return;

    const showBtn = document.getElementById('show-phone-btn');
    const captchaBox = document.getElementById('captcha-box');
    const qSpan = document.getElementById('captcha-q');
    const input = document.getElementById('captcha-input');
    const verifyBtn = document.getElementById('captcha-verify');
    const error = document.getElementById('captcha-error');
    const phoneList = document.getElementById('phone-list');
    const phone1 = document.getElementById('phone1');
    const phone2 = document.getElementById('phone2');

    let answer = 0;

    function genCaptcha() {
        const a = Math.floor(Math.random() * 9) + 1;
        const b = Math.floor(Math.random() * 9) + 1;
        answer = a + b;
        qSpan.textContent = `${a} + ${b} = ?`;
        input.value = '';
        error.textContent = '';
    }

    showBtn.addEventListener('click', () => {
        captchaBox.classList.remove('hidden');
        genCaptcha();
        input.focus();
    });

    function reveal() {
        const p1 = guard.dataset.p1 || '';
        const p2 = guard.dataset.p2 || '';
        phone1.textContent = p1;
        phone2.textContent = p2;
        captchaBox.classList.add('hidden');
        showBtn.classList.add('hidden');
        phoneList.classList.remove('hidden');
    }

    function tryVerify() {
        const val = parseInt(input.value, 10);
        if (val === answer) {
            reveal();
        } else {
            error.textContent = 'Incorrect. Try again.';
            genCaptcha();
        }
    }

    verifyBtn.addEventListener('click', tryVerify);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') tryVerify();
    });
})();
