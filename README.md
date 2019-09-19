Inside the db/ directory:
```npx sequelize-cli init```

Open a postgress console: ```psql postgres```
Create the table and the user:
```CREATE ROLE "admin" WITH LOGIN PASSWORD 'admin';```
```CREATE DATABASE "express-app-db";```

Inside the db/ directory:
```npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string```
```npx sequelize-cli db:migrate```
