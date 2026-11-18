//// [tests/cases/compiler/betterErrorForAccidentalCallNonstandardLineTerminator.ts] ////

//// [betterErrorForAccidentalCallNonstandardLineTerminator.ts]
const a = (x: number) => x (1)

//// [betterErrorForAccidentalCallNonstandardLineTerminator.js]
"use strict";
const a = (x) => x(1);
