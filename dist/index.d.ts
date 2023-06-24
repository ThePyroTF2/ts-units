export declare class Length {
    type: string;
    baseConversionFactor: number;
    length: number;
    constructor(length?: number);
    /**
     * Convert the current length to a different unit
     * @param convertTo - A variable of the unit that you wish to convert to
     * @returns The converted value in the unit that you specified
     */
    to<T extends Length>(convertTo: T): T;
}
export declare class Mass {
    type: string;
    baseConversionFactor: number;
    mass: number;
    constructor(mass?: number);
    /**
     * Convert the current mass to a different unit
     * @param convertTo - A variable of the unit that you wish to convert to
     * @returns The converted value in the unit that you specified
     */
    to<T extends Mass>(convertTo: T): T;
}
export declare class Angle {
    type: string;
    baseConversionFactor: number;
    angle: number;
    constructor(angle?: number);
    /**
     * Convert the current angle to a different unit
     * @param convertTo - A variable of the unit that you wish to convert to
     * @returns The converted value in the unit that you specified
     */
    to<T extends Angle>(convertTo: T): T;
}
export declare class Millimeter extends Length {
    type: string;
    baseConversionFactor: number;
}
export declare class Centimeter extends Length {
    type: string;
    baseConversionFactor: number;
}
export declare class Meter extends Length {
    type: string;
    baseConversionFactor: number;
}
export declare class Kilometer extends Length {
    type: string;
    baseConversionFactor: number;
}
export declare class Gram extends Mass {
    type: string;
    baseConversionFactor: number;
}
export declare class Kilogram extends Mass {
    type: string;
    baseConversionFactor: number;
}
export declare class Tonne extends Mass {
    type: string;
    baseConversionFactor: number;
}
export declare class Inch extends Length {
    type: string;
    baseConversionFactor: number;
}
export declare class Foot extends Length {
    type: string;
    baseConversionFactor: number;
}
export declare class Yard extends Length {
    type: string;
    baseConversionFactor: number;
}
export declare class Mile extends Length {
    type: string;
    baseConversionFactor: number;
}
export declare class Pound extends Mass {
    type: string;
    baseConversionFactor: number;
}
export declare class Degree extends Angle {
    type: string;
    baseConversionFactor: number;
}
export declare class Radian extends Angle {
    type: string;
    baseConversionFactor: number;
}
