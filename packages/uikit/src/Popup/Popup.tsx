import { FC, PropsWithChildren } from 'react';
import { PopupProps } from './Popup.types';
import * as Dialog from '@radix-ui/react-dialog';
import './Popup.css';

export const Popup: FC<PropsWithChildren<PopupProps>> = ({ trigger, children }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="aiq__popup-overlay" />
        <Dialog.Content className="aiq__popup-content">{children}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
