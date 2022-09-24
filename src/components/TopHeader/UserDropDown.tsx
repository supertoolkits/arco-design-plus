import React, {ReactElement, ReactNode} from "react";
import {Divider, Dropdown, Menu, Space} from "@arco-design/web-react";
import {
  IconDashboard,
  IconExperiment,
  IconPoweroff,
  IconSettings,
  IconTag,
  IconUser
} from "@arco-design/web-react/icon";

type UserDropDownProps = {
  children: ReactNode
}

export default function UserDropDown(props: UserDropDownProps): ReactElement {

  const dropList = () => (
    <Menu onClickMenuItem={() => {}}>
      <Menu.SubMenu
        key="role"
        title={
          <Space size={10}>
            <IconUser className="" />
            <span className="">
              Admin
            </span>
          </Space>
        }
      >
        <Menu.Item onClick={() => {}} key="switch role">
          <Space size={10}>
            <IconTag className="" />
            <span>
            Switch roles
            </span>
          </Space>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="setting">
        <Space size={10}>
          <IconSettings />
          <span>
            Settings
          </span>
        </Space>
      </Menu.Item>
      <Menu.SubMenu
        key="more"
        title={
          <div style={{ width: 80 }}>
            <Space size={10}>
              <IconExperiment />
              <span>
                See More
              </span>
            </Space>
          </div>
        }
      >
        <Menu.Item key="workplace">
          <Space size={10}>
            <IconDashboard />
            <span>
              WorkSpace
            </span>
          </Space>
        </Menu.Item>
      </Menu.SubMenu>

      <Divider style={{ margin: '4px 0' }} />
      <Menu.Item key="logout">
        <Space size={10}>
          <IconPoweroff />
          <span>
            Logout
          </span>
        </Space>
      </Menu.Item>
    </Menu>
  );


  return (
    <Dropdown droplist={dropList()} position="br">
      {props.children}
    </Dropdown>
  );
}
