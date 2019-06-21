# SMS Managment API 

This is a basic API built with express.js that model sending sms, deleting sms and receiving sms.

## Features
-   Send SMS
-   Delete SMS
-   Receive SMS

# Technologies
-   [Express](https://expressjs.com/)  Fast, un-opinionated, minimalist web framework for Node.js
-   [Sqlite](https://www.sqlite.org/)  SQLite is a C-language library that implements a [small](https://sqlite.org/footprint.html), [fast](https://sqlite.org/fasterthanfs.html), [self-contained](https://sqlite.org/selfcontained.html), [high-reliability](https://sqlite.org/hirely.html), [full-featured](https://sqlite.org/fullsql.html), SQL database engine.

## Setup - How to
-   Clone this repository using the command
-   Install dependencies with  `yarn install`
-   Start the development server by running:  `yarn start:dev`

## API Endpoints
<table>
<tr><th>Use Case</th><th>HTTP Method</th><th>Endpoint</th></tr>
<tr>
<td>Send SMS</td>
<td>POST</td>
<td>/sms/send/:senderId</td>
</tr>
<tr><td>Get all received sms</td> <td>GET</td>  <td>/sms/all/:contactId</td></tr>
<tr><td>Add new contact</td> <td>POST</td>  <td>/contact/add</td></tr>
<tr><td>Delete contact and messages</td> <td>DELETE</td>  <td>/contact/delete/:contactId</td></tr>
</table>

## License 
[MIT](https://github.com/chykehyman/PMS/blob/master/LICENSE)
