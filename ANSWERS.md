<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

* Middleware - A piece of code that goes between our request and our response. It can alter the response, or log things to the console, or provide security. Any number of functions!

* Sessions - Sessions are user specific data stores that keep track of information and access on your website. A user visits, which generates a unique session and allows the website to access that information from our server. This can be used to allow the user access to restricted areas, or to personalize the website for the user.

* Bcrypt - BCrypt is a password hashing tool. It allows us to hash a users password and increase the complexity of our passwords by salting them and designating a unique number of hashing rounds.

* JWT - Stands for JSON Web Token. This is an encrypted token that we can pass around and store in various ways. The token contains a payload of information (such as the username, or other user info) that we can use in our site to verify access.

2.  What does bcrypt do in order to prevent attacks?

* Bcrypt allows passwords to be salted to prevent rainbow table attacks. They also allow "rounds" of hashing whereby the password is hashed and then that hash is hashed a designated number of times.

3.  What are the three parts of the JSON Web Token?
* Header - Contains type of token and hashing algorithm
* Payload - Information we want stored on the token (Claims)
* Signature - An encoded string that combines the encoded header, payload, and a secret.
