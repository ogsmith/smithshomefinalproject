# smithshomefinalproject
Final Database Project

# MySQL Backend
MySQL was chosen as the backend over a noSQL database for multiple reasons. The first is that most menus look the same so the 
type content added to each one will not need to be changed in anyway, so it will not need any horizontal scaling features.
This application is meant to be a menu ordering system for any resturaunt to use, and everyone who wants to order from
any current resturaunt using the application will need to order through the front end. In order to increase speed for this 
ordering process, we put made every request a procedure call in the mysql backend, so all of the logic is being done at a
low level. 

# Python Backend
In order to further seperate the front end view from any kind of logic, a Flask application was created in order to call the mysql
procedures and be the only communicator to the backend. 
Steps to run:
  1)pip install flask 
  2)pip install sqlalchemy 
  3)pip install MySQL-python
  4)pip install pandas
  5) python backendcode.py
 
# React Frontend
This frontend application gives the resturaunt owners the ability to populate there menus. A sample menu was provided in order to 
demonstrate how the process would work, had the owner precreated the menu, the return on the python backend would be in 
similarly a marked JSON file to sample-items. 
Steps to run: 1) npm install 2) npm start

