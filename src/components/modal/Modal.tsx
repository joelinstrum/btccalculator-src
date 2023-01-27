import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import ModalStyled, {
  ModalContentStyled,
  ModalStyledFooter,
} from "./ModalStyled";
import { closeModal } from "../../state/features/modalSlice";
import { Portal } from "../";

interface ModalProps {
  title?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, title }) => {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeModal(""));
  };

  return (
    <Portal>
      <ModalStyled>
        <ModalContentStyled>
          {title && <Typography>Modal Window</Typography>}
          {children}
          <ModalStyledFooter>
            <Link underline="hover" onClick={close}>
              Close
            </Link>
          </ModalStyledFooter>
        </ModalContentStyled>
      </ModalStyled>
    </Portal>
  );
};

export default Modal;
