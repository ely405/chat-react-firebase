import React from 'react';

import { Modal, Image } from 'react-bootstrap';

const ImagesModal = props => (
	<div>
		<Modal show={props.showModal} onHide={props.closeModal}>
			<Modal.Body className='d-flex flex-ali-center flex-col mh-90vh'>
				<Image src={props.imgURL} responsive />
				<button type="button" class="close" onClick={props.closeModal}><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
			</Modal.Body>
		</Modal>
	</div>
);

export default ImagesModal;