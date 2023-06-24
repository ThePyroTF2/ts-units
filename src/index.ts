export class Length {
	type = ''
	baseConversionFactor = 0
	length: number

	constructor(length = 0) {
		this.length = length
	}

	/**
	 * Convert the current length to a different unit
	 * @param convertTo - A variable of the unit that you wish to convert to
	 * @returns The converted value in the unit that you specified
	 */
	to<T extends Length>(convertTo: T): T {
		// Please forgive this typechecking wizardry...
		// This is the only way I could manage to actually construct a new instance of `convertTo`'s class without typescript complaining.
		return new (convertTo.constructor as new (length: number) => T)(
			(this.length * this.baseConversionFactor) /
				convertTo.baseConversionFactor
		)
	}
}

export class Mass {
	type = ''
	baseConversionFactor = 0
	mass: number

	constructor(mass = 0) {
		this.mass = mass
	}

	/**
	 * Convert the current mass to a different unit
	 * @param convertTo - A variable of the unit that you wish to convert to
	 * @returns The converted value in the unit that you specified
	 */
	to<T extends Mass>(convertTo: T): T {
		return new (convertTo.constructor as new (value: number) => T)(
			(this.mass * this.baseConversionFactor) /
				convertTo.baseConversionFactor
		)
	}
}

export class Angle {
	type = ''
	baseConversionFactor = 0
	angle: number

	constructor(angle = 0) {
		this.angle = angle
	}

	/**
	 * Convert the current angle to a different unit
	 * @param convertTo - A variable of the unit that you wish to convert to
	 * @returns The converted value in the unit that you specified
	 */
	to<T extends Angle>(convertTo: T): T {
		return new (convertTo.constructor as new (value: number) => T)(
			(this.angle * this.baseConversionFactor) /
				convertTo.baseConversionFactor
		)
	}
}

// SI units
// ---------------

// Length

export class Millimeter extends Length {
	type = 'millimeter'
	baseConversionFactor = 0.001
}

export class Centimeter extends Length {
	type = 'centimeter'
	baseConversionFactor = 0.01
}

export class Meter extends Length {
	type = 'meter'
	baseConversionFactor = 1
}

export class Kilometer extends Length {
	type = 'kilometer'
	baseConversionFactor = 1000
}

// Mass

export class Gram extends Mass {
	type = 'gram'
	baseConversionFactor = 0.001
}

export class Kilogram extends Mass {
	type = 'kilogram'
	baseConversionFactor = 1
}

export class Tonne extends Mass {
	type = 'tonne'
	baseConversionFactor = 1000
}

// Imperial Units
// ---------------

// Length

export class Inch extends Length {
	type = 'inch'
	baseConversionFactor = (1 / 0.9144) * 36
}

export class Foot extends Length {
	type = 'foot'
	baseConversionFactor = (1 / 0.9144) * 3
}

export class Yard extends Length {
	type = 'yard'
	baseConversionFactor = 1 / 0.9144
}

export class Mile extends Length {
	type = 'mile'
	baseConversionFactor = 1 / 0.9144 / 1760
}

// Mass

export class Pound extends Mass {
	type = 'pound'
	baseConversionFactor = 1 / 0.45359237
}

// Angles
// ---------------

export class Degree extends Angle {
	type = 'degree'
	baseConversionFactor = Math.PI / 180
}

export class Radian extends Angle {
	type = 'radian'
	baseConversionFactor = 1
}
