// Test make sure the function obscures credit card numbers that are between the length of 12 and 16 digits

const obscureCreditCard = require("./obscureCreditCard");

describe("Obscure Credit Card", () => {

    test("Masks a 12-character string leaving last 4 visible", () => {
        expect(obscureCreditCard("123456789012")).toBe("XXXXXXXX9012");
    });
    test("Masks a 16-character string leaving last 4 visible", () => {
        expect(obscureCreditCard("1234567890123456")).toBe("XXXXXXXXXXXX3456");
    });
    test("Works for 13, 14, and 15-character string leaving last 4 visible", () => {
        expect(obscureCreditCard("AAAAAAAAAAAAA")).toBe("XXXXXXXXXAAAA");
        expect(obscureCreditCard("bbbbbbbbbbbbbb")).toBe("XXXXXXXXXXbbbb");
        expect(obscureCreditCard("CCCCCCCCCCCCCCC")).toBe("XXXXXXXXXXXCCCC");
    });
    test("Does not validate digits; any characters are ok", () => {
        expect(obscureCreditCard("asgdfHUIFhuid")).toBe("XXXXXXXXXhuid");
    });

    test("Whitespace counts toward length (no trimming)", () => {
        expect(obscureCreditCard("12345678901 ")).toBe("XXXXXXXX901 ");
    });

    test("Returns 'Invalid Credit Card' for length < 12", () => {
        expect(obscureCreditCard("12345678901")).toBe("Invalid Credit Card");
        expect(obscureCreditCard("")).toBe("Invalid Credit Card");
    });
    
    test("Returns 'Invalid Credit Card' for length > 16", () => {
        expect(obscureCreditCard("12345678901234567")).toBe("Invalid Credit Card");
    });
    
});