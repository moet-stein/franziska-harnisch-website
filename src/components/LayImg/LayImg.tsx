import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  imgWidth: {
    width: '300px',
    cursor: 'pointer',
    transition: 'box-shadow .3s',
    borderRadius: '3px',
    '&:hover': {
      boxShadow: '0 0 20px rgba(5,5,5,.5)',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #fff',
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  '@media only screen and (max-width: 600px)': {
    topPart: {
      flexDirection: 'column',
    },
  },
}));

export default function LayImg({ img }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box m={1} onClick={handleOpen}>
        {img.image && (
          <img
            className={classes.imgWidth}
            src={img.image.childImageSharp.fluid.src}
          />
        )}
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {img.image && <img src={img.image.childImageSharp.fluid.src} />}
            {img.imageTitle && (
              <Typography variant="h6">{img.imageTitle}</Typography>
            )}
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}
