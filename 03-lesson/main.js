let resource = 'lumber'
 
manageResources()
 
function manageResources() {
  let resource = 'crystals'
  if (true) {
    let resource = 'stone'
    console.log(resource) // Вывод 1
  }
  console.log(resource) // Вывод 2
}
 
console.log(resource) // Вывод 3
 
if (true) {
  resource = 'gold'
  console.log(resource) // Вывод 4
}
console.log(resource) // Вывод 5