require('../spec.helper');

describe('User can make a choice between Rock, Paper or Scissors', () => {
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  beforeEach(async () => {
    await browser.page.reload();
  });

  after(() => {
    browser.close();
  });

  it('renders the Rock button', async () => {
    let button = await browser.getContent("[Id='r']")
    expect(button).to.eql('Rock');
  });

  it('renders the Paper button', async () => {
    let button = await browser.getContent("[Id='p']")
    expect(button).to.eql('Paper');
  });

  it('renders the Scissors button', async () => {
    let button = await browser.getContent("[Id='s']")
    expect(button).to.eql('Scissors');
  });

  it('shows a result', async () => {
    await browser.clickOnButton("button[Id='p']")
    let content = await browser.getContent("[class='result']")
    let choices = ['The result is a tie!', 'paper beats rock. You win!', 'scissors beats paper. You lose!']
    expect(choices).to.include(content)
  })
});