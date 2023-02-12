let firstNumber = prompt ("Enter your number");
let secondNumber = prompt ("Enter your number");
function maxNumber (a,b){
    if (+a > +b){  
        return a;     
    } else if (+a < +b) { 
        return +b; 
    } else if (+a == +b) {
        return 'a = b'
    };
};
alert(maxNumber (firstNumber,secondNumber));




// let number = prompt('enter the number', '');
// function invert(number) {
//     return number = +number * -1;
// }
// alert(invert(number));



// let number = prompt('enter the number', '');
// let count = prompt('enter the number', '');
// function three(number,count){
//     return +number + (3 * +count);
// }
// alert(three(+number,+count));





// let metric = prompt('Enter the metric:');
// let km = prompt('Enter the number:')

// function KmToM(km){
//     return +km * 1000;
// }
// function KmToCm(km){
//     return +km * 10000;
// }
// function getMetric(metric, km, m, cm){
//     if (metric == 'm') {
//         return m(km)
//     } 
//     else if (metric == 'cm'){
//         return cm(km)
//     }
//     else {
//         return 'Invalid input! Enter m or cm'; 
//     }
// }
// alert (getMetric(metric, km, KmToM, KmToCm))


