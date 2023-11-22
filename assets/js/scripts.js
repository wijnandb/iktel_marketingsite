var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.dropdown').forEach(function(dropdownToggle) {
      dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        let dropdownMenu = this.querySelector('.dropdown-menu');
        if (dropdownMenu) {
          dropdownMenu.classList.toggle('show');
        }
      });
    });
  
    window.onclick = function(event) {
      if (!event.target.matches('.dropdown-toggle')) {
        var dropdowns = document.getElementsByClassName('dropdown-menu');
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  });
  