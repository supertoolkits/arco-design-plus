import React, {ReactElement} from "react";
import styled from "@emotion/styled";
import { Badge, Button, Input, Menu, Message, Select, Space} from '@arco-design/web-react';
const MenuItem = Menu.Item;
import Logo from "../../assets/logo.svg";
import { IconLanguage, IconNotification, IconMoonFill, IconSunFill, IconSettings} from "@arco-design/web-react/icon";
import BoringAvatar from "boring-avatars";

const TopHeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  background: #fff;
  .left {
    flex: 1;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background: #fff;
    padding: 0 1rem;
  }
  .search {
    border-radius: 16px;
  }
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
      <div className="left">
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

      </div>

      <div className="right">
        <Space size={18}>
          <Input.Search
            className="search"
            placeholder="Search"
          />
          <Select
            triggerElement={<Button type="secondary" icon={<IconLanguage />}>Language</Button>}
            options={[
              { label: '中文', value: 'zh-CN' },
              { label: 'English', value: 'en-US' },
            ]}
            value="en-US"
            triggerProps={{
              autoAlignPopupWidth: false,
              autoAlignPopupMinWidth: true,
              position: 'br',
            }}
            trigger="hover"
            onChange={(value: string) => {
              Message.info(`Language switch to ${value}`);
            }}
          />

          <Badge count={9} dot>
            <Button type="secondary" shape="circle" icon={<IconNotification />} />
          </Badge>
          <Button type="secondary" shape="circle" icon={<IconMoonFill />}></Button>
          <Button type="secondary" shape="circle" icon={<IconSettings />}></Button>

          <BoringAvatar size={32}
                        name="curry"
                        variant="marble"
          />

        </Space>
      </div>

    </TopHeaderStyle>
  );
}
