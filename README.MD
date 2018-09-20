# Oxygen Mobile Sub Menu #
**Contributors:** David Browne  
**Tags:** oxygen  
**Requires at least:** Oxygen 2.0
**License:** GPLv2 or later  
**License URI:** http://www.gnu.org/licenses/gpl-2.0.html

This plugin allows you to add sub menu toggle functionality to your site created in [Oxygen](http://oxygenbuilder.com/).

See [demo](https://demo.wplit.com/oxygen-mobile-menu/) for working example.

(designed as a temporary solution until something similar is added to Oxygen, if that happens... just uninstall this plugin before updating to the next Oxygen version)

There are no settings or setup. The plugin is intentionally simple and just adds basic styling and some JS to add the toggle buttons. You can style the sub menu however you want using the Oxygen UI (explained below)

For general info on setting up menus in Oxygen, refer to the [offical documentation](https://oxygenbuilder.com/documentation/builder-elements/menu/).
 

## Installation ##

1. [Download the plugin here.](https://github.com/wplit/Oxygen-Mobile-Sub-Menu/archive/master.zip)
2. Go to Plugins > Add New in your WordPress admin. Click on `Upload Plugin` and browse for the zip file.
3. Activate the plugin. There are no settings.

## Usage ##

1. Ensure you have enabled dropdowns in the primary menu settings.
2. Ensure you have 'Include dropdowns links in the responsive menu' checked also.
3. When viewing the responsive menu from inside Oxygen (after clicking the burger menu) you should see all the menu items.
4. Save and go to the front end of your site and you should see the menu toggles now working.

### To style just the sub menu items in your responsive menu..

You may want to style the sub menu items differently to make them look more like sub menu items. In my [demo](https://demo.wplit.com/oxygen-mobile-menu/), you can see the font size and line height was reduced for sub menu items only to make it more obvious. 

In Oxygen you already have the controls to style the menu items, but to target the sub menu items only you need to use the selector detector. 

Notice in the screenshot below I have selected the unique menu ID and the class 'oxy-nav-menu-open' before selecting the sub menu class and link. This specificity allows you to override the styles already created for your overall menu. 

<img src="https://user-images.githubusercontent.com/43051571/45732439-a69b3e00-bc1f-11e8-9365-0271712f6fe8.jpg">

Note: You won't see the menu toggle buttons inside the Oxygen builder. Use the builder just to style the menus as you need. The toggle buttons will automatically appear on the front end of your site.

You can change the color of the toggle buttons by adding... 

.oxy-nav-menu-responsive-dropdowns .sub-menu-toggle { color: red; )

## Screencast ##

Coming v/soon

## Changelog ##

### 1.0.0 - Sept 19, 2018 ###
* Initial Release
