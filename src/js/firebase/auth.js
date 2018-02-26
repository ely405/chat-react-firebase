import { auth } from './firebase';

// registro de usuario nuevo
const toRegisterNewUsers = (email, pass) => auth.createUserWithEmailAndPassword(email, pass);

// inicio de sesión
const toStartSession = (email, pass) => auth.signInWithEmailAndPassword(email, pass);

// cerrar sesión

const toCloseSession = () => auth.signOut();

// actualizar contraseña

const toPasswordChange = password => auth.currentUser.updatePassword(password);

// restablecer contraseña

const toPasswordReset = email => auth.sendPasswordResetEmail(email);

// reautenticar usuario
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