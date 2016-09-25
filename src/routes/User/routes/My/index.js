// Sync route definition
export default {
  title: '用户中心',
  auth: true,
  component: resolve => require(['./components/MyView'], resolve)
}
