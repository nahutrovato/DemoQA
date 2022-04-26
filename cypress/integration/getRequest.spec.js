describe('API testing',() => {

    it('GET method', () => {

        const url = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito';
        const mojito = cy.request('GET',url)

        cy.log(mojito);
    })

})