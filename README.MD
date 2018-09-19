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
3. Inside the Oxygen builder you should see all menu items, sub menu items and top level menu items.
4. Save and go to the front end of your site and you should see the menu toggles now working.

### To style sub menu items just in your responsive menu..

You may want to style the sub menu items differenly to make them look more like a sub menu items. In the [demo](https://demo.wplit.com/oxygen-mobile-menu/) you can see the font size and line height was reduced for sub menu items only. 

You can do this easily inside the Oxygen builder using the selector detector and ensuring you're specific with the selectors. Notice in the screenshot below I have selected the unique menu ID and the class 'oxy-nav-menu-open' before selecting the sub menu class and link.

<img src="https://user-images.githubusercontent.com/43051571/45732439-a69b3e00-bc1f-11e8-9365-0271712f6fe8.jpg">

Note: You won't see the menu toggle buttons inside the Oxygen builder. Use the builder just to style the menus as you need. The toggle buttons will automatically appear on the front end of your site.

## Screencast ##

Coming v/soon

## Changelog ##

### 1.0.0 - Sept 19, 2018 ###
* Initial Release
