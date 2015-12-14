$(document).ready(function () {
    module("oData_read");
	
	$data.Entity.extend('JayData.Test.CommonItems.Entities.User', {
		Id: { type: 'Edm.Int32', nullable: false, required: true },
		LoginName: { type: 'Edm.String' },
		Email: { type: 'Edm.String' },
		UserType: { type: 'JayData.Test.CommonItems.Entities.UserType', nullable: false },
		AuthoredArticles: { type: 'Array', elementType: 'JayData.Test.CommonItems.Entities.Article', inverseProperty: "Author" },
		ReviewedArticles: { type: 'Array', elementType: 'JayData.Test.CommonItems.Entities.Article', inverseProperty: "Reviewer" },
		Profile: { type: 'JayData.Test.CommonItems.Entities.UserProfile' }
	})
	
	$data.Enum.extend("JayData.Test.CommonItems.Entities.UserType", {
		Admin: 0,
		Customer: 1,
		Guest: 2
	})
	
	$data.Entity.extend('JayData.Test.CommonItems.Entities.MyTClass', {
		Id: { type: 'Edm.Int32', nullable: false, required: true },
		Title: { type: 'Edm.String' }
	}, {
		openType: { value: true }
	})
	
	JayData.Test.CommonItems.Entities.MyTClass.extend('JayData.Test.CommonItems.Entities.Article',{
		RowVersion: { type: 'Edm.Binary' },
		Lead: { type: 'Edm.String' },
		Body: { type: 'Edm.String' },
		CreateDate: { type: 'Edm.DateTimeOffset' },
		Thumbnail_LowRes: { type: 'Edm.Binary' },
		Thumbnail_HighRes: { type: 'Edm.Binary' },
		Category: { type: 'JayData.Test.CommonItems.Entities.Category', inverseProperty: "Articles" },
		Tags: { type: 'Array', elementType: 'JayData.Test.CommonItems.Entities.TagConnection', inverseProperty: "Article" },
		Author: { type: 'JayData.Test.CommonItems.Entities.User', inverseProperty: "AuthoredArticles" },
		Reviewer: { type: 'JayData.Test.CommonItems.Entities.User', inverseProperty: "ReviewedArticles" }
	})
	
	$data.Entity.extend('JayData.Test.CommonItems.Entities.UserProfile', {
		Id: { type: 'Edm.Int32', nullable: false, required: true },
		FullName: { type: 'Edm.String' },
		Bio: { type: 'Edm.Binary' },
		Avatar: { type: 'Edm.String' },
		Birthday: { type: 'Edm.DateTimeOffset' },
		Location: { type: 'JayData.Test.CommonItems.Entities.Location' },
		User: { type: 'JayData.Test.CommonItems.Entities.User', required: true, nullable: false, inverseProperty: "Profile" }
	})
	
	JayData.Test.CommonItems.Entities.MyTClass.extend('JayData.Test.CommonItems.Entities.Category', {
		RowVersion: { type: 'Edm.Binary' },
		Subtitle: { type: 'Edm.String' },
		Description: { type: 'Edm.String' },
		Articles: { type: 'Array', elementType: 'JayData.Test.CommonItems.Entities.Article', inverseProperty: "Category" }
	})
	
	$data.Entity.extend('JayData.Test.CommonItems.Entities.Tag', {
		Id: { type: 'Edm.Int32', nullable: false, required: true },
		Title: { type: 'Edm.String' },
		Articles: { type: 'Array', elementType: 'JayData.Test.CommonItems.Entities.TagConnection', inverseProperty: "Tag" },
	})
	
	$data.Entity.extend('JayData.Test.CommonItems.Entities.TestItem', {
		Id: { type: 'Edm.Int32', nullable: false, required: true },
		i0: { type: 'Edm.Int32' },
		b0: { type: 'Edm.Boolean' },
		s0: { type: 'Edm.String' },
		blob: { type: 'Array', elementType: 'Edm.Byte' },
		n0: { type: 'Edm.Double' },
		d0: { type: 'Edm.DateTimeOffset' },
		g0: { type: 'Edm.Guid' },
		l0: { type: 'Edm.Int64' },
		de0: { type: 'Edm.Decimal', nullable: false, required: true },
		b1: { type: 'Edm.Byte' }
	})
	
	$data.Entity.extend('JayData.Test.CommonItems.Entities.TagConnection', {
		Id: { type: 'Edm.Int32', nullable: false, required: true },
		Article: { type: 'JayData.Test.CommonItems.Entities.Article', inverseProperty: "Tags" },
		Tag: { type: 'JayData.Test.CommonItems.Entities.Tag', inverseProperty: "Articles" }
	})
	
	$data.Entity.extend('JayData.Test.CommonItems.Entities.TestItemGuid', {
		Id: { type: 'Edm.Guid', nullable: false, required: true },
		i0: { type: 'Edm.Int32' },
		b0: { type: 'Edm.Boolean' },
		s0: { type: 'Edm.String' },
		time: { type: 'Edm.TimeOfDay', nullable: false },
		date: { type: 'Edm.Date', nullable: false },
		t: { type: 'Edm.DateTimeOffset', nullable: false },
		dur: { type: 'Edm.Duration', nullable: false },
		dtOffset: { type: 'Edm.DateTimeOffset', nullable: false },
		lng: { type: 'Edm.Int64', nullable: false },
		dec: { type: 'Edm.Decimal', nullable: false },
		flt: { type: 'Edm.Single', nullable: false },
		emails: { type: 'Array', elementType: 'Edm.String' },
		Group: { type: 'JayData.Test.CommonItems.Entities.TestItemGroup', inverseProperty: "Items" }
	}, {
		openType: { value: true }
	})
	
	$data.Entity.extend('JayData.Test.CommonItems.Entities.TestItemGroup', {
		Id: { type: 'Edm.Int32', nullable: false, required: true },
		Name: { type: 'Edm.String' },
		Items: { type: 'Array', elementType: 'JayData.Test.CommonItems.Entities.TestItemGuid', inverseProperty: "Group" },
	})
	
	$data.Entity.extend('JayData.Test.CommonItems.Entities.TestItemType', {
		Id: { type: 'Edm.Int32', nullable: false, required: true },
		blob: { type: 'Edm.Binary' },
		b0: { type: 'Edm.Boolean' },
		b1: { type: 'Edm.Byte' },
		d0: { type: 'Edm.DateTimeOffset' },
		de0: { type: 'Edm.Decimal', nullable: false, required: true },
		n0: { type: 'Edm.Double' },
		si0: { type: 'Edm.Single' },
		g0: { type: 'Edm.Guid' },
		i16: { type: 'Edm.Int16' },
		i0: { type: 'Edm.Int32' },
		i64: { type: 'Edm.Int64' },
		s0: { type: 'Edm.String' }
	})
	
	$data.Entity.extend('JayData.Test.CommonItems.Entities.Location', {
		Address: { type: 'Edm.String' },
		City: { type: 'Edm.String' },
		Zip: { type: 'Edm.Int32', nullable: false, required: true },
		Country: { type: 'Edm.String' }
	})
	
	
	$data.EntityContext.extend('Default.Container', {
		Users: { type: $data.EntitySet, elementType: 'JayData.Test.CommonItems.Entities.User' },
		Articles: { type: $data.EntitySet, elementType: 'JayData.Test.CommonItems.Entities.Article' },
		UserProfiles: { type: $data.EntitySet, elementType: 'JayData.Test.CommonItems.Entities.UserProfile' },
		Categories: { type: $data.EntitySet, elementType: 'JayData.Test.CommonItems.Entities.Category' },
		Tags: { type: $data.EntitySet, elementType: 'JayData.Test.CommonItems.Entities.Tag' },
		TestTable: { type: $data.EntitySet, elementType: 'JayData.Test.CommonItems.Entities.TestItem' },
		TagConnections: { type: $data.EntitySet, elementType: 'JayData.Test.CommonItems.Entities.TagConnection' },
		TestTable2: { type: $data.EntitySet, elementType: 'JayData.Test.CommonItems.Entities.TestItemGuid' },
		TestItemGroups: { type: $data.EntitySet, elementType: 'JayData.Test.CommonItems.Entities.TestItemGroup' },
		TestItemTypes: { type: $data.EntitySet, elementType: 'JayData.Test.CommonItems.Entities.TestItemType' },
		SAction1: { type: $data.ServiceAction, returnType: 'Edm.String', params: [{ name: 'number', type: 'Edm.Int32' }] },
		SAction2: { type: $data.ServiceAction, returnType: '$data.Queryable', elementType: 'JayData.Test.CommonItems.Entities.Article', EntitySet: 'Articles', params: [{ name: 'count', type: 'Edm.Int32' }] },
		SFunction1: { type: $data.ServiceAction, returnType: 'Edm.String', params: [{ name: 'number', type: 'Edm.Int32' }] },
		//SFunction2: { type: $data.ServiceAction, returnType: 'Edm.String', params: [{ name: 'number', type: 'Edm.Int32' }] },
	})

	
	function tErro() {
		ok(false, 'error')
		start(1)
	}
	var ctx = window.c = new Default.Container('http://localhost:9000/odata')

// 	test("read int32", 12, function () {
// 		stop(4);
// 
// 		ctx.onReady(function(ctx){
// 			
// 			ctx.TestItemTypes.toArray(function(r){
// 				ok(r.length > 0, 'has result')
// 				equal(r.length, 3, 'result count')
// 				
// 				if(r.length){
// 					var item = r[0]
// 					equal(typeof item.i0, 'number', 'read type check')
// 					equal(item.i0, 42, 'read value check')
// 				}
// 				
// 				start(1);
// 			}, tErro)
// 			
// 			ctx.TestItemTypes.filter('it.i0 == 42').toArray(function(r){
// 				ok(r.length > 0, 'query has result')
// 				equal(r.length, 1, 'query result count')
// 				
// 				if(r.length){
// 					var item = r[0]
// 					equal(typeof item.i0, 'number', 'query read type check')
// 					equal(item.i0, 42, 'query read value check')
// 				}
// 				
// 				start(1);
// 			}, tErro)
// 			
// 			ctx.TestItemTypes.map('it.i0').toArray(function(r){
// 				ok(r.length > 0, 'map has result')
// 				equal(r.length, 3, 'map result count')
// 				
// 				if(r.length){
// 					var item = r[0]
// 					equal(typeof item, 'number', 'map read type check')
// 					equal(item, 42, 'map read value check')
// 				}
// 				
// 				start(1);
// 			}, tErro)
// 				
// 			start(1);
// 		})
//     });
	
	var createTest = function (typeName, setName, setLength, setFilterLength, propName, propValue, propType, cfg){
		cfg = cfg || {}
		//cfg.isDeepEqual
		cfg.valueConverter = cfg.valueConverter || function(v) { return v }
		
		test("read " + typeName, 12, function () {
			stop(4);
	
			ctx.onReady(function(ctx){
				
				ctx[setName].toArray(function(r){
					ok(r.length > 0, 'has result')
					equal(r.length, setLength, 'result count')
					
					if(r.length){
						var item = r[0]
						equal(typeof item[propName], propType, 'read type check')
						if(cfg.isDeepEqual){
							deepEqual(item[propName], propValue, 'read value check')
						} else {
							equal(cfg.valueConverter(item[propName]), cfg.valueConverter(propValue), 'read value check')
						}
					}
					
					start(1);
				}, tErro)
				
				ctx[setName].filter('it.'+ propName + ' == this.val', {val:propValue}).toArray(function(r){
					ok(r.length > 0, 'query has result')
					equal(r.length, setFilterLength, 'query result count')
					
					if(r.length){
						var item = r[0]
						equal(typeof item[propName], propType, 'query read type check')
						if(cfg.isDeepEqual){
							deepEqual(item[propName], propValue, 'query read value check')
						} else {
							equal(cfg.valueConverter(item[propName]), cfg.valueConverter(propValue), 'query read value check')
						}
					}
					
					start(1);
				}, tErro)
				
				ctx[setName].map('it.' + propName).toArray(function(r){
					ok(r.length > 0, 'map has result')
					equal(r.length, setLength, 'map result count')
					
					if(r.length){
						var item = r[0]
						equal(typeof item, propType, 'map read type check')
						if(cfg.isDeepEqual){
							deepEqual(item, propValue, 'map read value check')
						} else {
							equal(cfg.valueConverter(item), cfg.valueConverter(propValue), 'map read value check')
						}
					}
					
					start(1);
				}, tErro)
					
				start(1);
			})
		});
		
	}
	
	createTest('int16', 'TestItemTypes', 3, 1, 'i16', 23, 'number')
	createTest('int32', 'TestItemTypes', 3, 1, 'i0', 42, 'number')
	createTest('int64', 'TestItemTypes', 3, 1, 'i64', 1337, 'number')
	createTest('decimal', 'TestItemTypes', 3, 1, 'de0', 2.2, 'number')
	createTest('float', 'TestItemTypes', 3, 1, 'si0', 4.25, 'number')
	createTest('double', 'TestItemTypes', 3, 1, 'n0', 34.5, 'number')
	createTest('byte', 'TestItemTypes', 3, 1, 'b1', 1, 'number')
	createTest('boolean', 'TestItemTypes', 3, 2, 'b0', false, 'boolean')
	createTest('string', 'TestItemTypes', 3, 1, 's0', 'JayData', 'string')
	createTest('binary', 'TestItemTypes', 3, 1, 'blob', $data.Container.convertTo(atob("aGVsbG8gamF5ZGF0YQ=="), '$data.Blob'), 'object', { isDeepEqual: true })
	createTest('guid', 'TestItemTypes', 3, 1, 'g0', 'd89ade51-c58b-48a2-ba72-e9157165eb6e', 'string')
	createTest('datetimeoffset', 'TestItemTypes', 3, 1, 'd0', new Date("2015-12-12T00:00:00+01:00"), 'object', {
		valueConverter: function(v) { return v.valueOf() }
	})
	
	createTest('timeofday', 'TestTable2', 3, 1, 'time', "15:10:15.000", 'string')
	createTest('date', 'TestTable2', 3, 1, 'date', "2015-12-12", 'string')
	createTest('duration', 'TestTable2', 3, 1, 'dur', "-PT5H45M", 'string')
	createTest('enum', 'Users', 6, 1, 'UserType', 0, 'number')
	
	
	test('read base type', 8, function () {
		stop(3);
		
		ctx.onReady(function(){
			
			ctx.Articles.toArray(function(articles){
				ok(articles.length > 0, 'read articles')
				
				if(articles.length){
					var item = articles[0]
					equal(item instanceof JayData.Test.CommonItems.Entities.MyTClass, true, 'base type check')
					equal(typeof item.Id, "number", 'int property from baseType');
					equal(typeof item.Title, "string", 'string property from baseType');
				}
				
				
				start(1);
			})
			
			
			ctx.Categories.toArray(function(categories){
				ok(categories.length > 0, 'read categories')
				
				if(categories.length){
					var item = categories[0]
					equal(item instanceof JayData.Test.CommonItems.Entities.MyTClass, true, 'base type check')
					equal(typeof item.Id, "number", 'int property from baseType');
					equal(typeof item.Title, "string", 'string property from baseType');
				}
				
				
				start(1);
			})
			
			start(1);			
		})
	})
	
	// test('read open type', 1, function () {
	// 	stop(2);
	// 	
	// 	ctx.onReady(function(){
	// 		
	// 		ctx.TestTable2.toArray(function(items){
	// 			ok(items.length > 0, 'read articles')
	// 			
	// 			if(items.length){
	// 				var item = items[0]
	// 				
	// 				console.log(item)
	// 				
	// 				
	// 			}
	// 			
	// 			
	// 			start(1);
	// 		})
	// 					
	// 		start(1);			
	// 	})
	// })
	
});