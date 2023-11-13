
function openModal(imgSrc, imgAlt) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');
    var captionText = document.getElementById('caption');

    modal.style.display = 'flex';
    modalImg.src = imgSrc;
    captionText.innerHTML = imgAlt;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}