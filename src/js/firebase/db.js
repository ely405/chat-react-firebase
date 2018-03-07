import { db } from './firebase';

const createUserData = (userId, userName, userEmail) => db.ref(`users/${userId}`).set({
	userName,
	userEmail,
});

const saveUserMessage = (message, idMessage, userId) => db.ref('/messages/').push(message);
const readUserMessage = fn => db.ref('/messages/').on('value', fn);

const saveConnectedUsersDb = (userId, dataToSave) => db.ref(`users_connected/${userId}`).set(dataToSave);

// contador de los usuarios que se conectan
const getUserConnect = fn => db.ref('/users_conected/').on('value', fn);

export {
	createUserData,
	saveUserMessage,
	readUserMessage,
	saveConnectedUsersDb,
	getUserConnect,
};