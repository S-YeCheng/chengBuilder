import React from 'react';
import { Input, Tabs } from 'antd';
import type {TabsProps } from 'antd';
import './index.css';

const onChange = (key: string) => {
  console.log(key);
};

const getProperty = () => {
  return (
    <div className='propertyBox'>
      <label>按钮文字：</label>
      <div className='inputBox'>

      <Input placeholder='请输入按钮文字' onChange={changeProperty}/>
      </div>
    </div>
  )
}

const changeProperty = (e:any) => {
  window.renderCom.caption = e.target.value
  window.setComList([...window.comList])
}


const items: TabsProps['items'] = [
  {
    key: '1',
    label: <div style={{fontSize: '18px', width: '100px', textAlign: 'center'}}>属性</div>,
    children: getProperty(),
  },
  {
    key: '2',
    label: <div style={{fontSize: '18px', width: '100px', textAlign: 'center'}}>样式</div>,
    children: 'Content of Tab Pane 2',
  },

];

const RightCom: React.FC = () => <Tabs className='rightCom' defaultActiveKey="1" items={items} onChange={onChange} />;

export default RightCom;