describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://todomvc.com/examples/react/dist/') //Vamos a la web deseada con el método .visit()
    cy.get('[data-testid="text-input"]').type('Comprar pan{enter}') //Cogemos el campo de input con el método .get() y le añadimos texto con el método .type()
    cy.get('[data-testid="todo-item-toggle"]').click() //cogemos el campo círculo y hacemos con click con método .click()
    
  })
})