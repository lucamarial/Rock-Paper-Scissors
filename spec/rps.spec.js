require('../spec.helper')

describe('Rock-Paper-Scissor Game', () => {
    // let rps = new RockPaperScissors

    describe('smoke tests', () => {
        it('should exist', () => {
            expect(RockPaperScissors).to.exist;
        })

        it('should be a function', () => {
            expect(RockPaperScissors).to.be.a('function');
        })
    })

    // it('randomly assigns computer selection', () => {
    //     let choice = ['rock', 'paper', 'scissors']
    //     expect(computerChoice()).to.eql(choice)
    // })
  
    // it('should return tie', () => {
    //     expect(RockPaperScissors('paper')).to.eql('tie')
    // })
    
    // it('should return rock wins', () => {
    //     expect(RockPaperScissors('rock', 'scissor')).to.eql('rock beats scissor! You win!')
    // })
})