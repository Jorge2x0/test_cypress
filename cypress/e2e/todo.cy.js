describe('template spec', () => {
  it('crear tarea', () => {
      cy.visit('https://todomvc.com/examples/react/dist/#/')
      cy.get('[data-testid="text-input"]').type('tarea1{enter}')
      cy.get('[data-testid="todo-item-label"]').contains('tarea1')
  })

  it('tarea completada', () => {
      cy.visit('https://todomvc.com/examples/react/dist/#/')
      cy.get('[data-testid="text-input"]').type('tarea2{enter}')
      cy.get('[data-testid="todo-item-toggle"]').check()
      cy.get('[data-testid="todo-item-toggle"]').first().check()
  })

  it('Desmarcar tarea', () => {
      cy.visit('https://todomvc.com/examples/react/dist/#/')
      cy.get('[data-testid="text-input"]').type('tarea3{enter}')
      cy.get('[data-testid="todo-item-toggle"]').check()
      cy.get('[data-testid="todo-item-toggle"]').uncheck()
      cy.get('[data-testid="todo-item-toggle"]').first().uncheck()
 
  })

  it('Editar tarea', () => {
      cy.visit('https://todomvc.com/examples/react/dist/#/')
      cy.get('[data-testid="text-input"]').type('tarea4{enter}')
      cy.get('[data-testid="todo-item-label"]').dblclick()
      cy.get('.view > .input-container > [data-testid="text-input"]').clear().type('tarea5{enter}')
      cy.get('[data-testid="todo-item-label"]').contains('tarea5')
      
  })
  it('Borrar tarea', () => {
      cy.visit('https://todomvc.com/examples/react/dist/#/')
      cy.get('[data-testid="text-input"]').type('tarea5{enter}')
  
      cy.get('[data-testid="todo-item"]').trigger('mouseover')
      cy.get('.destroy').click({force:true})
  
      
  })

  it('Filtrar tareas', () => {
      cy.visit('https://todomvc.com/examples/react/dist/#/')
      cy.get('[data-testid="text-input"]').type('tarea1{enter}')
      cy.get('[data-testid="text-input"]').type('tarea2{enter}')
      cy.get('[data-testid="text-input"]').type('tarea3{enter}')
      cy.get('[data-testid="text-input"]').type('tarea4{enter}')
      cy.get('[data-testid="text-input"]').type('tarea5{enter}')
      cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').check()
      cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
      cy.get('[data-testid="todo-item-label"]').first('.completed')
      cy.get(':nth-child(2) > a').click()
      cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should('be.visible')
      cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should('be.visible')
      cy.get(':nth-child(3) > .view > [data-testid="todo-item-label"]').should('be.visible')
      cy.get(':nth-child(4) > .view > [data-testid="todo-item-label"]').should('be.visible')
      cy.get(':nth-child(1) > a').click()
   
  

  })
})