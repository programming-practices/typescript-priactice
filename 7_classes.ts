class TypeScript {
    version: string;

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: TypeScript version is ${this.version}`;
    }
}

class Car {
    readonly model: string;
    readonly numberOfWheels: number = 4;

    constructor(theModel: string) {
        this.model = theModel;                                                  // Overwriting a "readonly variable" is possible only in the constructor.
    }
}

// =====================================================================================================================
// =================================== The definition of these classes is identical ====================================
// =====================================================================================================================
// class Car {
//     readonly model: string;
//     readonly numberOfWheels: number = 4;
//
//     constructor(theModel: string) {
//         this.model = theModel;
//     }
// }

// class Car {
//     readonly numberOfWheels: number = 4;
//
//     constructor(readonly model: string) {}
// }

// =====================================================================================================================
// ================================================== Access Modifiers =================================================
// =====================================================================================================================
class SomeClass_1 {
    private someValue_1: string = '';
    protected someValue_2: string = '';
    public someValue_3: string = '';
    someValue_4: string = '';                                                      // Default access modifier is public.
}

class SomeClass_2 {
    private someMethod_1(): void {}
    protected someMethod_2(): void {}
    public someMethod_3(): void {}
    someMethod_4(): void {}                                                          // Default access modifier is public.
}
