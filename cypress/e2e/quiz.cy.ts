
describe("Quiz Component", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/questions/random", {
      fixture: "questions.json",
      statusCode: 200,
    }).as("getRandomQuestions");

    cy.visit("/");
    cy.get("body").invoke("html").then((html) => cy.log(html));
  });

  it("should start the quiz and complete the first question", () => {
    cy.contains("Start Quiz", { timeout: 8000 }).should("be.visible").click();
    cy.wait("@getRandomQuestions");

    cy.get(".card").should("be.visible");
    cy.get("h2").should("not.be.empty");
  });

  it("should answer all questions and show the score", () => {
    cy.contains("Start Quiz", { timeout: 8000 }).click();
    cy.wait("@getRandomQuestions");

    for (let i = 0; i < 10; i++) {
      cy.contains("1").should("be.visible").click();
      cy.get("h2", { timeout: 4000 }).should("not.be.empty");
    }

    cy.get(".alert-success", { timeout: 8000 })
      .should("be.visible")
      .invoke("text")
      .should("include", "Your score");
  });

  it("should restart the quiz after completion", () => {
    cy.contains("Start Quiz", { timeout: 8000 }).click();
    cy.wait("@getRandomQuestions");

    for (let i = 0; i < 10; i++) {
      cy.contains("1").should("be.visible").click();
      cy.get("h2", { timeout: 4000 }).should("not.be.empty");
    }

    cy.get(".alert-success", { timeout: 8000 }).should("exist");

    cy.contains("Take New Quiz", { timeout: 8000 }).should("be.visible").click();
    cy.wait("@getRandomQuestions");

    cy.get(".card").should("be.visible");
    cy.get("h2").should("not.be.empty");
  });
});
