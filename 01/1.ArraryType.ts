//number类型
let arrNum: Array<number>=[]
arrNum.push(100)
// arrNum.push("100")

//string类型
let arrStr: string[]=[]
arrStr.push('111')
// arrStr.push(100)


//元组类型
let dataOne: [string, number]=['one', 0]
dataOne.push(100)
dataOne.push("100")
dataOne.push(100, '100')
// dataOne.push(true)


//枚举类型
//值不可修改，前面的Key必须是字符，
enum HTTP_CODE {
    OK=200,
    NOT_FOUND=404,
    NOT_LIANJIE=500
}
console.log(HTTP_CODE.OK)

//字符串枚举
enum URLS {
    USER_LOGIN='/api/login',
    USER_LAYOUT='/api/layout',
    USER=200
}
