export function roll(sides, dice, rolls) {
  const result = []  
  
  for (let i = 0; i <= rolls; i++) {
    for (let j = 1; j <= f_dices; j++){
      result[i] += 1 + Math.floor(Math.random() * sides);
    }
  }
  
  const rollResult = {
    sides: sides,
    dice: dice,
    rolls: rolls,
    results: result
  }
  
  return JSON.stringify(rollResult);
}