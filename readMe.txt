6/17/2022

Pardis Toolabi

Smart Contract Engineering Internship Assignment:

The problem requires you to write two different components: a web
service providing REST API and a command line tool that uses the web service.


solution:

I used js language for the project using node.js, I also used
express package to write the rest api and mongoose dataBase
to store the data, the program gets two values from the user
(name, walletAddress).

* you can set new name-walletAddress:

due the the unfortunate event that I saw the assignment at
last minute, I did not have the time to design the frontend
you can set name and address value from postman

* you can get the latest walletAddress assigned to a name:

localhost:3000/client/info/name

* you can get all the walletAddresses assinged to a name:

localhost:3000/client/history/name