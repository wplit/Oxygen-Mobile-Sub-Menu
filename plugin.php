<?php
/**
 * Plugin Name: Oxygen Mobile Sub Menu
 * Plugin URI:  https://github.com/wplit/oxygen-mobile-sub-menu/
 * GitHub URI:  wplit/oxygen-mobile-sub-menu/
 * Description: Temporary Fix for Allowing Mobile Sub Menus in Oxygen.
 * Version:     1.1.0
 * Author:      David @ WPlit
 * Author URI:  https://wplit.com/
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License version 2, as published by the
 * Free Software Foundation.  You may NOT assume that you can use any other
 * version of the GPL.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.
 *
 * @package    OxygenSubToggles
 * @since      1.0.0
 * @copyright  Copyright (c) 2018, David Browne
 * @license    GPL-2.0+
 */

if ( ! defined( 'WPINC' ) ) {
	die;
}

add_action('plugins_loaded', 'lit_oxy_sub_toggles_init');
function lit_oxy_sub_toggles_init() {

  // check if Oxygen installed and active before using Oxygen dependant hook
  if( ! class_exists( 'CT_Component' ) ) {
        return;   
    }
		
  add_action( 'oxygen_enqueue_frontend_scripts', 'lit_oxy_menu_enqueue_files' );
	
}


/**
 * Loads the CSS and JS files on front end only
 */
function lit_oxy_menu_enqueue_files() {

	wp_enqueue_style( 
		'mobile-sub-menu-styles', 
		plugin_dir_url( __FILE__ ) . 'assets/css/mobile-sub-menus.css', 
		array(), 
		'1.1.0' 
	);
	
	wp_enqueue_script( 
		'mobile-sub-menus', 
		plugin_dir_url( __FILE__ ) . 'assets/js/sub-menus.js', 
		array( 'jquery' ), 
		'1.1.0', 
		true
	);

}
