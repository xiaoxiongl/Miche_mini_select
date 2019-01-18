# Miche_mini_select

#### 介绍
微信小程序 下拉框


本下拉框特点：
1.保证下拉框在最上层，不会被其他控件所遮挡
2.引用方便，直接引用组件即可，与页面耦合性低
3.使用方便，只需给出外框长宽即可自适应大小
4.下拉菜单紧贴下拉框，不必计算位置

#### 软件架构
软件架构说明
下拉框插件在文件夹select中

#### 安装教程

1.将select文件夹拖入项目
2. 在json文件中引用select插件
"usingComponents": {
    "select": "/component/select/select"
  }
3. 在wxml中使用插件
<select prop-array='{{selectList}}' selectText="请选择" stype="1" selectShow="{{select}}" bind:m_select_touch="m_select_touch"></select>

#### 使用说明

1. selectList 为选择数组，必传
2. stype 为下拉框id，多下拉框时，用于区分下拉框，可不传
3. selectShow 为下拉状态，可不传
4.m_select_touch 为 点击下拉菜单事件


