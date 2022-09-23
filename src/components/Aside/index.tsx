import React, {ReactElement} from "react";
import { Menu, Message} from '@arco-design/web-react';
import {
  IconCalendar,
  IconHome,
  IconDashboard,
  IconGift,
  IconList,
  IconSettings,
  IconUser
} from "@arco-design/web-react/icon";
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;


export default function Aside(): ReactElement {

  return (
    <>
      <Menu
        defaultOpenKeys={['1']}
        defaultSelectedKeys={['0_3']}
        onClickMenuItem={(key) =>
          Message.info({
            content: `You select ${key}`,
            showIcon: true,
          })
        }
        style={{ width: '100%' }}
      >
        <MenuItem key='0_1' >
          <IconDashboard fontSize={18} />
          <span>
          Dashboard
          </span>
        </MenuItem>
        <MenuItem key='0_2'>
          <IconGift fontSize={18} />
          Data Visualization
        </MenuItem>
        <MenuItem key='0_3'>
          <IconList fontSize={18} />
          List
        </MenuItem>
        <SubMenu
          key='1'
          title={
            <span>
                  <IconSettings fontSize={18} />
              Settings
                </span>
          }
        >
          <MenuItem key='1_1'>Security</MenuItem>
          <MenuItem key='1_2'>Permissions</MenuItem>
        </SubMenu>
        <SubMenu
          key='4'
          title={
            <span>
                  <IconUser fontSize={18} />
              Profile
                </span>
          }
        >
          <MenuItem key='4_1'>Basic</MenuItem>
          <MenuItem key='4_2'>Social</MenuItem>
          <MenuItem key='4_3'>Policy</MenuItem>
        </SubMenu>
      </Menu>
    </>
  );
}
