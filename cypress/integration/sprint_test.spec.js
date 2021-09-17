describe("pizza order", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
    });
    const nameInput = () => cy.get("input[name=name]")
    const specialInput = () => cy.get("input[name=special]")
    const pepInput = () => cy.get("input[name=pepperoni")
    const sausageInput = () => cy.get("input[name=sausage]")
    const hamInput = () => cy.get("input[name=ham]")
    const baconInput = () => cy.get("input[name=bacon]")
    const submitButton = () => cy.get("button[id=order-button]")
    // const sizeInput = () => cy.get("input[name=size]")

    it("sanity check to make sure tests work", () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
      });

    describe("navigate to site and fill out inputs", () => {
        it("can navigate to the site", () => {
            cy.url().should("include", "localhost")
        })
        it("you can add text to the boxes, click checkboxes, and submit form", () => {
            nameInput()
                .should("have.value", "")
                .type("Daniel")
                .should("have.value", "Daniel");

            specialInput()
                .should("have.value", "")
                .type("Daniel")
                .should("have.value", "Daniel");
        cy.get('select').select("small")

            pepInput().click().should("have.value", "on")
            sausageInput().click().should("have.value", "on")
            hamInput().click().should("have.value", "on")
            baconInput().click().should("have.value", "on")
            submitButton().should("not.be.disabled")
            submitButton().click()
        })
    })
});
//danger zone