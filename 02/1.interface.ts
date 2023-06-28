//定义属性
interface Point {
    x: number;
    y: number;

    //  ?  可选属性
    color?: string;

    //只读属性
    readonly z: number;

    //任意属性 []内属性不能为bool 外层属性属于里层属性的子级
    [prop: string]: number | undefined | string;
}

let p1: Point = {
    x: 100,
    y: 100,
    z: 100
}

p1[1] = 100;
p1.m = "22";

//普通写法
function fn2(x: number, y: number): number {
    return x + y;
}

//接口
interface IFnumber {
    (x: number, y: number): number
}

let fn3: IFnumber = function (a: number, b: number): number {
    return a + b;
}