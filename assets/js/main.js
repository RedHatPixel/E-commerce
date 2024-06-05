const menu = document.getElementsByClassName('nav-button');

for (const btn of menu) {
    btn.addEventListener("click", () => {
        const nav = document.getElementById('navbar');

        if (nav.style.right === '') {
            nav.style.right = '0';
        } else {
            nav.style.right = '';
        }
    });
}
