window.onload = function() {
    const drop_one = document.getElementById('dropdown1');
    const dropdown_stats = document.querySelector('.basic-stats');

    drop_one.addEventListener('click', function () {
        dropdown_stats.classList.toggle('active');
    });
}

