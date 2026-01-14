document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdownContent.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function () {
      dropdownContent.classList.remove('show');
    });
  }
});