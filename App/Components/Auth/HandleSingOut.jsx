import signOut from '@firebase/auth'

const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign-out error:', error.message);
    }
};

export default handleSignOut;