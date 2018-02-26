import { db } from './firebase';

const createUserData = (userId, userName, userEmail) => db.ref(`users/${userId}`).set({
	userName,
	userEmail,
});
// const getUserData = () => db.ref('users').once('value');

// const saveUserMessage = (message, idMessage, userId) => db.ref(`users/${userId}/messages/${idMessage}`).push(message);
const saveUserMessage = (message, idMessage, userId) => db.ref('/messages/').push(message);
const readUserMessage = fn => db.ref('/messages/').on('value', fn);
// const readUserMessage = () => db.ref('/messages/').on('value', snap => console.log('read message bd', snap.val()));

const saveConnectedUsersDb = (userId, dataToSave) => db.ref(`users_connected/${userId}`).set(dataToSave);


// contador de los usuarios que se conectan
const getUserConnect = () => db.ref('users/').once('child_added');
// const onGetUSerConnect = () => db.ref('users/').on('value', snapshot => console.log('snapshot', snapshot.val()));


export {
	createUserData,
	// getUserData,
	saveUserMessage,
	readUserMessage,
	saveConnectedUsersDb,
	getUserConnect,
	// onGetUSerConnect,
};