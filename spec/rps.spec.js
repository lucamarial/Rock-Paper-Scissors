require('../spec.helper')

describe('Rock-Paper-Scissor Game', () => {

    describe('smoke tests', () => {
        it('should exist', () => {
            expect(RockPaperScissors).to.exist;
        })

        it('should be a function', () => {
            expect(RockPaperScissors).to.be.a('function');
        })
    })
})