// Connect to the database and retrieve the menu items
fetch('get_menu_items.php')
  .then(response => response.json())
  .then(menuItems => {
    const menuContainer = document.querySelector('#menu-items');
  
  })
