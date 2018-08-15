function Objects(){
  const recipes = {}
  return recipes
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}


