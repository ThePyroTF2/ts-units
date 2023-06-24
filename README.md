# `ts-units`

A package for the simple management of physical units and conversion between them.

## Installation

    npm i ts-units

## Features

Creating a new measurement is as simple as making an instance of any of the pre-provided classes:

```ts
import { Foot, Kilogram } from 'ts-units'

const foot = new Foot(1)
const gram = new Kilogram(0.001)
```

Units can be dynamically converted, so long as they are of the same type (so you can't convert a unit of mass to a unit of length, for instance). Just pass in a unit of the type you want to convert to:

```ts
import { Foot, Meter } from 'ts-units'

const foot = new Foot(1)
const meter = foot.to(new Meter())
console.log(meter.length) // 0.3048
```

The `to` function is type-checked:

```ts
import { Foot, Pound } from 'ts-units'

const foot = new Foot(1)
const foo = foot.to(new Pound()) // TypeError
```

You can also very easily create your own units! Just give it a name and a conversion factor to the base unit (Meter for Length, Kilogram for Mass, and Radian for Angle):

```ts
import { Mass, Pound } from 'ts-units'

class Ton extends Mass {
	type = 'ton'
	baseConversionFactor = 2000 * (1 / 0.45359237)
}

const ton = new Ton(1)
const tonPounds = ton.to(new Pound())
console.log(tonPounds.mass) // 2000 (in reality, somewhat off due to floating-point imprecision)
```
