import { useState } from "react";
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertActions,
  Button,
} from "../ui";

export const AlertDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Alert open={isOpen} onClose={setIsOpen}>
      <AlertTitle>Are you sure you want to refund this payment?</AlertTitle>
      <AlertDescription>
        The refund will be reflected in the customer’s bank account 2 to 3
        business days after processing.
      </AlertDescription>
      <AlertActions>
        <Button plain onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button onClick={() => setIsOpen(false)}>Refund</Button>
      </AlertActions>
    </Alert>
  );
};
