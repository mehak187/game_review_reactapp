import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function AddReview() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="px-3 py-2 ms-3 rounded-4 bg-white text-black border-0"
        variant="primary"
        onClick={handleShow}
      >
        Add a Review
      </Button>
      <Modal className="addrev" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-cente ps-3">Add you review</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0">
          <form action="">
            <div className="star-rating light-grey-bg rounded-3 px-3 mt-3">
              <input type="radio" id="star1" name="rating" value="1" />
              <label for="star1"></label>
              <input type="radio" id="star2" name="rating" value="2" />
              <label for="star2"></label>
              <input type="radio" id="star3" name="rating" value="3" />
              <label for="star3"></label>
              <input type="radio" id="star4" name="rating" value="4" />
              <label for="star4"></label>
              <input type="radio" id="star5" name="rating" value="5" />
              <label for="star5"></label>
            </div>
            <div className="mt-3">
              <textarea
                name=""
                id=""
                rows="5"
                className="form-control shadow-none h-100 light-grey-bg"
                placeholder="Write here"
              ></textarea>
            </div>
            <div className="mt-3 text-end">
              <input
                type="submit"
                value="Add"
                className="rounded-pill main-bg text-white border-0 px-5 py-2"
              />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddReview;
