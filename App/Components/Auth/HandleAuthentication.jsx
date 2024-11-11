import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@firebase/auth'

const handleAuthentication = async () => {
  try {
    if (user) {
      // If user is already authenticated, log out
      console.log('User logged out successfully!');
      await signOut(auth);
    } else {
      // Sign in or sign up
      if (isLogin) {
        // Sign in
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user); // Set the authenticated user
        console.log('User signed in successfully!');
      } else {
        // Sign up
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user); // Set the newly created user
        console.log('User created successfully!');
      }
    }
  } catch (error) {
    console.error('Authentication error:', error.message);
  }
};


export default handleAuthentication;

