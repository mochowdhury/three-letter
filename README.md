# Three Letter

###### NOTICE! If you wish to use this as a MVP tool internally for your organization, ensure you secure your instance of the application. As of this writing, this app isn't configured to secure against SQL injection and other vulnerabilities!

Three Letter is an extremely simple CRUD application I built to learn NodeJS. My goal is to continually extend it. For example, I'd like to get the search feature working with Elasticsearch in the near future, as time allows. As it currently exists, this application can easily be adapted to suit any need; phone directory, acronym repository, etc.. I have yet to create any DBMaintain type scripts because the application is still bare-bones.

To get started you'll need to do the following:

1. Clone this project to your local computer.
2. Ensure you have MySQL installed on your computer or on a remote server. _You may use PostgreSQL if you wish, however, you'll need to make the necessary changes. The same applies to NodeJS/Cassandra/Neo4J/etc._
3. Use MySQL Workbench or the MySQL CLI tools to create your schema.
   * Database/Schema Name: `tla`
   * Table Name: `acronyms`
      * Columns:
         * id
            * Int
            * Auto Increment
            * Not Null
            * Primary Key
            * Unique
         * acronym_name
            * VarChar
            * Not Null
         * acronym_description
            * VarChar
            * Not Null
         * bg_info
            * VarChar
            * Null
         * datetime
            * CURRENT_TIMESTAMP
            * Not Null
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
