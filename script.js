document.querySelector('.burger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('تم إرسال الرسالة بنجاح!');
    e.target.reset();
});
