import { Box, Modal } from "@mui/material";

export default function SubmitModel(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 6,
  };

  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="rounded" sx={style}>
          <div className="d-flex flex-column justify-content-center align-items-center gap-2">
            <i className="text-primary fs-2 bi bi-check-circle-fill" />
            <h5 className="fw-semibold text-muted">Submitted</h5>
          </div>
        </Box>
      </Modal>
    </>
  );
}
