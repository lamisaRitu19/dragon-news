/*
Basic setup
1. create firebase app
2. get firebase configuration inside firebase.config.js
3. make sure to export app from firebase config
4. create a react app
5. install bootstrap and react-bootstrap
6. make sure to import bootstrap css in the index.js file
*/

/* 
-------------Context---------------
1. component AuthProvider is created and <App/> is set inside <AuthProvider> in index.js. Hence App becomes its children
2. in AuthProvider function in AuthProvider.js, children is set as argument.
3. AuthContext is created using createContext and exported.
4. AuthContext.Provider is set with value authInfo in return.
5. auth is get using getAuth(app) from firebase/auth and firebase.config.js
6. google signInWithPopup is used inside providerLogin and set inside authInfo object. providerLogin is used in RightSideNav.js
7. createUserWithEmailAndPassword is used inside function createUser and set inside authInfo object. createUser is used in Register.js
8. signInWithEmailAndPassword is used inside function signIn and set inside authInfo object. signIn is used in Login.js
9. updateProfile is used inside function updateUserProfile and set inside authInfo object. updateUserProfile is used in Register.js
10. sendEmailVerification is used inside function verifyEmail and set inside authInfo object. verifyEmail is used in Register.js
11. signOut is used inside function logOut and set inside authInfo object. logOut is used in Header.js
12. onAuthStateChanged is used in useEffect hook and set in a variable unsubscribe so that user state is updated, it clears the code. onAuthStateChanged observes the changing of user state. 
13. user and setUser state is declared using useState hook. User is set inside setUser in onAuthStateChanged
14. 
*/

/*
Use of private route
1. Allow only authenticated user to visit the route
2. The user does not always go to the login page when reloaded, due to the check of loading
3. Redirect the user to the route they wanted to go before login 
*/

/*
-----------------PrivateRoute---------------
1. <PrivateRoute> component is created and set around <News> component in Routes.js so <News> becomes its children. This children is the argument in PrivateRoute function
2. user is loaded using useContext(AuthContext) hook 
3. if user is not present, it is navigated to login route using <Navigate> hook, otherwise returned to its children.
4. to remember the location before navigation, location variable is set and useLocation hook is used. This is set in 'from' property inside an object in 'state' attribute of <Navigate> and there replace attribute is also used. This means if the user is logs in, then the page will be replaced by the page he was before.
5. so in Login.js, variable navigate is set using useNavigate hook, variable location is set using useLocation hook which will take the user back to the desired page by variable from is set by location.state?.from?.pathname or to '/'. So inside signIn, navigate(from, {replace: true})
6. a problem arises which is when to user reloads the page, it navigates back to login page because before the completion of checking if the user is present or not, it shows it default value 'null'. 
7. to stop the problem loading and setLoading state is declare using useState hook in AuthProvider and its default value is true. It becomes false when user is set in setUser inside onAuthStateChanged hook. Before other functions of AuthProvider loading is set to true.
8. hence in PrivateRoute, it is checked if the loading is true, spinner is shown, otherwise user is checked. 
*/

/*
--------------Register.js---------------
1. user name and url is updated and its function handleUpdateUserProfile is called inside function createUser
2. terms and condition check box must be checked to enable the register button. So a state accepted and setAccepted is declared with default value false and setAccepted is set with onClick handler of check box. Disabled attribute with value 'not accepted' is placed on register button which means if accepted value is true, it will become false and the button will not be disabled. 
3. error and setError state is declared to show the error message of registration. It is set in the catch of createUser function and set to empty in then.
4. function handleEmailVerification is called inside function createUser and success toast is shown to verify email. emailVerified property of user remains false so we want that until email is verified, the user will not be able to login. So in the signIn function of Login.js, condition is set to check emailVerified property of user. When the user is not sign in, error toast is shown and if the user is verified it will take to the desired place. This will only stop the navigation of the user but will not stop the update of the user state. If the same condition of emailVerified is set on the function onAuthStateChanged in AuthProvider, it will stop the update of user state but if later email is verified and user logs in and then tries to log out, spinner will show and error will be shown. This happen because when the user logs out, the currentUser becomes null so no emailVerified property hence the condition here should be to check if the currentUser is null or currentUser.emailVerified is true. Another problem is if unverified email is used to log in and after failure tries to go to the news page, spinner is shown. This is because before hitting the signInWithEmailAndPassword function, loading state is set to true and then sign in is failed and goes to catch, loading state is never set to false. To stop this finally is added in signIn function in Login.js where loading is set to false. Finally is always hit, if the function goes to then or catch. 
*/

/*
Name and other field values can be taken
1. In form, by onSubmit(). In onSubmitHandler, values are taken by event.target.value
2. In form, by using onChange() and for each value state is declared. On handleNameChange, value is set on setName(event.target.value) and when form is submitted, name value is taken from name state.
3. Inform, using useRef hook and ref. useRef is set in a variable with default value. That variable is set in ref and on handleSubmit, variable.current.value is shown.
*/