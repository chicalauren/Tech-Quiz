import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe("Quiz Component", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "/api/questions/random",
      { fixture: "questions.json", statusCode: 200 }
    ).as("getRandomQuestion");
  });

  it("should start the quiz and display the first question", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    cy.get(".card").should("be.visible");
    cy.get("h2").should("not.be.empty");
  });

  it("should answer all questions and display the score", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();

    cy.fixture("questions.json").then((questions) => {
      questions.forEach(() => {
        cy.get("button").contains("1").click();
        cy.get("h2").should("not.be.empty");
      });

      cy.get(".alert-success", { timeout: 8000 })
        .should("be.visible")
        .invoke("text")
        .should("include", "Your score");
    });
  });

  it("should restart the quiz after completion", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();

    cy.fixture("questions.json").then((questions) => {
      questions.forEach(() => {
        cy.get("button").contains("1").click();
        cy.get("h2").should("not.be.empty");
      });

      cy.contains("Take New Quiz", { timeout: 8000 }).should("be.visible").click();
      cy.get(".card").should("be.visible");
      cy.get("h2").should("not.be.empty");
    });
  });
});
