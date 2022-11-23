#!/usr/bin/env node

import minimist from 'minimist';
import { roll } from "/lib/roll.js";

const args = minimist(process.argv.slice(2))

var sides = args.sides;
var dice = args.dice;
var rolls = args.rolls;

let rollObj = roll(sides, dice, rolls);
console.log(rollObj);
