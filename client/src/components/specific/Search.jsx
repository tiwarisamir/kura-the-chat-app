import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/SampleData";

const Search = () => {
  const search = useInputValidation("");

  const [users, setUsers] = useState(sampleUsers);

  let isLoadingSendFriendRequest = false;

  const addFriendler = (id) => {
    console.log(id);
  };

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>FInd People</DialogTitle>
        <TextField
          lable=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((i) => {
            return (
              <UserItem
                user={i}
                key={i._id}
                handler={addFriendler}
                handlerIsLoading={isLoadingSendFriendRequest}
              />
            );
          })}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
