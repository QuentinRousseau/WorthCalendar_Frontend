describe('Appointments View', () => {
  beforeEach(() => {
    cy.visit('/appointments')
  })

  it('should display the appointments page', () => {
    cy.contains('Appointments').should('be.visible')
  })
})
