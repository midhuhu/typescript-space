/**
 * public 公开
 * protected 私有
 * private 受保护
 * readonly 只读
 */

class People {
    constructor(
        readonly id: number,
        protected username: string,
        private psd: string
    ) {
        //......
    }

    //寄存器 set get
    set password(psd: string) {
        if (psd.length >= 6) {
            this.psd = psd;
        }
    }
    get password(): string {
        return this.psd;
    }
    method1() {
        this.id;
        this.username;
        this.psd;
    }
    console() {
        console.log(`${this.id},${this.username},${this.psd}`)
    }
}

let people1 = new People(1, "2", "3")
// people1.id = 1;
// people1.username="22";
// people1.psd;
people1.console()
people1.password = '498814'
console.log(people1.password);
people1.console()
