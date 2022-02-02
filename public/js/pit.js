function dropdown(id) {
    var dropdownElement;

    switch (id) {
        case 1:
            dropdownElement = document.getElementById('stats');
            break;
        case 2:
            dropdownElement = document.getElementById('driveTeam');
            break;
        default:
            console.log("hit default");
            break;
    }
    dropdownElement.classList.toggle('active');
}