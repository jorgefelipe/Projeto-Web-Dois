export const stringPrice = (valueInCents: number | undefined) => {
  if (valueInCents) {
    const numero = (valueInCents / 100).toFixed(2).split('.');
    numero[0] = `R$ ${numero[0].split(/(?=(?:...)*$)/).join('.')}`;
    return numero.join(',');
  }
  return '';
};

export const getValueInCentsPriceForKeyPressed = (
  keyPressed: string,
  prevValueInCents: number | undefined
) => {
  // console.log(prevValueInCents);
  if (prevValueInCents) {
    if (keyPressed === 'Backspace') {
      return Number(
        prevValueInCents
          .toString()
          .substr(0, prevValueInCents.toString().length - 1)
      );
    }
    return Number(prevValueInCents + keyPressed);
  }
  return keyPressed === 'Backspace' ? 0 : Number(keyPressed);
};
