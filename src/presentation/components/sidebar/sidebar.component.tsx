import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersGetListRequest } from "../../redux/users/users.slice";
import { selectUsersList } from "../../redux/users/users.selectors";

import { Paper } from "@mui/material";

import { UserData } from "../../../modules/users/domain/entities/users.entities";

import "./sidebar.styles.scss";
import SidebarUserItemComponent from "../sidebar-user-item/sidebar-user-item.component";

const SidebarComponent = () => {
  const dispatch = useDispatch();
  const usersList = useSelector(selectUsersList);

  useEffect(() => {
    dispatch(usersGetListRequest());
  }, []);

  return (
    <Paper className="sidebar-container">
      <Paper elevation={0} className="sidebar">
        {usersList.map((user: UserData, idx: number) => (
          <SidebarUserItemComponent key={idx} {...user} />
        ))}
      </Paper>
    </Paper>
  );
};

export default SidebarComponent;
