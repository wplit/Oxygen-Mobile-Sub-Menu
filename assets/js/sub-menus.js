jQuery(document).ready(function($) {
  
  
    /**
	 * Create container for menu link and append sub menu toggle button. (container needed to be able to center position the icon)
	 */
    $('.menu-item-has-children > a').wrap( '<div class="link-toggle-container"></div>');
	$('.link-toggle-container').append( '<button class="sub-menu-toggle"></button>');
					
  	
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
    
   /**
	 * Retrieve the color of the responsive menu links set in Oxygen (by adding fake element then removing, so we can use to make toggle buttons the same color
	 */
    var menuid = $(".oxy-nav-menu-responsive-dropdowns").attr('id'), //get the id of responsive menu
        fakeelement = $("<div class='fake oxy-nav-menu oxy-nav-menu-open'><div class='menu-item'><a></a></div></div>"); //add fake element with same classes open menu items so JS can extract the color set by Oxygen.
    
        fakeelement.appendTo('body'); //Add fake element
        fakeelement.attr("id",menuid); // Give it the ID of menu
    var color = $('.fake a').css('color'); // Retrieve the color that is added by Oxygen
        fakeelement.remove(); // Remove fake element 

    $( ".sub-menu-toggle" ).css("color", color); // Give sub menu toggle this color, so it can be inherited.

}); 
