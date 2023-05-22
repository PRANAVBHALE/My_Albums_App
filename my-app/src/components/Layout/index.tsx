
import {layoutType} from './types'
import { Layout } from 'antd';
const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: "#36454F",
};

const AppLayout = (props:layoutType) => {
  return(
    <Content style={contentStyle}>
      {props.children}
    </Content>
  )
}

export default AppLayout