import React from 'react';
import './App.css';
import { Layout, Avatar, Menu, Breadcrumb} from 'antd';
import Icon,{RedoOutlined,SettingOutlined,UndoOutlined,InfoCircleOutlined,QuestionCircleOutlined,PlusCircleOutlined,LogoutOutlined,PlusCircleFilled,QuestionCircleFilled,DownOutlined} from '@ant-design/icons';
import Note from './Note'
import notes from './notes'
import SubMenu from 'antd/lib/menu/SubMenu';
import Title from 'antd/lib/typography/Title';
import { Button } from 'antd';
import Table from './Table';
import Updates from './Updates'
import Upd from './Upd'
import Upgraue from './upgrade'
import upg from './upg';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: 'right' }} src='./dp.png' />
          <Title style={{ color: 'white',fontFamily:'Merriweather,serif' }} level={3}>Automation <Button className="pricing" type="primary">Pricing</Button><Button className="help" type="primary">Help <QuestionCircleFilled /></Button></Title>
        </Header>
        
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            > 
              <Menu.Item style={{height:'80px',padding:'15px 15px',backgroundColor:'#e5e5e5'}}><Menu.Item style={{color:'#33DAFF',backgroundColor:'white',fontFamily:'Merriweather,serif',}} ><PlusCircleFilled />
                Start Scrapper
            </Menu.Item></Menu.Item>
              <Menu.Item style={{fontFamily:'Merriweather,serif'}} key='Dashboard'><RedoOutlined />
               Dashboard <br />a dash
            </Menu.Item>
            <Menu.Item style={{fontFamily:'Merriweather,serif'}} key='Linkedin Scrapper'><RedoOutlined />
                Linkedin Scrapper
            </Menu.Item>
            
            <Menu.Item style={{fontFamily:'Merriweather,serif'}} key='Master Search'><RedoOutlined />
                Master search
            </Menu.Item>
            
            <Menu.Item style={{fontFamily:'Merriweather,serif'}}key='Employee database'><RedoOutlined />
                Employee database
            </Menu.Item>
            <Menu.Item style={{fontFamily:'Merriweather,serif'}}key='Company database'><RedoOutlined />
                Company database
            </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span><SettingOutlined />Settings</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='Settings' title='Personal settings'>
                  <Menu.Item style={{fontFamily:'Merriweather,serif'}} key='location1'><UndoOutlined /> Profile settings</Menu.Item>
                  <Menu.Item style={{fontFamily:'Merriweather,serif'}} key='location2'><InfoCircleOutlined /> Take a tour</Menu.Item>
                  <Menu.Item style={{fontFamily:'Merriweather,serif'}} key='location3'><QuestionCircleOutlined /> Need help</Menu.Item>
                  <Menu.Item style={{fontFamily:'Merriweather,serif',color:'red'}} key='location4'><LogoutOutlined /> Logout</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
            <Content style={{ width:'1700px',padding: '0 2px' }}>
              <Breadcrumb style={{ margin: '30px 0' }}>
                <Breadcrumb.Item><div>
                  <h1>Dashboard</h1>
                  <p>Hello<span style={{color:'blue'}}> Bittu,<Button className="eu" type="primary">EU</Button><Button className="help" type="primary">Past Month <DownOutlined /></Button></span></p>
                </div></Breadcrumb.Item>
              </Breadcrumb>
              <div  className="something">
              <div style={{ background: '#fff', padding: 24, minHeight: 580 }}> {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          color={noteItem.color}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
              </div>
              <Upgraue />
              </div>
              <div style={{ background: '#fff', padding: 24, minHeight: 580 ,color:'black'}}> {Updates.map(UpdatesItem => (
        <Upd
          key={UpdatesItem.key}
          color={UpdatesItem.color}
          title={UpdatesItem.title}
          content={UpdatesItem.content}
        />
      ))}
      
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design Layout example Created by Bittu</Footer>
          </Layout>
    </div>
  );
}

export default App;
