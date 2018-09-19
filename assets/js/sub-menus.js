jQuery(document).ready(function($) {
  
  
    /**
	 * Create container for menu link and append sub menu toggle button. (container needed to be able to center position the icon)
	 */
    $('.menu-item-has-children > a').wrap( '<div class="link-toggle-container"></div>');
	$('.link-toggle-container').append( '<button class="sub-menu-toggle"></button>');
    
    /**
	 * Get menu link color as set in Oxygen to allow toggle arrows to inherit the color.
	 */
    var menulinkColor = $('.link-toggle-container > a').css("color");
    $('.link-toggle-container').css( "color", menulinkColor );
					
  	
  	/**
	 * Action to take when sub menu button is clicked
	 */
    $( ".sub-menu-toggle" ).click(function() {
      
      	$(this).parent().toggleClass( 'activated' ); //* Add class to link-toggle-container for styling
		$(this).parent().next( '.sub-menu' ).slideToggle( 'fast' ); //* Slide Toggle this menu item's sub menu.
      
        //* Find sibling menu items so we can close their sub menu at the same time this menu items sub-menu is opened
        var othermenus = $(this).closest( '.menu-item' ).siblings();

		othermenus.find( '.link-toggle-container' ).removeClass( 'activated' ); //* Remove the class that was added for styling
		othermenus.find( '.sub-menu' ).slideUp( 'fast' ); //* Slide up sub-menus.
    });
    
    /**
	 * Prevent styles breaking when changing window size
	 */
    $(window).resize(function() {
        
        $( ".sub-menu" ).removeAttr("style");
      
    }); 

}); 
