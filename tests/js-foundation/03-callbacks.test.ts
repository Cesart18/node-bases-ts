import { getUserById } from '../../src/js-foundation/04-arrow';


    describe('03-callbacks.ts', () => { 

        // ! dentro de los params del callback coloco done para poder usar un callback bloqueante

        test('getUserById should return an error if user does no exist', () => {
            
            // esto funciona correctamente para un callback no bloqueante

            const id = 10;

            getUserById( id, (err, user) => {

                expect( err ).toBe(`User not found with id ${id}`);
                expect( user ).toBeUndefined();
                // done();  //! esta es la indiciacion del done en los parametros del callback
            });
            
        });


        test('getUserById should return an user', () => { 

            const id = 1;
            getUserById( id, (err, user) => {

                expect( err ).toBeUndefined();
                expect( user ).toEqual({
                    id,
                    name: 'John Doe'
                });
                

            });

         })
        
     });