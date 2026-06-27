
    
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggleBtn = document.getElementById('menuToggleBtn');
            const mobileDrawerMenu = document.getElementById('mobileDrawerMenu');
            const drawerLinks = document.querySelectorAll('.drawer-link-node');
            const toggleIcon = menuToggleBtn.querySelector('i');

            // Toggle active slide state upon button tapping click events
            menuToggleBtn.addEventListener('click', function() {
                mobileDrawerMenu.classList.toggle('is-active');
                
                // Dynamically flip icon from bars vector layout straight to an X mark
                if (mobileDrawerMenu.classList.contains('is-active')) {
                    toggleIcon.classList.remove('fa-bars');
                    toggleIcon.classList.add('fa-xmark');
                } else {
                    toggleIcon.classList.remove('fa-xmark');
                    toggleIcon.classList.add('fa-bars');
                }
            });

            // Automatically close the sliding drawer when an item path target is clicked
            drawerLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileDrawerMenu.classList.remove('is-active');
                    toggleIcon.classList.remove('fa-xmark');
                    toggleIcon.classList.add('fa-bars');
                });
            });
        });
  
