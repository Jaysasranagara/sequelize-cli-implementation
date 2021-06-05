# using sequelize cli to shorten workflow
a proof of work using sequelize-cli to input data into postgreSQL

This a proof of work of using sequelize-cli to push data into postgreSQL
the usage of this application is to streamline the process of using sequelize to apply data to postgreSQL. I've personally been confuse using 
sequelize on it own, creating the queryInterface manually, inputing the datatype one by one, and other workload really add time into
my routine. I figures I need to find a way to shorten the time so I can focus on other much more important stage such as unit testing and integration.
by using the cli, I've shorten the process and time need to create the individual column and migrating the database into 
postgresql.



data is input using sequelize-cli from the terminal, using the code (sequelize init) to first
create the config, model, migrations, and seeders
the db is first create by doing (sequelize db:create), with the model using 
(sequelize model:create --name database --attributes nama:string,umur:string,dataId:string,healthStatus:string)

in here, I can break down the code into 3 part
- model:create    //create the model/table for the database
- --name:         //give a name for the database
- --attributes    //what should the table/model contain, and what type of data is it

the next step is to generate the seed, which I did using (sequelize seed:generate --name  data_dummy)

the seed should show up in the folder of the code as 20210602060107-data_dumdum.js

Finally, we're going to migrate the db using (sequelize db:migrate)

The db should show up in postgreSQL
