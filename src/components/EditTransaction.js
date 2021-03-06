import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const EditTransaction = (props) => {
  const [open, setOpen] = useState(false);
  const [transaction, setTransaction] = useState({
    transactionName: "",
    proportion: "",
    month: "",
    cost: "",
  });

  const handleClickOpen = () => {
    setTransaction({
      transactionName: props.transaction.transactionName,
      proportion: props.transaction.proportion,
      month: props.transaction.month,
      cost: props.transaction.cost,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setTransaction({ ...transaction, [event.target.name]: event.target.value });
  };

  // Update transaction and close modal form
  const handleSave = () => {
    props.updateTransaction(transaction, props.link);
    handleClose();
  };

  return (
    <div>
      <Button color="primary" size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit transaction</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="Transction Name"
            name="transactionName"
            value={transaction.transactionName}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Proportion"
            name="proportion"
            value={transaction.proportion}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Month"
            name="month"
            value={transaction.month}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Amount"
            name="cost"
            value={transaction.cost}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditTransaction;
