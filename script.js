function abc(r = 0) {
    // () = Argument operatori
    return 2 * 3.14 * r;
}

let a = abc(5)
let b = abc(12)
let c = abc()
console.log(a);
console.log(b);
console.log(c);
//  () = Parametr Operatori
// console.log('salom dunyo');
// FUNKSIYALAR TURLARI

// DEKLARATIV

test()

function test() {
    console.log(test);
}
test()

// ? EXPRESS
//  let g = function () {
//     console.log('EXPRESS');
//     console.log(this);
// }
// g()

// ARROW
let h = () => {
    console.log('ARROW');
}
let k = text => text
// 1. Agar kod 1 qator bolsa {} qavs kerak emas
// 2. Agar kod 1 qator bolsa return operatori kerak emas
// 3. Agar argument 1 ta bolsa u holda () operatori kerak emas
// 4. Arrowda this  operatori ishlamaydi
h()

let fn = {
    a:function () {
        console.log('EXPRESS');
        console.log(this);
    },
    b: () => {
        console.log('ARROW');
        console.log(this);
    }
}

fn.a()
fn.b()




function fn2() {
    console.log('2');
}

function fn2(fn) {
    console.log(1);
    fn()
}

fn2(fn1)

fn2(() => {
    console.log('asdasdased');
})

fn2(function() {
    console.log('749386932918');
})

setTimeout(fn1, 3000)