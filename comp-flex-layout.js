const FlexLayoutItems = cc.Class({
  name: 'FlexLayoutItems',
  properties: {
    node: {
      type: cc.Node,
      default: null
    },
    css: ''
  }
});

cc.Class({
  name: 'FlexLayout',
  extends: cc.Component,
  editor: {
    executeInEditMode: true,
  },
  properties: {
    children: {
      type: FlexLayoutItems,
      default: () => []
    },
    css: ''
  },
  start () {
    this.caculateLayout();  
  },
  caculateLayout() {
    // TODO
  }
});