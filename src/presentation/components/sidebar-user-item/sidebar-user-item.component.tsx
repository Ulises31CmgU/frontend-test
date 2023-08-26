import React from "react";
import { useNavigate } from "react-router";

import { Avatar, Card, Typography } from "@mui/material";

import { UserData } from "../../../modules/users/domain/entities/users.entities";
import { URL_ROUTES } from "../../router/url.routes";

import "./sidebar-user-item.styles.scss";

const SidebarUserItemComponent = ({
  avatar,
  first_name,
  last_name,
  email,
  id,
}: UserData) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${URL_ROUTES.private.chat.fullPath}/${id}`);
  };

  return (
    <div onClick={handleClick}>
      <Card className="sidebar-user-item-container">
        <Avatar src={avatar} />
        <div className="texts-contanier">
          <Typography variant="body1">{`${first_name} ${last_name}`}</Typography>
          <Typography variant="body2">{email}</Typography>
        </div>
      </Card>
    </div>
  );
};

export default SidebarUserItemComponent;
