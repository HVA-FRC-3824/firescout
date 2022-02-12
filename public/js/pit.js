function dropdown(id) {
    var dropdownElement;

    switch (id) {
        case 1:
            dropdownElement = document.getElementById('stats');
            break;
        case 2:
            dropdownElement = document.getElementById('climb');
            break;
        case 3:
            dropdownElement = document.getElementById('cargoInfo');
            break;
        case 4:
            dropdownElement = document.getElementById('misc');
            break;
        default:
            console.log("default");
            break;
    }
    dropdownElement.style.toggle('active');
}