import { db } from './firebase';

const createUserData = (userId, userName, userEmail) => db.ref(`users/${userId}`).set({
	userName,
	userEmail,
});

const saveUserMessage = (message, idMessage, userId) => db.ref('/messages/').push(message);
const readUserMessage = fn => db.ref('/messages/').on('value', fn);

const saveConnectedUsersDb = (userId, dataToSave) => db.ref(`users_connected/${userId}`).set(dataToSave);
// contador de los usuarios que se conectan
const getUserConnect = () => db.ref('users/').once('child_added');

export {
	createUserData,
	saveUserMessage,
	readUserMessage,
	saveConnectedUsersDb,
	getUserConnect,
};