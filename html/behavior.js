document.addEventListener('DOMContentLoaded', function (event) {
  let thumbnailElement = document.getElementById('smart_thumbnail');

  console.log(thumbnailElement);

  thumbnailElement.addEventListener('click', function () {
    if (thumbnailElement.className == '') {
      thumbnailElement.className = 'small';
      thumbnailElement.style.border = '1px solid red';
    } else {
      thumbnailElement.className = '';
      thumbnailElement.style.border = 'none';
    }
  });
});
