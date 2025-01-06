
til video 10 till 00.50

cd server > npm run dev == to run backend

 




1. Course planning
2. Env setup
3. Create express sever -> express
4. http req and res
5. nodemon and morgan pkgs -> nodemon, morgan
6. API testing with postman
7. middlewares and types of middlewares -> built-in: urlencoded({extended : true}), json()
8. express error handling middleware -> body-parser
9. How to handle http errors -> http-errors
10. How to secure API -> xss-clean, express-rate-limit





10. 
xss-clean: 
What is XSS (Cross-Site Scripting)?
Cross-Site Scripting (XSS) is a security vulnerability that allows attackers to inject malicious scripts into webpages viewed by other users. These scripts can steal sensitive data (e.g., cookies, session tokens) or perform actions on behalf of the user, such as making unauthorized API requests.

What does xss-clean do?
xss-clean is a middleware that helps prevent XSS attacks by sanitizing user inputs. It removes potentially malicious code from the input data, ensuring that user-submitted data (such as query parameters, headers, or POST body) does not contain harmful scripts.

How does xss-clean work?
It scans input data (e.g., form fields, URL parameters, and headers) for potential XSS payloads.
It then sanitizes the data by removing or encoding harmful characters (such as <, >, and &) to prevent them from being executed as JavaScript in the browser.




