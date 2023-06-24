"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radian = exports.Degree = exports.Pound = exports.Mile = exports.Yard = exports.Foot = exports.Inch = exports.Tonne = exports.Kilogram = exports.Gram = exports.Kilometer = exports.Meter = exports.Centimeter = exports.Millimeter = exports.Angle = exports.Mass = exports.Length = void 0;
class Length {
    type = '';
    baseConversionFactor = 0;
    length;
    constructor(length = 0) {
        this.length = length;
    }
    /**
     * Convert the current length to a different unit
     * @param convertTo - A variable of the unit that you wish to convert to
     * @returns The converted value in the unit that you specified
     */
    to(convertTo) {
        // Please forgive this typechecking wizardry...
        // This is the only way I could manage to actually construct a new instance of `convertTo`'s class without typescript complaining.
        return new convertTo.constructor((this.length * this.baseConversionFactor) /
            convertTo.baseConversionFactor);
    }
}
exports.Length = Length;
class Mass {
    type = '';
    baseConversionFactor = 0;
    mass;
    constructor(mass = 0) {
        this.mass = mass;
    }
    /**
     * Convert the current mass to a different unit
     * @param convertTo - A variable of the unit that you wish to convert to
     * @returns The converted value in the unit that you specified
     */
    to(convertTo) {
        return new convertTo.constructor((this.mass * this.baseConversionFactor) /
            convertTo.baseConversionFactor);
    }
}
exports.Mass = Mass;
class Angle {
    type = '';
    baseConversionFactor = 0;
    angle;
    constructor(angle = 0) {
        this.angle = angle;
    }
    /**
     * Convert the current angle to a different unit
     * @param convertTo - A variable of the unit that you wish to convert to
     * @returns The converted value in the unit that you specified
     */
    to(convertTo) {
        return new convertTo.constructor((this.angle * this.baseConversionFactor) /
            convertTo.baseConversionFactor);
    }
}
exports.Angle = Angle;
// SI units
// ---------------
// Length
class Millimeter extends Length {
    type = 'millimeter';
    baseConversionFactor = 0.001;
}
exports.Millimeter = Millimeter;
class Centimeter extends Length {
    type = 'centimeter';
    baseConversionFactor = 0.01;
}
exports.Centimeter = Centimeter;
class Meter extends Length {
    type = 'meter';
    baseConversionFactor = 1;
}
exports.Meter = Meter;
class Kilometer extends Length {
    type = 'kilometer';
    baseConversionFactor = 1000;
}
exports.Kilometer = Kilometer;
// Mass
class Gram extends Mass {
    type = 'gram';
    baseConversionFactor = 0.001;
}
exports.Gram = Gram;
class Kilogram extends Mass {
    type = 'kilogram';
    baseConversionFactor = 1;
}
exports.Kilogram = Kilogram;
class Tonne extends Mass {
    type = 'tonne';
    baseConversionFactor = 1000;
}
exports.Tonne = Tonne;
// Imperial Units
// ---------------
// Length
class Inch extends Length {
    type = 'inch';
    baseConversionFactor = (1 / 0.9144) * 36;
}
exports.Inch = Inch;
class Foot extends Length {
    type = 'foot';
    baseConversionFactor = (1 / 0.9144) * 3;
}
exports.Foot = Foot;
class Yard extends Length {
    type = 'yard';
    baseConversionFactor = 1 / 0.9144;
}
exports.Yard = Yard;
class Mile extends Length {
    type = 'mile';
    baseConversionFactor = 1 / 0.9144 / 1760;
}
exports.Mile = Mile;
// Mass
class Pound extends Mass {
    type = 'pound';
    baseConversionFactor = 1 / 0.45359237;
}
exports.Pound = Pound;
// Angles
// ---------------
class Degree extends Angle {
    type = 'degree';
    baseConversionFactor = Math.PI / 180;
}
exports.Degree = Degree;
class Radian extends Angle {
    type = 'radian';
    baseConversionFactor = 1;
}
exports.Radian = Radian;
