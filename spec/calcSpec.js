describe("Calculator", function() {
    describe("adition tests", function() {
        it("should return 42", function() {
            expect(adition(20,22)).toBe(42);
        });
        it("should return 26", function() {
            expect(adition(7,19)).toBe(26);
        })
    });
});
 