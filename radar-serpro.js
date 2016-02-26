setTimeout(function(){

  var elements = [];
  $.each(radar_data, function(){
    var q = this;
    $.each(q.items, function(){
      elements.push(this);
    });
  });

  console.clear();

  var items = [];

  var filtered = $.grep(elements, function(n, i){
    n.index = i;
    return n.hide !== undefined && n.hide;
  });

  $('text').filter(function(index){
    return $(this).attr('dy') !== undefined;
  }).filter(function(index){
    return !/^([0-9])+$/g.test($(this).text());
  }).each(function(i, e){
    var index = $(e).index();
    var text = $(e).text().replace(/^([0-9])+\.\ /, "");
    var order = $(e).parent().prev().find("*:eq('" + index + "')");
    var shape = $(e).parent().next().find("a:eq('" + index + "')");
    var number = $(e).parent().next().next().find("*:eq('" + index + "')");
    var caput = $(e).parent().prev().prev();
    var separator = $(e).parent().prev();
    var parent = $(e).parent();

    items.push({
      index: index,
      e: $(e),
      text: text,
      order: order,
      shape: shape,
      number: number,
      caput: caput,
      separator: separator,
      parent: parent
    });
  });

  var into = function(list, item) {
    for(var i = 0, l = list.length; i < l; i++){
      var text = item.text;
      if(list[i].name == text) {
        return true;
      }
    }
    return false;
  };

  var hide = function(item) {
    item.e.remove();
    item.order.remove();
    item.shape.remove();
    item.number.remove();
    if(!item.parent.find('>text').length){
      item.caput.remove();
      item.separator.remove();
      item.parent.prev().remove();
      item.parent.next().next().remove();
      item.parent.next().remove();
      item.parent.remove();
    }
  };

  for(var i = 0, c = 1, l = items.length; i < l; i++){
    if(into(filtered, items[i])){
      hide(items[i]);
    }else{
      items[i].e.text(c + ". " + items[i].text);
      items[i].number.text(c);
      c++;
    }
  }

  $('#radar').show();
}, 1000);
