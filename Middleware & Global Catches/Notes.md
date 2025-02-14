# Middlewares

These are used for authentication purpose and input validations meant as prechecks.
Do not repeat youself.
When you know you have to do bunch of prechecks, you move them some other place and that some other place is called a middleware.

## next()

This next is used to go to next function when prechecks are fine. This is to move forward with next lines of code.
Middleware funcs are callbacks function which can be used as prechecks and can be passed in app.get to make the code simpler
Body parser is also a middleware

## last thing in middlewares

app.use(express.json()); ->This itself returns a function.
This is used to post body parameters. This use means that this middleware is going to get called everywhere.
So if we have a middleware name userMiddleware we can type app.use(userMiddleware) to call it everywhere instead of writing it repeateadly.
