// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
interface SomeInterface {
    readonly id: string;
    color?: string;                                                                               // Optional Parameter.
    size: {
        width: number;
        height: number;
    }
}

const someInterface_1: SomeInterface = {
    id: '1',
    size: {
        width: 10,
        height: 10
    }
};

someInterface_1.color = '#ffa';
// someInterface_1.id = '23';                                                           // ERROR !!! Read-only property.

const someInterface_2: SomeInterface = {
    id: '2',
    size: {
        width: 20,
        height: 20
    },
    color: '#ccc'
};

// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
const someInterface_3 = {};
const someInterface_4 = {} as SomeInterface;
const someInterface_5 = <SomeInterface>{};                                                            // Old definition.

// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
