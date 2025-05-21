import Esbisiesto from "./Esbisiesto.js";

describe("Es bisisesto", () => {
  it("deberia devolver true si es divisible entre 400", () => {
    expect(Esbisiesto(2400)).toEqual(true);
  });
  it("deberia devolver false si el año es divisible por 100 pero no por 400", () => {
    expect(Esbisiesto(1700)).toEqual(false);
  });
  it("deberia devolver true si el año es divisible por 4 pero no por 100", () => {
    expect(Esbisiesto(2008)).toEqual(true);
  });
  it("deberia debolver false si no es divisible por 4", () => {
    expect(Esbisiesto(2017)).toEqual(false);
  });
});