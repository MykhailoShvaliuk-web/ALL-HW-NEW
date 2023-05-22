// describe("Parametrized test suite", () => {

//   beforeEach(() => {
//       cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
//       cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//       cy.get('.menu-title.ng-tns-c141-19').click();
//       cy.get('.menu-title.ng-tns-c141-23').click();
//       cy.get('.ng-touched').type(`$`);
//     //   cy.get('[title="Forms"]').click();
//     //   cy.get('[title="Form Layouts"]').click();
//   })

//   const testngadmin = (inputUserName,  inputUserEmail, checkboxClick = false) => {
//       cy.get('[placeholder="Jane Doe"]').type(`${inputUserName}`);
//       cy.get('nb-card-body > form > input:nth-child(2)').type(`${inputUserEmail}`);
//       if(checkboxClick){
//           cy.get('nb-card-body > form > nb-checkbox > label > input').click({force: true});
//       }
//   }

//   it ('t1', () => {
//       testngadmin('Test', 'test@test.com', true)
//       cy.get('[placeholder="Jane Doe"]').should("contain.value", `Test`);
//       cy.get('nb-card-body > form > input:nth-child(2)').should("contain.value", `test@test.com`);
//       cy.get('nb-card-body > form > nb-checkbox > label > input').should("contain.checked", true);
//   })

//   it ('t2', () => {
//       testngadmin('Test2', 'test2@test.com', true)
//       cy.get('[placeholder="Jane Doe"]').should("contain.value", `Test2`);
//       cy.get('nb-card-body > form > input:nth-child(2)').should("contain.value", `test2@test.com`);
//       cy.get('nb-card-body > form > nb-checkbox > label > input').should("contain.checked", true);
//   })
// })



it.skip("T1", () => {

        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('.menu-title.ng-tns-c141-19').click();
        cy.get('.menu-title.ng-tns-c141-23').click();
        cy.get('[ng-reflect-selected="top-right"]').click();
        cy.get('#nb-option-27').click();
        cy.get('[name="title"]').clear();
        cy.get('[name="title"]').type('test title');
        cy.get('[name="content"]').clear();
        cy.get('[name="content"]').type('test content');
        cy.get('[ng-reflect-selected="primary"]').click();
        cy.get('#nb-option-36').click();
        cy.get('button.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();
        //cy.get('#cdk-overlay-12 > nb-toastr-container > nb-toast').click();
        //cy.get('nb-toast.ng-tns-c209-55 ng-trigger ng-trigger-fadeIn status-primary destroy-by-click has-icon custom-icon ng-star-inserted').click();
    }) 



// describe("Parametrized test suite1", () => {

//   before(() => {
//       cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
//       cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//       cy.get('.menu-title.ng-tns-c141-19').click();
//       cy.get('.menu-title.ng-tns-c141-23').click();
      
//   })
// })  

//   const testngadmin = (inputUserName,  inputUserEmail, checkboxClick = false) => {
//       cy.get('[placeholder="Jane Doe"]').type(`${inputUserName}`);
//       cy.get('nb-card-body > form > input:nth-child(2)').type(`${inputUserEmail}`);
//       if(checkboxClick){
//           cy.get('nb-card-body > form > nb-checkbox > label > input').click({force: true});
//       }
//   }

// testData: {
//     position: 'top-right',
//     title: 'test title',
//     content: 'test content',
//     time: '1000',
//     type: 'primary'
//     }
    

// expectedResult: {
//     icon: 'email',
//     title: 'test title',
//     content: 'test content',
//     color: ' ... ',
//     position: ...
//     }

///////////////////////////////////

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

        cy.get('[name="title"]').clear();
        cy.get('[name="title"]').type(`${testData.title}`);

        cy.get('[name="content"]').clear();
        cy.get('[name="content"]').type(`${testData.content}`);

        
        cy.get('nb-card > nb-card-body > div > div:nth-child(1) > div:nth-child(4) > input').clear();
        cy.get('nb-card > nb-card-body > div > div:nth-child(1) > div:nth-child(4) > input').type(1000);

        cy.get('nb-card-body > div > div:nth-child(2) > div:nth-child(1) > nb-select').click();
        cy.get(`nb-option[ng-reflect-value="${testData.type}"]`).click();

        cy.get('button.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();


        //cy.get(`#cdk-overlay-${expectedResult.position} > nb-toastr-container > nb-toast`)

        cy.get(`nb-toastr-container > nb-toast > div.content-container > span`).should("contain.text", `${expectedResult.title}`);

        cy.get(`nb-toastr-container > nb-toast > div.content-container > div`).should("have.text", `${expectedResult.content}`);

        cy.get(`nb-toastr-container > nb-toast`).should('have.css', 'background-color', `${expectedResult.color}`);

        cy.get(`div.cdk-overlay-container > div`).should('have.css', 'justify-content', `${expectedResult.position1}`).should('have.css', 'align-items', `${expectedResult.position2}`);

        //cy.get(`div.cdk-overlay-container > div`).should('have.css', 'justify-content', `${expectedResult.positionRight}`).should('have.css', 'align-items', `${expectedResult.positionTop}`)

    }


        [
            {
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
            },

            {
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
            },
            
            {
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
            },

            {
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
            }
        ].forEach(element => {
            it(`Test ${element.id}`, () => {
                setParamsAndClick(element.testData, element.expectedResult);
            }) 
        });
})

