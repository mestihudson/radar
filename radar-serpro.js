setTimeout(function(){
	/*function removeAll(name) {
		var first = $("text:contains('" + name + '):last").parent();
		var i = 0;
		while(true) {
			var item = first;
			first = first.next();
			item.remove();
			if(++i == 6) break;
		}
	}*/
	function removeItemByName(name, q) {
		if(q == 1) {
			var element = $("text:contains('" + name + "')").filter(function() {
				return $(this).text().endsWith(". " + name);
			});
			var number = element.text().replace(". " + name, "");
			var index = element.index();
			var parent = element.parent();
			element.parent().prev().find(">:eq(" + (index) + ")").remove();
			element.remove();

			var shape = parent.next().find("a:eq("+ index +")");
			index = shape.index();
			shape.parent().next().find(">:eq(" + (index) + ")").remove();
			shape.remove();
		} else {
			var element = $("text:contains('" + name + "')").filter(function() {
				return $(this).text().endsWith(". " + name);
			});
			var number = element.text().replace(". " + name, "");
			var index = element.index();
			var parent = element.parent();
			element.parent().prev().find(">:eq(" + (index) + ")").remove();
			element.remove();

			var shape = parent.next().find("a:eq("+ index +")");
			index = shape.index();
			shape.parent().next().find(">:eq(" + (index) + ")").remove();
			shape.remove();
		}
	}
	//var total = 0;
	var elements = [];
	$.each(radar_data, function(){
		var q = this;
		//total += q.items.length;
		$.each(q.items, function(){
			elements.push(this);
		});
	});
	//console.log(radar_data);
	// for(var i = 0, l = radar_data.length; i < l; i++){
	// 	var q = i; // 0 -> Q2, 1 -> Q3, 2 -> Q1, 3 -> Q4
	// 	var items = radar_data[i].items;
	// 	for(var j = 0, t = items.length; j < t; j++) {
	// 		var item = items[j];
	// 		if(item.hide !== undefined && item.hide) {
	// 			removeItemByName(item.name, q);
	// 		}
	// 	}
	// }
	console.clear();

	var filtered = $.grep(elements, function(n, i){
		n.index = i;
		return n.hide !== undefined && n.hide;
	});

	var items = [];
	$('text').filter(function(index){
		return $(this).attr('dy') !== undefined;
	}).filter(function(index){
		return !/^([0-9])+$/g.test($(this).text());
	}).each(function(i, e){
		var index = $(e).index();
		var text = $(e).text();
		var order = $(e).parent().prev().find("*:eq('" + index + "')");
		var shape = $(e).parent().next().find("*:eq('" + index + "')");
		var number = $(e).parent().next().next().find("*:eq('" + index + "')");
		items.push({
			index: index,
			e: e,
			text: text,
			order: order,
			shape: shape,
			number: number
		});
//		console.log(text, order[0], shape[0], number[0]);
	});

	var greped = $.grep(items, function(item, k){
		function into(array, a){
			for(var i = 0, l = array.length; i < l; i++) {
				if(k == array[i].index) {
					return true;
				}
			}
			return false;
		}
		return into(filtered, k);
	});

	$.each(greped, function(){
		console.log(this.index, this.e, this.text, this.order[0], this.shape[0], this.number[0]);
	});

	console.log(elements.length, items.length, filtered.length, greped.length);
}, 1000);
