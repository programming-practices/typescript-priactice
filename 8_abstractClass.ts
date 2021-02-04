abstract class SomeAbstractClass {
    abstract someAbstractMethod_1(): void;

    abstract someAbstractMethod_2(): void;

    protected someMethod_2(): void {
    }
}

class SomeClass extends SomeAbstractClass {

    someAbstractMethod_1(): void {
        console.log('someAbstractMethod_1')
    }

    someAbstractMethod_2(): void {
        console.log('someAbstractMethod_2')
    }

}
