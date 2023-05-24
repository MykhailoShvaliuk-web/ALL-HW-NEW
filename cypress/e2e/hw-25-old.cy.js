describe('Test Toastr', () => {
    beforeEach(() => { 
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('.menu-title.ng-tns-c141-19').click();
        cy.get('.menu-title.ng-tns-c141-23').click();
    })

    const setParamsAndClick = (testData, expectedResult) => {
        cy.get('nb-card-body > div > div:nth-child(1) > div:nth-child(1) > nb-select').click();

        cy.get(`nb-option[ng-reflect-value="${testData.position}"]`).click();
    
        cy.get('[name="title"]').clear().type(`${testData.title}`);

        cy.get('[name="content"]').clear().type(`${testData.content}`)

        cy.get('nb-card > nb-card-body > div > div:nth-child(1) > div:nth-child(4) > input').clear().type(1000);

        cy.get('nb-card-body > div > div:nth-child(2) > div:nth-child(1) > nb-select').click();
        cy.get(`nb-option[ng-reflect-value="${testData.type}"]`).click();

        cy.get('button.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();

        cy.get(`nb-toastr-container > nb-toast > div.content-container > span`).should("contain.text", `${expectedResult.title}`);

        cy.get(`nb-toastr-container > nb-toast > div.content-container > div`).should("have.text", `${expectedResult.content}`);

        cy.get(`nb-toastr-container > nb-toast`).should('have.css', 'background-color', `${expectedResult.color}`);

        cy.get(`div.cdk-overlay-container > div`).should('have.css', 'justify-content', `${expectedResult.position1}`)
        .and('have.css', 'align-items', `${expectedResult.position2}`);

    }

    const testParams1 = {
        id: 1,
        testData: {
            position: 'top-left',
            title: 'test title top-left',
            content: 'test content top-left',
            time: '1000',
            type: 'danger'
        },
        expectedResult: {
            icon: 'email',
            title: 'test title top-left',
            content: 'test content top-left',
            color: 'rgb(176, 0, 32)',
            position1: 'flex-start',
            position2: 'flex-start'
        }
    };

    const testParams2 = {
        id:2,
        testData: {
            position: 'top-right',
            title: 'test title top-right',
            content: 'test content top-right',
            time: '1000',
            type: 'info'
            },
        expectedResult: {
            icon: 'email',
            title: 'test title top-right',
            content: 'test content top-right',
            color: 'rgb(4, 149, 238)',
            position1: 'flex-end',
            position2: 'flex-start'
            }
    };

    const testParams3 = {
        id:3,
            testData: {
                position: 'bottom-left',
                title: 'test title bottom-left',
                content: 'test content bottom-left',
                time: '1000',
                type: 'warning'
            },
        expectedResult: {
                icon: 'email',
                title: 'test title bottom-left',
                content: 'test content bottom-left',
                color: 'rgb(255, 159, 5)',
                position1: 'flex-start',
                position2: 'flex-end'
                }
    };

    
    const testParams4 =  {
        id:4,
            testData: {
                position: 'bottom-right',
                title: 'test title bottom-right',
                content: 'test content bottom-right',
                time: '1000',
                type: 'success'
            },
        expectedResult: {
                icon: 'email',
                title: 'test title bottom-right',
                content: 'test content bottom-right',
                color: 'rgb(96, 175, 32)',
                position1: 'flex-end',
                position2: 'flex-end'
                }
    };
        [
            testParams1,
            testParams2,
            testParams3,
            testParams4  
        ].forEach(params => {
            it(`Test ${params.id}`, () => {
                setParamsAndClick(params.testData, params.expectedResult);
            }) 
        });

        it(`Test 1`, () => {
            setParamsAndClick(testParams1.testData, testParams1.expectedResult);
        }) 

        it(`Test 2`, () => {
            setParamsAndClick(testParams2.testData, testParams2.expectedResult);
        }) 

        it(`Test 3`, () => {
            setParamsAndClick(testParams3.testData, testParams3.expectedResult);
        }) 

        it(`Test 4`, () => {
            setParamsAndClick(testParams4.testData, testParams4.expectedResult);
        }) 
})