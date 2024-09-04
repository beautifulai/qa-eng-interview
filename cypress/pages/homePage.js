class homePage{

        elements ={    
            prompt : () => cy.get('[placeholder^="Try a prompt"]'),
            pre_gen_prompt: (promptName) => cy.contains('div', promptName),
            generateBtn : () => cy.get('[class*="GenerateButton"]')
        }

    }
    
    export default new homePage();