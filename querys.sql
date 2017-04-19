DROP PROCEDURE IF EXISTS getMenu;
DELIMITER $$
CREATE PROCEDURE getMenu(menuid int(11))
	BEGIN
		select menu.menu_category from menu;
	END $$
DELIMITER ;
call getMenu(1);

DROP PROCEDURE IF EXISTS getRestaurant;
DELIMITER $$
CREATE PROCEDURE getRestaurant(restaurantid int(11))
	BEGIN
		select restaurant.restaurant_name from restaurant;
	END $$
DELIMITER ;
call getRestaurant(1);

DROP PROCEDURE IF EXISTS getMenuItem;
DELIMITER $$
CREATE PROCEDURE getMenuItem(menuitem int(11))
	BEGIN
		select menu_item.item_name from menu_item;
	END $$
DELIMITER ;
call getMenuItem(1);

DROP PROCEDURE IF EXISTS addMenuItem;
DELIMITER $$
CREATE PROCEDURE addMenuItem(newmenuitem_id int(11), new_item_name varchar(64),new_item_desc varchar(64),new_item_price int(11), new_menu_id int(11))
	BEGIN
		INSERT INTO menu_item (menu_item_id,item_name,item_desc,item_price, menu_id) VALUES (newmenuitem_id ,newmenuitem_id,new_item_desc,new_item_price, new_menu_id);
	END $$
DELIMITER ;
call addMenuItem(1, "", "", 1, 1);

DROP PROCEDURE IF EXISTS removeMenuItem;
DELIMITER $$
CREATE PROCEDURE removeMenuItem(newmenuitem int(11))
	BEGIN
		DELETE FROM menu_item WHERE menu_item.menu_item_id = newmenuitem;
	END $$
DELIMITER ;
call removeMenuItem(1);

DROP PROCEDURE IF EXISTS updateMenuItem;
DELIMITER $$
CREATE PROCEDURE updateMenuItem(newmenuitem_id int(11), new_item_name varchar(64),new_item_desc varchar(64),new_item_price int(11))
	BEGIN

    UPDATE menu_item
    SET    
           item_name  = new_item_name,
		   item_desc = new_item_desc,
		   item_price = new_item_price
			
    WHERE  menu_item_id = newmenuitem_id ; 

	END $$
DELIMITER ;
call updateMenuItem(1, "", "", 1);


