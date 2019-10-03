require('../spec.helper')
// const mockMath = Object.create(global.Math);
// mockMath.random = () => .5; 
// global.Math = mockMath;

describe('Rock-Paper-Scissor Game', () => {

    describe('smoke tests', () => {
        it('should exist', () => {
            expect(RockPaperScissors).to.exist;
        })

        it('should be a function', () => {
            expect(RockPaperScissors).to.be.a('function');
        })
    })

    it('randomly assigns computer selection', () => {
        let comp = computerChoice()
        let choice = ['rock', 'paper', 'scissors']
        expect(choice).to.include(comp)
    })
  
    // it('should return tie', () => {
    //     expect(RockPaperScissors('paper')).to.eql('tie')
    // })
    
    // it('should return rock wins', () => {
    //     expect(RockPaperScissors('paper')).to.eql()
    // })
})