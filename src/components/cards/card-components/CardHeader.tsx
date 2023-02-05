import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import { Button, InputText } from "../../forms";
import { removeRoiCard } from "../../../state/features/cardSlice";
import { updateCardProperty } from "../../../state/features/cardSlice";

interface CardHeaderProps {
  title: string;
  index: number;
  onTitleChange: () => void;
}

const CardHeaderStyled = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  index,
  onTitleChange,
}) => {
  const dispatch = useDispatch();
  const [inEditMode, setInEditMode] = useState(false);

  const removeHandler = () => {
    dispatch(removeRoiCard({ index }));
  };

  const onEditClick = () => {
    setInEditMode(true);
  };

  const saveEdit = (title: string) => {
    setInEditMode(false);
    dispatch(
      updateCardProperty({
        property: "title",
        value: title,
        index,
      })
    );
  };

  const updateSaveEdit = (title: string) => {
    saveEdit(title);
    onTitleChange();
  };

  return (
    <CardHeaderStyled>
      <div>
        {inEditMode && (
          <InputText
            value={title}
            size="large"
            onBlur={(value: string) => updateSaveEdit(value)}
            autoFocus={true}
          />
        )}
        {!inEditMode && (
          <>
            {title}
            <EditIcon sx={{ maxHeight: "14px" }} onClick={onEditClick} />
          </>
        )}
      </div>
      <div>
        <Button variation="alert" size="small" onClick={removeHandler}>
          Remove
        </Button>
      </div>
    </CardHeaderStyled>
  );
};

export default CardHeader;
