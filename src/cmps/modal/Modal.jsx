import { useState } from 'react';
import { ModalBackground,ModalBody } from './style'


export const Modal = ({ children, shouldShow, setShouldShow }) => {

	return (
		<>
		{shouldShow && (
			<ModalBackground className='modal-test' onClick={() => setShouldShow(false)}>
				<ModalBody onClick={e => e.stopPropagation()}>
					<button onClick={() => setShouldShow(false)}>Hide Modal</button>
					{children}
				</ModalBody>
			</ModalBackground>
		)}
		</>
	);
}