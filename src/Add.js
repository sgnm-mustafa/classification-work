import React, { useEffect, useState } from "react";
import { TextField } from "@fluentui/react/lib/TextField";
import { PrimaryButton, Stack } from "@fluentui/react";
import "./styles.css";

const UpdateNodeComponent = ({ value, updateNode, action }) => {
  // console.log(value, "value1");
  // console.log(updateNode, "updateNode1");
  // console.log(action, "action1");
  const [editing, setEditing] = useState(false);

  const [val, setval] = useState(action === "add" ? "" : value);

  const onchange = (event) => {
    //console.log(val, "onchange");
    setval(event.target.value);
  };

  useEffect(() => {
    setval(value);
    if (action === "add") {
      setEditing(true);
    } else {
      setEditing(false);
    }
  }, [value]);

  console.log(val, "valllladds");
  return (
    <Stack horizontal>
      <Stack className="add-inp">
        <span id="error_name"></span>
        {editing ? (
          <div>
            <h2>Add Item</h2>
          </div>
        ) : (
          <div>
            <h2>Edit Item</h2>
          </div>
        )}
        <TextField
          id="commentForm"
          name="title"
          onChange={onchange}
          value={val}
        />
        {editing ? (
          <PrimaryButton
            text="Add"
            className="add-btn"
            onClick={() => {
              updateNode(val);
              setval("");
            }}
          />
        ) : (
          <PrimaryButton
            text="Update"
            className="add-btn"
            onClick={() => {
              updateNode(val);
              setval("");
            }}
          />
        )}
      </Stack>
    </Stack>
  );
};

export default UpdateNodeComponent;
