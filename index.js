////////  Implementation of callback and callbackhell

// function fetcheddata(callback){
//   setTimeout(()=>{
//     console.log('fetched data'),
//       callback()
//   }, 2000)
// }

// function processdata(callback){
//   setTimeout(()=>{
//     console.log('processing data'),
//       callback()
//   }, 2000)
// }

// function saveddata(callback){
//   setTimeout(()=>{
//     console.log('saved data'),
//       callback()
//   }, 2000)
// }

// function completetask(){
//   console.log('task completed')
// }

// fetcheddata(()=>{
//   processdata(()=>{
//     saveddata(()=>{
//       completetask()
//     })
//   })
// })

/////// TO avoid callbackhell we use promises

// function fetcheddata(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log('fetched data'),
//         resolve()
//     }, 2000)
//   })

// }

// function processdata(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log('processing data'),
//         resolve()
//     }, 2000)
//   })

// }

// function saveddata(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log('saved data'),
//         resolve()
//     }, 2000)
//   })

// }

// function completetask(){
//   console.log('task completed')
// }

// fetcheddata()
// .then(()=>processdata())
// .then(()=>saveddata())
// .then(()=>(completetask()))

///// To avoid promise chaining we use async and await

// function fetcheddata(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log('fetched data'),
//         resolve()
//     }, 2000)
//   })

// }

// function processdata(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log('processing data'),
//         resolve()
//     }, 2000)
//   })

// }

// function saveddata(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log('saved data'),
//         resolve()
//     }, 2000)
//   })

// }

// function completetask(){
//   console.log('task completed')
// }

// async function callme(){
//   await fetcheddata()
//   await processdata()
//   await saveddata()
//   completetask()
// }
// callme()
