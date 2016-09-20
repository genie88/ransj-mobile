import Vue from 'vue'

Vue.filter('reverse', function (value) {
  if(!value) return;
  return value.split('').reverse().join('')
})


Vue.filter('getPrice', function (value, index) {
  if(!value) return;
  value = JSON.parse(value)
  return index ? value.discount_price : value.present_price;
})

//格式化价格
Vue.filter('price', {
  read: function(val) {
    return '$'+val.toFixed(2)
  },
  write: function(val, oldVal) {
    var number = +val.replace(/[^\d.]/g, '')
    return isNaN(number) ? 0 : parseFloat(number.toFixed(2))
  }
})

//格式化时间
Vue.filter('formatTime', function(value) {
  return new Date(value).toISOString().replace(/T/, ' ').split('.')[0];
})