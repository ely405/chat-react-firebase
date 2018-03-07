import { st } from './firebase';

const uploadFile = (file, fileName) => st.ref().child(`/photos/${fileName}`).put(file);
const fileUploadStatus = (fnOnProcess, fnOnError, fnSuccess) => uploadFile.on('state_changed', fnOnProcess, fnOnError, fnSuccess);

export {
	uploadFile,
	fileUploadStatus,
};