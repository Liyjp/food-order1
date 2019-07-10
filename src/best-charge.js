function bestCharge(selectedItems) {
  var items = loadAllItems();
  var scale = loadPromotions()[1].items;

  var order = getOrder(selectedItems, items);
  var cal = calculate(order,scale);
  var sum = getSummary(order,cal);

  return sum;
}

function getOrder(selectedItems, items) {
  var order = [];
  selectedItems.forEach((ele)=> {
    var prices = ele.split(' x ');
    items.forEach(function (item) {
      if (item.id === prices[0]){
        order.push({'id': prices[0],'count':prices[1],'name':item.name,'price':item.price});
        
      } 
    })
  });
  return order;
}

function calculate(order, scale) {
  // 指定半价
  var sum = 0;
  var name = [];
  order.forEach((item)=>{
    if (scale.include(item.id)){
      sum += item.price/2;
      name.push(item.name);
    }
  });
  var sum1 = {
    'note': '指定菜品半价（'+ name.join(', ')+')',
    'sum': sum
  }

  // 满减优惠
  var total = 0;
  order.forEach((item) =>{
    total += item.price*item.count;
  });
  var sum2 = {
    'note':'满30减6元',
    'sum': Math.floor(total/30)*6
  };

  return sum1.sum > sum2.sum ? sum1 : sum2;
}

function getSummary(order,sum) {
  var total = 0;
  var summary = '============= 订餐明细 =============\n';
  order.forEach((item)=>{
    summary += (item.name+' x '+item.count+' = '+item.price*item.count+'元\n');
    total += item.price*item.count;
  });
  summary += '-----------------------------------\n';
  if (sum.sum > 0) {
    summary += '使用优惠:\n' + sum.note + '，省' + sum.sum + '元\n';
    summary += '-----------------------------------\n';
  }
  summary += '总计：' + (total-sum.sum) + '元\n';
  summary += '===================================\n';

  return summary;
}

module.exports = bestCharge;