// top-right -> 'info' - done
// top-left -> 'danger' - done
// bottom-left -> 'warning' - done
// bottom-right -> 'success' - done








/////////////////////////////////////////// тест before
// describe.skip('Test Toastr', () => {
//     before(() => { 
//         cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
//         cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//         cy.get('.menu-title.ng-tns-c141-19').click();
//         cy.get('.menu-title.ng-tns-c141-23').click();
//     })

//     const setParamsAndClick = (testData, expectedResult) => {
//         cy.get('nb-card-body > div > div:nth-child(1) > div:nth-child(1) > nb-select').click();
//         cy.get(`nb-option[ng-reflect-value="${testData.position}"]`).click();

//         cy.get('[name="title"]').clear();
//         cy.get('[name="title"]').type(`${testData.title}`);

//         cy.get('[name="content"]').clear();
//         cy.get('[name="content"]').type(`${testData.content}`);

//         cy.get('nb-card > nb-card-body > div > div:nth-child(1) > div:nth-child(4) > input').clear();
//         cy.get('nb-card > nb-card-body > div > div:nth-child(1) > div:nth-child(4) > input').type(1000);

//         cy.get('nb-card-body > div > div:nth-child(2) > div:nth-child(1) > nb-select').click();
//         cy.get(`nb-option[ng-reflect-value="${testData.type}"]`).click();

//         cy.get('button.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();


//         cy.get(`nb-toastr-container > nb-toast > div.content-container > span`).should("contain.text", `${expectedResult.title}`);

//         cy.get(`nb-toastr-container > nb-toast > div.content-container > div`).should("have.text", `${expectedResult.content}`);

//         cy.get(`nb-toastr-container > nb-toast`).should('have.css', 'background-color', `${expectedResult.color}`);

//         cy.get(`div.cdk-overlay-container > div`).should('have.css', 'justify-content', `${expectedResult.position1}`).should('have.css', 'align-items', `${expectedResult.position2}`);

//     }
//               it('Test', () => {
//         [
//             {
//                 id: 1,
//                 testData: {
//                     position: 'top-left',
//                     title: 'test title top-left',
//                     content: 'test content top-left',
//                     time: '1000',
//                     type: 'danger'
//                 },
//                 expectedResult: {
//                     icon: 'email',
//                     title: 'test title top-left',
//                     content: 'test content top-left',
//                     color: 'rgb(176, 0, 32)',
//                     position1: 'flex-start',
//                     position2: 'flex-start'
//                     }
//             },

//             {
//                 id:2,
//                 testData: {
//                     position: 'top-right',
//                     title: 'test title top-right',
//                     content: 'test content top-right',
//                     time: '1000',
//                     type: 'info'
//                     },
//                 expectedResult: {
//                     icon: 'email',
//                     title: 'test title top-right',
//                     content: 'test content top-right',
//                     color: 'rgb(4, 149, 238)',
//                     position1: 'flex-end',
//                     position2: 'flex-start'
//                     }
//             },
            
//             {
//                 id:3,
//                     testData: {
//                         position: 'bottom-left',
//                         title: 'test title bottom-left',
//                         content: 'test content bottom-left',
//                         time: '1000',
//                         type: 'warning'
//                     },
//                 expectedResult: {
//                         icon: 'email',
//                         title: 'test title bottom-left',
//                         content: 'test content bottom-left',
//                         color: 'rgb(255, 159, 5)',
//                         position1: 'flex-start',
//                         position2: 'flex-end'
//                         }
//             },

//             {
//                 id:4,
//                     testData: {
//                         position: 'bottom-right',
//                         title: 'test title bottom-right',
//                         content: 'test content bottom-right',
//                         time: '1000',
//                         type: 'success'
//                     },
//                 expectedResult: {
//                         icon: 'email',
//                         title: 'test title bottom-right',
//                         content: 'test content bottom-right',
//                         color: 'rgb(96, 175, 32)',
//                         position1: 'flex-end',
//                         position2: 'flex-end'
//                         }
//             }
//         ].forEach(element => {
//             //it(`Test ${element.id}`, () => {
//                 setParamsAndClick(element.testData, element.expectedResult);
//                 cy.wait(5000);   
//             }) 
//         });
// })