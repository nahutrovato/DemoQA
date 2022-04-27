describe('API testing',() => {

    it('GET method', () => {

        const mojito = 'mojito'
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${mojito}`
       
        cy.request('GET',url)
            .then((resp)=>{
                expect(resp.status).to.eq(200);
            })
    
    })   

})