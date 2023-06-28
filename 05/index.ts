// 1 类型声明
const user_n: { name: string, age: number } = {
    name: 'trao',
    age: 15
}

// 2 接口声明
interface user_i {
    name: string,
    age: number,
}
const user_i: user_i = {
    name: 'hix',
    age: 15,
}
class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const user_c: user_i = new UserAccount('bob', 1)

// 3 接口声明可以写多次，会合并
interface People_n {
    name: string,
    age: number,
}
interface People_n {
    store: number
}

// 接口声明可以继承自类
interface People_m extends UserAccount {
    store: number
}
const people_n: People_m = {
    name: 'jefins',
    age: 15,
    store: 12
}
