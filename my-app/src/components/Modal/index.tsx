import { Modal } from "antd";
import React from "react";
import {modalType} from './types'

const PhotoModal = (props: modalType) => {

  return (
    <>
      <div data-testid="modal">
        <Modal
          width={800}
          centered
          open={props.modalOpen}
          onCancel={() => {
            props.setModalOpen(false);
            props.setImgUrl("");
            props.setPhotoTitle("");
          }}
          footer={null}
        >
          {props.children}
        </Modal>
      </div>
    </>
  );
};
export default PhotoModal;
