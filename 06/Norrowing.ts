/**
 *  typeof type guards 类型保护
 */
function padLeft1(padding: number | string, input: string) {
    // return " ".repeat(padding) + input  // error
    // throw new Error('NOT IMPLEMENTED YET!')
}

function padLeft2(padding: number | string, input: string) {
    if (typeof padding === 'number') {
        return " ".repeat(padding) + input
    }
    return padding + input
    // throw new Error('NOT IMPLEMENTED YET!')
}

// ????????
function padRight1(strs: string | string[] | null) {
    if (typeof strs === 'object') {  // ---
        for (const s of strs) {
            console.log(s)
        }
    } else if (typeof strs === 'string') {
        console.log(strs)
    } else {

    }
}
function padRight2(strs: string | string[] | null) {
    if (strs && typeof strs === 'object') {  // ---
        for (const s of strs) {
            console.log(s)
        }
    } else if (typeof strs === 'string') {
        console.log(strs)
    } else {

    }
}
function padRight3(strs: string | string[] | null) {
    if (strs !== null) {  // ----
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s)
            }
        }
    } else if (typeof strs === 'string') {
        console.log(strs)
    }
}

/**
 * Equality narrowing  
 */
function printAll(x: number | string, y: string | boolean) {
    if (x === y) {
        return x + y
    } else {
        console.log(x)
        console.log(y);
    }
}

/**
 * in  operator narrowing
 */
type Fish = { swim: () => {} }
type Brid = { fly: () => {} }
type Human = { swim?: () => {}, fly?: () => {} }

function move(animal: Fish | Brid | Human) {
    if ('swim' in animal) {
        return animal.swim()
    }
    return animal.fly
}

/**
 * instanceof: 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
 */
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString())
    } else {
        console.log(x.toUpperCase())
    }
}