import * as firebase from 'firebase';

import firebaseConfig from '../../../firebase-config';

const prodConfig = {
	apiKey: firebaseConfig.production.API_KEY,
	authDomain: firebaseConfig.production.AUTH_DOMAIN,
	databaseURL: firebaseConfig.production.DATABASE_URL,
	projectId: firebaseConfig.production.PROYECT_ID,
	storageBucket: firebaseConfig.production.STORAGE_BUCKET,
	messagingSenderId: firebaseConfig.production.MESSAGING_SENDER_ID,
};

const devConfig = {
	apiKey: firebaseConfig.development.API_KEY,
	authDomain: firebaseConfig.development.AUTH_DOMAIN,
	databaseURL: firebaseConfig.development.DATABASE_URL,
	projectId: firebaseConfig.development.PROYECT_ID,
	storageBucket: firebaseConfig.development.STORAGE_BUCKET,
	messagingSenderId: firebaseConfig.development.MESSAGING_SENDER_ID,
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();
const st = firebase.storage();

export {
	auth,
	db,
	st,
};