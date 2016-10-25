// Sync route definition
export default {
  icon: 'tag',
  title: '做个选择',
  exact: true,
  component: resolve => require(['./components/TagView'], resolve)
}
