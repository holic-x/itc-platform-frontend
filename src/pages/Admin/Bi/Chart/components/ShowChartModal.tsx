import '@umijs/max';
import {Modal} from 'antd';
import React from 'react';
import EChartsReact from 'echarts-for-react';

export type Props = {
  chartDataDetail: API.Chart;
  // 当用户点击取消按钮时触发
  onCancel: () => void;
  // 模态框是否可见
  visible: boolean;
};

const ShowChartModal: React.FC<Props> = (props) => {
  // 使用解构赋值获取props中的属性
  const {visible, chartDataDetail, onCancel} = props;

  return (
    // 创建一个Modal组件,通过visible属性控制其显示或隐藏,footer设置为null把表单项的'取消'和'确认'按钮去掉
    <Modal visible={visible} footer={null} onCancel={() => onCancel?.()}>
      {/* 创建一个组件，用于渲染图表信息 */}
      展示图表信息

      <div style={{marginBottom: 16}}/>
      {/* 页面初始化刷新可能还没有设定 chartDataDetail 因此要做空指针处理 */}
      <p>{'分析目标：' + chartDataDetail?.goal}</p>
      <div style={{marginBottom: 16}}/>
      {/* 处理方式1：JSON格式处理 可能存在option json解析失败问题 */}
      <EChartsReact option={chartDataDetail?.genChart && JSON.parse(chartDataDetail?.genChart)}/>
      <p>{'分析结果：' + chartDataDetail?.genResult}</p>
    </Modal>

  );
};
export default ShowChartModal;
