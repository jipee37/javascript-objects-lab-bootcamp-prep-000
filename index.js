
function Objects(){
  const recipes = {}
  return recipes
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  const newObject = Object.assign({}, object) //"true" copie 
  delete newObject[key]
  return newObject
}


