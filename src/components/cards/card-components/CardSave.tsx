import { FormRow, Button } from "../../forms";

interface CardSaveProps {
  saveDisabled?: boolean;
  saveHandler?: () => void;
}

const CardSave: React.FC<CardSaveProps> = ({ saveDisabled, saveHandler }) => (
  <FormRow label="" align="right" sx={{ paddingRight: "20px" }}>
    <Button
      variation="primary"
      size="medium"
      disabled={saveDisabled}
      onClick={saveHandler}
    >
      Save Changes
    </Button>
  </FormRow>
);

export default CardSave;
