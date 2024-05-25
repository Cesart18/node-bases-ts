

    describe('App', () => { 

        test('should be 30', () => {
        
            // 1. Arrange
            const num1 = 10;
            const num2 = 20;

            // 2. Act
            const result = num1 + num2;

            // 3. Assert
            expect(result).toBe(30);

            /* 
            el expect vendria a ser igual que 
            if( result === 30 ){

            }else{
                throw new Error('Result must be equal 30')
            }
            */
            
        })

     });