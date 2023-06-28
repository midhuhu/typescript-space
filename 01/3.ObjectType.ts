let f: object={};

let arr1: Array<number>=[1, 2, 3]

let date: Date=new Date()

let user: {username: string; age: number}={
    username: 'Aix',
    age: 12
}
console.log(user.age)

//接口使用,复用
//只能作为类型使用，不能作为具体值

interface userPerson {
    username: string;
    age: number
}
let user2: userPerson={
    username: 'Bob',
    age: 23
}

//类与构造函数
//功能相对强大，但是比较复杂
class Person {
    constructor (public username: string, public age: number) {
    }
}
let user3: Person=new Person("Cis", 20)
console.log(user3.age)




interface AjaxOptions {
    url: string;
    method: string
}
function ajax(options: AjaxOptions) {

}
ajax({
    url: 'www.baidu.com',
    method: 'get'
})
