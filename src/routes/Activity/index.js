// Sync route definition
export default {
  icon: 'activity',
  title: '活动',
  exact: true,
  component: resolve => require(['./components/ActivityView'], resolve)
}
