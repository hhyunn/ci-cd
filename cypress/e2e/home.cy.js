describe("Home Page Test", () => {
    beforeEach(function () {
        cy.visit("/");
    });

    it("'Get started by'라는 텍스트가 존재한다.", () => {
        cy.contains("Get started by").should("exist");
    });

    it("'Docs'라는 anchor heading이 있고, 이 anchor의 href 속성이 정확하게 설정되어 있다.", () => {
        cy.contains("a", "Docs")
            .should("have.attr", "href")
            .and(
                "equal",
                "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            );
    });
});
