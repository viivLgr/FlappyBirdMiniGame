(function(){
    'use strict';

    // 函数声明 （不推荐，会提升作用域）
    // function Animation(){
    //
    // }

    // 函数表达式 （推荐）
    var Animal = function(name, age){
        this.name = name;
        this.age = age;
        // this.say = function(){
        //     console.log(this.name + '   '+this.age);
        // }
    };

    Animal.prototype.say = function(){
        console.log('sdasd+'+this.name+' '+this.age);
    };

    // var cat = new Animal('cat', 3);
    // cat.say();
    // cat.say2();
    //
    // // call()  apply()
    // // 调用一个对象的一个方法，用另一个对象替换当前对象
    // Animal.prototype.say2.call(cat);
    //
    // var params = {
    //     name: '小猫2',
    //     age: 4
    // }
    //
    // cat.say2.call(params);


    // 寄生组合继承
    var Cat = function (name, age) {
        // Animal.apply(this, arguments)
        Animal.call(this, name, age)
    }
    Cat.prototype = Object.create(Animal.prototype); // 浅克隆 new了个恶心的
    // Cat.prototype = new Animal();  直接把对象赋过来了
    Cat.prototype.say = function(){
        var p = {
            name: '父类名字',
            age: 10
        }
        Animal.prototype.say.apply(p);
        console.log('这是子类的名字' + this.name+this.age);
    }
    var cat1 = new Cat('子猫', 5);
    cat1.say();
})();