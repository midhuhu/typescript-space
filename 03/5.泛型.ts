function identity(arg: number): number {
    return arg;
}

//给identity添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number）
//不同于any 它保证了输入与返回的类型是一致的
function identity2<T>(arg: T): T {
    return arg;
}

//我们定义了泛型函数后，可以用两种方法使用。
//第一种是，传入所有的参数，包含类型参数：
let output1 = identity2<string>("myString");
//第二种方法更普遍。利用了类型推论 --
//即编译器会根据传入的参数自动地帮助我们确定T的类型：
let output2 = identity2("myString");


//泛型类型
function identity3<T>(arg: T): T {
    return arg;
}
let myIdentity1: <T>(arg: T) => T = identity3;
//也可以使用不同的泛型参数名
let myIdentity2: <m>(arg: m) => m = identity3;
//使用带有调用签名的对象字面量来定义泛型函数
let myIdentity3: { <T>(arg: T): T } = identity3;

//泛型接口
interface GenericIdentityFn {
    <T>(arg: T): T;
}
function identity4<T>() {

}
