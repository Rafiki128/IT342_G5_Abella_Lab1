IT342 Lab 1 - Project Progress Checklist
✅ DONE
[x] Database Architecture: Created MySQL auth_db and users table with BCrypt-compatible VARCHAR(100) password column. 93b4d499ddbdf95298a96d6d0caae0fb06aaff2e

[x] Backend Dependency Setup: Configured pom.xml/build.gradle with JPA, MySQL, and Security dependencies.                   93b4d499ddbdf95298a96d6d0caae0fb06aaff2e

[x] User Entity Layer: Implemented User.java with fields: userid, fname, lname, username, password, email, status. 93b4d499ddbdf95298a96d6d0caae0fb06aaff2e

[x] Data Access Layer: Created UserRepository interface extending JpaRepository. 93b4d499ddbdf95298a96d6d0caae0fb06aaff2e

[x] Security Configuration: Defined BCryptPasswordEncoder bean and configured SecurityFilterChain to permit /api/auth/**. 93b4d499ddbdf95298a96d6d0caae0fb06aaff2e

[x] Business Logic Layer: Implemented UserService to handle password encoding and user persistence. 93b4d499ddbdf95298a96d6d0caae0fb06aaff2e

[x] REST Controller: Finalized AuthController with registration logic and @CrossOrigin for React integration. 93b4d499ddbdf95298a96d6d0caae0fb06aaff2e

[ ] Modular CSS Implementation: Creating unique .css files for Landing, Login, Register, and Dashboard. 308892e835319803d6e46b2c558ac1545a892f7c

[ ] State Management: Finalizing formData hooks in React to ensure they match the Backend User Entity. 308892e835319803d6e46b2c558ac1545a892f7c


🚧 IN-PROGRESS

[ ] Complete Login.js with Base64 authentication logic.

[ ] Implement Dashboard.js to fetch and display profile data from /api/user/me.

[ ] Set up App.js routing with react-router-dom.

📝 TODO


