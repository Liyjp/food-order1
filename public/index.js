
  var arr = loadAllItems();
  console.log(arr);
  var table = document.getElementById('table');

  window.onload = function () {
    var data = document.getElementById('data');
    for (var i =0 ;i<arr.length;i++){
      var trow = getData(arr[i]);
      data.appendChild(trow);
    }
  };
  function getData(h) {
    var row = document.createElement('tr');

    var id = document.createElement('td');
    id.innerHTML = h.id;
    row.appendChild(id);

    var name = document.createElement('td');
    name.innerHTML = h.name;
    row.appendChild(name);

    var price = document.createElement('td');
    price.innerHTML = h.price;
    row.appendChild(price);

    var num = document.createElement('td');
    row.appendChild(num);
    var n = document.createElement('input');
    n.setAttribute('type','text');
    n.setAttribute('id','number')

    num.appendChild(n);

    return row;
  }

  function calculatePrice() {
    let inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    bestCharge(inputs);
  }

  function clear() {
    document.getElementById('number').innerHTML = null;

  }



