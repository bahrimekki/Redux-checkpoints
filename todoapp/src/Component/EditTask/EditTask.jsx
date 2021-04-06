import React from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
function EditTask({ show, handleClose, task, SubmitChange }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup size="sm" className="mb-3" onChange={task}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">
                            task :
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={SubmitChange}>
                    SubmitChange
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default EditTask;
