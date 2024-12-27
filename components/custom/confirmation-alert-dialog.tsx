import React from "react";

import {
  AlertDialogAction,
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { ConfirmationAlertDialogProps } from "@/types/common";

const ConfirmationAlertDialog = ({
  title,
  description,
  actionMsg,
  actionFn,
  openConfirmationDialog,
  setOpenConfirmationDialog,
}: ConfirmationAlertDialogProps) => {
  return (
    <AlertDialog
      open={openConfirmationDialog}
      onOpenChange={setOpenConfirmationDialog}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => actionFn()}>
            {actionMsg}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationAlertDialog;
