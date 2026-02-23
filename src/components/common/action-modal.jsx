import React from "react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { CheckCircle2Icon } from "lucide-react";

const ActionModal = ({
  isOpen,
  onClose,
  title,
  description,
  buttonCloseText,
}) => {

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="mx-auto md:p-6 bg-white border border-gray rounded-xl">
        <AlertDialogHeader className="w-full flex flex-col items-center justify-center">
          <div className="w-16 h-16 space-y-2 flex items-center justify-center rounded-full">
            <CheckCircle2Icon className="w-full h-full text-primary" />
          </div>
          <AlertDialogTitle className="mt-3 text-base md:text-lg font-semibold">{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-sm md:text-base text-tertiary">
            {description}
          </AlertDialogDescription>

          <AlertDialogCancel
            onClick={onClose}
            className="w-full h-11 mt-3 bg-[linear-gradient(to_bottom,#41B883_0%,#41B883_50%,#2EFFA2_100%)] hover:opacity-80 !border border-gray-300 !text-white !rounded-full cursor-pointer"
          >
            {buttonCloseText}
          </AlertDialogCancel>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ActionModal;
