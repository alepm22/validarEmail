import showCant from "./ventas.js"


describe("Mostrar Items", () => {
    it("Deberia mostrarse 5", () => {
        expect(showCant(5)).toEqual(5); 
    });
});
