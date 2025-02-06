# Node JS and its Runtime

## What is EcmaScript?

EcmaScript is a scripting language specification on which JavaScript is based. This tells us what JavaScript should look like; it serves as the guidelines and rules for scripting language design.

## What is JavaScript?

Javascript is a scripting language that confirms to the ECMAScript specification. it is the most widely used implementation of ECMA.
settimeout, fd.readFile isnt included in the ecma script it si beyond ecma implement by the browser thats why they re called web api's
compiler - v8 engine by google

## What is Node.js?

js meant to run on browser not on computer terminal
some people took out the v8 engine. added some backend things(filesystem reads) on top to create a new runtime to complete with BE languages like java
js was never meant to be run in the backend, eventually became very popular and is a popular choice of runtime on the backend

nodejs - not a language, not a framework, it is a runtime -> that can run js, can compile js

## What is Bun?

competetor of nodejs, it is faster than nodejs.

## What can u do with NodeJS?

1. create clis(command line interface)
2. create a video player
3. create a game
4. create an HTTP Server

## What is an HTTP Server?

A protocol that is defined for machines to communicate
Specifiaclly for websites, it is the most common way for your websites's frontend to talk to its backend
the thing that exposes theml model to the world

JUST TAKE ONE DAY AT A TIME

## Things client needs to woory about

HTTP (client side) ->

1. Protocol(HTTP/HTTPS)
2. Address(Url/IP/POSRT) of the backend server
3. Route
4. header, body, query params
5. Methods

## Things server needs to worry about

HTTP (server side) ->

1. Response headers
2. Response body
3. Status codes

## clientside

<https://chat.openai.com/backend-api/conversation>
https: protocol
url : chat.openai.com
route : backend-api/conversation
header : authentication info - cookies
body : whenever u send a req u ask it to do something eg what is 2+22 (usually in json)
method: what kind of req u are sending
do u want to put some data on the server : POST
do u want to put get data on the server : GET
also PUT, DELETE

## common status codes

1. 200 - everything is ok
2. 404 - page/route not found
3. 403 - authentication issues
4. 500 - internal server issues

## Express - library

There are many llibraries that let you create HTTP Servers. The most famous one is Express
this is slowly loosing its appeal, nextjs is becoming popular in backend
lets create an HTTP server in express
