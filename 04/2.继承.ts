//父类
class User2 {
    constructor(
        public id: number,
        public username: string
    ) {
    }
    posArticle(title: string, content: string) {
        console.log(`${this.username} 发表了文章《${title}》 内容是：${content}`)
    }
}
//子类
class VIP extends User2 {
    //子类中添加constructor,必须super父类的参数
    constructor(
        id: number,
        username: string,
        public score: number
    ) {
        super(id, username)
        //使用this.id要早super之后
    }
    //父类函数重写，会调用重写后的函数
    //重写：参数一致
    // posArticle(title:string,content:string){
    //     console.log(`重写函数---> ${this.username} 发表了一篇文章《${title}》 内容是：${content}`)
    // }

    //重载：参数个数，类型不同
    posArticle(title: string, content: string): void;
    posArticle(title: string, content: string, file: string): void;
    posArticle(title: string, content: string, file?: string) {
        //super父类方法
        super.posArticle(title, content)
        if (file) {
            this.posAttachment(file)
        }
    }

    posAttachment(file: string) {
        console.log(`${this.username} 上传了一个附件：${file}`)
    }
}

let vip1 = new VIP(1, "midhuhu", 89)
vip1.posArticle("midhuhu", "再借我五百年", "1-png")
// vip1.posAttachment("e.png")
