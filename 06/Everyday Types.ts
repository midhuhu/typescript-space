
/**
 * Explicit Types 显式类型
 */

function DateTest(person: string, date: Date) {
    console.log(`Hello ${person},today is ${date}`)
}

// DateTest('Bob', Date())         // error var Date: DateConstructor  () => string
DateTest('Bob', new Date())


/**
 * interface type
 */

interface A {
    name: string
}
type B = {
    name: string
}

// 1、拓展   interface ✅   type  ✅ 
interface C extends A {
    age: number
}
type D = B & {
    age: number
}
// 2、添加新字段  interface ✅   type ❌
interface A {
    height: number
}
// type B = {
//     height: number
// }

/**
 *  Type Assertions  类型断言
 */

// 1、as
const myCanvas1 = document.getElementById('main_canvas') // HTMLElement
const myCanvas2 = document.getElementById('main_canvas') as HTMLCanvasElement // HTMLCanvasElement
const myCanvas3 = <HTMLCanvasElement>document.getElementById('main_canvas') // HTMLCanvasElement
// 2、强制 unknown  any
const myCar1 = 'benci' as unknown as number
const myCar2 = 'benci' as any as number

/**
 * Literal Types  文字类型
 */

// 1、let const
let stringTest1 = 'Hello World'  // string
stringTest1 = '!@#$%^&&*'

const stringTest2 = 'Hello World'   // Hello World

// 2、unions
function printText1(s: string, props: 'left' | 'right') {
    //...
}
printText1('Hello', 'left')
// printText1('Hello', 'center')  // error  (s: string, props: 'left' | 'right')

interface Options {
    props: number
}
function printText2(s: Options | 'auto') {
    //...
}
printText2('auto')
printText2({ props: 100 })
// printText2(100) // error


/**
 *  null undefined
 */

/**
 * bigint  symbol
 */
