import React from 'react';

import { Modal, Image } from 'react-bootstrap';

const ImagesModal = props => (
	<div>
		<Modal show={props.showModal} onHide={props.closeModal}>
			<Modal.Header closeButton>
					<Image src={props.imgURL} responsive />;
			</Modal.Header>
		</Modal>
	</div>
);

export default ImagesModal;