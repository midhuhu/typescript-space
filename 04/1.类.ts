class User {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        console.log("构造函数")
    }
    posArticle(title: string, content: string) {
        console.log(`posArticle---${title}----${content}`)
    }
}


// console.log(’构造函数‘)
let user1 = new User(1, "bob");
// console.log(‘posArticle’)
user1.posArticle("测试title", "测试content")
