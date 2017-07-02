# Three Letter

Three Letter is an extremely simple CRUD application I built to learn NodeJS. My goal is to continually extend it. For example, I'd like to get the search feature working with Elasticsearch in the near future. As it exists at the time of this writing, this application can be easily adapted to suit any need, as a boilerplate template of sorts. I haven't yet created any DBMaintain type of scripts yet because the application is still bare-bones. To get started you'll need to do the following.

###### NOTICE! If you wish to use this as a MVP tool internally for your organization, ensure you secure your instance of the application. As of this writing, this app isn't configured to secure against SQL injection and other vulnerabilities!

1. Clone this project to your local computer.
2. Ensure you have MySQL installed on your computer or on a remote server. _You may use PostgreSQL if you wish, however, you'll need to make the necessary changes. The same applies to NodeJS/Cassandra/Neo4J/etc._
3. Use MySQL Workbench or the MySQL CLI tools to create your schema.
   Database/Schema Name: `tla`
   Table Name: `acronyms`
   id | acronym_name | acronym_description | bg_info | datetime
   -- | ------------ | ------------------- | ------- | --------
   Int | VarChar | VarChar | VarChar | DateTime
   -- | -------- | ------- | ------- | --------
   Auto Increment | | | CURRENT_TIMESTAMP |
   -------------- | - | - | - |
   Not Null | Not Null | Not Null | Null | Not Null
   -------- | -------- | -------- | ---- | --------
   Primary Key | | | |
   ----------- | - | -| - |
   Unique | | | |
   ------ | - | - | - |
4. Create a `.env` file at the root of the project directory and add the following KVPs:
   * MYSQL_HOST=
   * MYSQL_PORT=
   * MYSQL_USER=
   * MYSQL_PASSWORD=
   * MYSQL_DATABASE=
   * TLA_TCP_PORT=
5. Change directory to root of this project on your Terminal window.
6. Run the command: `npm install`.
7. Start the app by running the command: `npm start`.
