import { buildLogger, logger, logger as winstonLogger } from '../../src/plugins/logger.plugin';

    describe('plugins/logger.plugin.ts', () => { 

        test('buildLogger should return a function logger', () => { 

            const logger = buildLogger('test');

            expect( typeof logger.log ).toBe('function');
            expect( typeof logger.error ).toBe('function');
            
         });

         test('logger.log shoud log a message', () => { 

            const winsonLoggerMock = jest.spyOn(winstonLogger, 'log');
            const message = 'test message';
            const service = 'test service';

            const logger = buildLogger(service);
            
            logger.log(message);

            expect( winsonLoggerMock ).toHaveBeenCalledWith(
                'info',
                // !este vendria a ser una forma de indicar que quiero que el objeto como minimo tenga esa informacion.
                expect.objectContaining({
                    "level": "info",
                    message,
                    service
                })
                
            );


          });

     });