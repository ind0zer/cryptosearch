document.querySelectorAll('.questions__label').forEach(label => {
    label.addEventListener('click', () => {
        const input = label.previousElementSibling;
        const paragraph = label.nextElementSibling;
        const isChecked = input.checked;

        if (!isChecked) {
            paragraph.style.maxHeight = paragraph.scrollHeight + 'px';
            setTimeout(() => {
                paragraph.style.transition = 'max-height 0.3s ease-out';
            }, 10); 
        } else {
            paragraph.style.transition = '';
            paragraph.style.maxHeight = '0';
        }
    });
});
