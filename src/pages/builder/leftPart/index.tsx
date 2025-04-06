import React, { ComponentType } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import './index.css';
import * as component from './component';
import { componentIconMap, componentTextMap } from './staticUtils/iconLists';

const onChange = (key: string) => {
  console.log(key);
};

const onDragStart = (name: string) => {
  
  return ()=>{
    window.nowCom = name
    console.log(window.nowCom);
    
  }

}

const renderComponent = () => { 
  return <div>
    {
      Object.keys(component).map(name => {
        const Icon = componentIconMap[name as keyof typeof componentIconMap];
        const text = componentTextMap[name as keyof typeof componentTextMap];
       return <div key={name} className='componentItem'>
        <div onDragStart={onDragStart(name)} draggable={true} style={{display: 'inline-block'}}><Icon style={{marginRight: '10px'}}/><span>{text}</span></div>
        
       </div>
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