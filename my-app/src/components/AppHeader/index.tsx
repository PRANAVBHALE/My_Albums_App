import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  // textAlign: 'center',
  color: '#36454F',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#02ec88',
  fontSize: '24px',
  fontWeight: "600"
};

const AppHeader = () =>  <Header style={headerStyle}>Albums Application</Header>

export default AppHeader