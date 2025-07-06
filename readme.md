postgres installation with docker steps

install docker desktop

pull postgres image using the docker terminal 
docker pull posgres

run this command to start a container for postgres 
docker run  --name postgres-db -e POSTGRES_PASSWORD=mradul999 -p 5432:5432 -d postgres
username is set as default

we can see our containers using this command 
docker ps

we can use the cli to communicate with our databases but we have pgadmin gui extention  in the dockker which makes life easy

install this from the extentions section 


