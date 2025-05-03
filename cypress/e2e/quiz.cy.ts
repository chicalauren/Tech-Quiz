
describe("Quiz Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should start the quiz and complete the first question", () => {
    cy.get("button").contains("Start Quiz").click();
    cy.get(".card").should("be.visible");
    cy.get("h2").should("not.be.empty");
  });
  it("should answers questions and complete the quiz", () => {
    cy.get("button").contains("Start Quiz").click();
    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("1").click();
    }
    cy.get(".alert-success")
    .should("be.visible")
    .invoke("text")
    .should("include", "Your score");
    });
  it("should restart the quiz after completion", () => {
    cy.get("button").contains("Start Quiz").click();
    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("1").click();
    }
    cy.get("button").contains("Restart Quiz").click();
    cy.get(".card").should("be.visible");
    cy.get("h2").should("not.be.empty");
  });
});