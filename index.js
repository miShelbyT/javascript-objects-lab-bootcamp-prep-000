// var recipes = {
// 	cookies: ["flax", "flour", "pumpkin", "applesauce"],
// 	oatmeal: ["steel cut oats", "water"],
// 	toast: ["bread", "butter"]
// }

function updateObjectWithKeyAndValue(object, key, value) {
	return Object.assign( {}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value
 return object
}

function deleteFromObjectByKey(object, key) {
	return Object.assign( {}, delete object.key )
}

function destructivelyDeleteFromObjectByKey(object, key) {
	delete object[key]
	return object
	
}