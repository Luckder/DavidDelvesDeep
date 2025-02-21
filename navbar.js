fetch('/_includes/navbar.html') // Or the correct path
  .then(response => response.text())
  .then(html => {
    document.getElementById('navbar-container').innerHTML = html;
  });
