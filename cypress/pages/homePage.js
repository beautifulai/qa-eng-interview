class homePage{


        elements ={
    
    
            prompt : () => cy.get('[placeholder^="Try a prompt"]'),
    
    
            generateBtn : () => cy.get('[class*="GenerateButton"]')
    
    
        }
    
    
    }
    
    
    module.exports = new homePage();