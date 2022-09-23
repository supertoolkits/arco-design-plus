import React, {ReactElement} from "react";
import {Input, Menu, Space} from '@arco-design/web-react';
import styled from "@emotion/styled";
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
import Logo from "../../assets/logo.svg";

const TopHeaderStyle = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  background-color: var(--color-neutral-2);
  .logo {
    display: block;
    padding: 0;
    margin: 0;
    width: 30px;
    height: 30px;
  }
`;


export default function TopHeader(): ReactElement {
  return (
    <TopHeaderStyle>
      <Menu mode='horizontal' defaultSelectedKeys={['1']}>
        <MenuItem
          key='0'
          style={{ padding: 0, marginRight: 38, }}
          disabled
        >
            <img src={Logo} alt="LOGO" className="logo"  />
        </MenuItem>
        <MenuItem key='1'>Home</MenuItem>
        <MenuItem key='2'>Solution</MenuItem>
        <MenuItem key='3'>Cloud Service</MenuItem>
        <MenuItem key='4'>Cooperation</MenuItem>

      </Menu>

    </TopHeaderStyle>
  );
}
