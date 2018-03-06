class Animal {

    constructor(name = '无姓名', age = 0) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log(this.name, this.age)
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    say() {
        super.say(); // 父类的say
        console.log('这是子类的say')
    }
}

const cat = new Cat('小花');
cat.say();