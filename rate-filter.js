(function () {
  var box = document.getElementById('rate-filter'), rows = document.querySelectorAll('#rates tbody tr');
  if (!box) return;
  box.addEventListener('input', function () {
    var q = box.value.trim().toLowerCase();
    rows.forEach(function (r) { r.hidden = q !== '' && r.textContent.toLowerCase().indexOf(q) === -1; });
  });
})();
