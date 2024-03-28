// const promise = new Promise((resolve, reject) => {
//     resolve('success1');
//     reject('error');
//     resolve('success2');
// });
//
// promise.then((res) => {
//     console.log('then:', res);
// }).catch((err) => {
//     console.log('catch:', err);
// })
// //then: success1

const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve();
    console.log(2);
})

promise.then(() => {
    console.log(3);
})

console.log(4);
// 1
// 2
// 4
// 3
