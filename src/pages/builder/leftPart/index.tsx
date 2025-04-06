import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import './index.css';
import * as component from './component';

const onChange = (key: string) => {
  console.log(key);
};

const renderComponent = () => {
  return <div>
    {
      Object.keys(component).map(name=> {
        return <div draggable={true} className='componentItem' key={name}>
          <div style={{display: 'inline-block'}}><span>{name}</span></div>
        </div>;
      })
    }
  </div>;
};

const items: TabsProps['items'] = [
  {
    key: 'component',
    label: <div style={{fontSize: '18px', width: '100%', textAlign: 'center'}}>组件</div>,
    children: renderComponent(),
  },
  {
    key: 'data',
    label: <div style={{fontSize: '18px', width: '100%', textAlign: 'center'}}>数据</div>,
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: <div style={{fontSize: '18px', width: '100%', textAlign: 'center'}}>样式</div>,
    children: 'Content of Tab Pane 3',
  },
];

const leftCom: React.FC = () => <Tabs className='leftCom' defaultActiveKey="1" items={items} onChange={onChange} />;

export default leftCom;