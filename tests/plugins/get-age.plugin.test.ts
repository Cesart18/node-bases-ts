import { getAge } from '../../src/plugins/get-age.plugin';


    describe('plugins/get-age.plugin.ts', () => { 

        test('getAge should return the age of a person', () => { 

            const birthdate = '1996-05-18';
            const age = getAge(birthdate);
            
            expect( typeof age ).toBe('number');
            
        });    
        
        test('getAge should return current age', () => { 
            
            const birthdate = '1996-05-18';
            const age = getAge(birthdate);

            const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
            
            expect( age ).toBe( calculateAge );

          });

          test('getAge should return 0 years', () => { 

            const spy = jest.spyOn( Date.prototype, 'getFullYear' ).mockReturnValue(1996);
            const birthdate = '1996-05-18';
            const age = getAge(birthdate);

            expect( age ).toBe(0);
            expect( spy ).toHaveBeenCalled();


           });
     })