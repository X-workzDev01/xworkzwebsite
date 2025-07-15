import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { Modal } from "semantic-ui-react";

const HomeModel = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {" "}
      <Modal
        className="h-auto w-auto rounded-5 position-relative  "
        style={{
          backgroundColor: "#bdb7b2",
        }}
        open={isOpen}
      >
        <div className="m-3">
          <div className="d-flex  justify-content-end mt-3 me-4 ">
            <TfiClose
              color="black"
              onClick={() => setIsOpen(false)}
              size={20}
            />
          </div>

          <div className="d-flex justify-content-center mt-n3">
            <img
              src="https://www.x-workz.in/Logo.png"
              height={100}
              width={250}
              alt="png"
            />
          </div>
          <div className="d-flex justify-content-center ">
            <p className="text-black fw-bolder fs-2">
              <span className="fw-bolder text-danger">FREE</span> 3 months class
              for 2025 Graduates Starting from July month{" "}
            </p>
          </div>
          <div className="d-flex justify-content-center ">
            <p
              className="fs-2 fw-bolder "
              style={{
                color: "purple",
              }}
            >
              Contact :
            </p>
          </div>
          <div className="d-flex justify-content-center ">
            <p className="text-black fs-2">9886971480 / 9886971483</p>
          </div>
          <div className="d-flex justify-content-center m-3 ">
            <p className="text-danger fs-2 fw-bold">Upcoming batches </p>
          </div>
          <div className="d-flex justify-content-center ">
            <p className="fs-2 text-black fw-bold ">
              <Link to={"/register"}>
                <i class="me-3 text-decoration-none ">Register now</i>
              </Link>
              Limited seats available
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HomeModel;
