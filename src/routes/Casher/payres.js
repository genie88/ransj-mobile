// Sync route definition
export default {
  icon: 'cart',
  title: '付款结果',
  exact: true,
  component: resolve => require(['./components/PayResultView'], resolve)
}
