import { auth } from './firebase';

const toRegisterNewUsers = (email, pass) => auth.createUserWithEmailAndPassword(email, pass);

const toStartSession = (email, pass) => auth.signInWithEmailAndPassword(email, pass);

const toCloseSession = () => auth.signOut();

const toPasswordChange = password => auth.currentUser.updatePassword(password);

const toPasswordReset = email => auth.sendPasswordResetEmail(email);

const toReauthUser = credential => auth.currentUser.reauthenticateWithCredential(credential);

const updateUserData = objData => auth.currentUser.updateProfile(objData);

const getCurrentUser = fn => auth.onAuthStateChanged(fn);

export {
	toRegisterNewUsers,
	toStartSession,
	toCloseSession,
	toPasswordChange,
	toPasswordReset,
	toReauthUser,
	updateUserData,
	getCurrentUser,
};