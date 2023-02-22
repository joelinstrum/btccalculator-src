import { FormRow, Button } from "../../forms";

interface CardSaveProps {
  saveDisabled?: boolean;
  saveHandler?: () => void;
  revertHandler?: () => void;
}

const CardSave: React.FC<CardSaveProps> = ({
  saveDisabled,
  saveHandler,
  revertHandler,
}) => (
  <FormRow label="" align="right" sx={{ paddingRight: "20px" }}>
    <Button
      variation="primary"
      size="medium"
      disabled={saveDisabled}
      onClick={saveHandler}
    >
      Save
    </Button>
    <span>&nbsp;</span>
    <Button
      variation="secondary"
      size="medium"
      disabled={saveDisabled}
      onClick={revertHandler}
    >
      Revert
    </Button>
  </FormRow>
);

export default CardSave;
