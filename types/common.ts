export interface ConfirmationAlertDialogProps {
  title: string;
  description: string;
  actionMsg: string;
  actionFn: () => void;
  openConfirmationDialog: boolean;
  setOpenConfirmationDialog: React.Dispatch<React.SetStateAction<boolean>>;
}
