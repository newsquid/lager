#Lager
This is the our logger setup (/lager, gitit?)
##The server
The server consist of simple, configurable components:

1. An nginx configuration (server/default) that:
	* Listens on port 81, and allows only HEAD requests.
	* Allows CORS quite freely and
	* Logs certain request data, such as certain url parameters, to
	the log file (/var/log/nginx/access.log)

2. A logrotate script (server/nginx) that manages the rotation of the access.log file.

3. A few scripts to filter and peruse the log files.

##The clients
Clients simply do appropriate http request to the server, in a manner that is
(hopefully) idiomatic to their language.
