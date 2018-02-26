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
// verifica si es en producción o desarrollo
const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;


// inicializa la app
if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

// inicializa el onjeto de autenticación
// se usará en auth.js por eso se exporta
const auth = firebase.auth();
const db = firebase.database();

export {
	auth,
	db,
};