const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

const db = {
  saveUser: expect.createSpy()
}

app.__set__('db',db);//overwrite the db constant in app.js with a spy

describe('App',()=>{
  it('should call the spy correctly',()=>{
    let spy = expect.createSpy();
    spy('Andrew');
    expect(spy).toHaveBeenCalledWith('Andrew');
  })

  it('should call handleSignup correctly', ()=>{
    app.handleSignup( 'alvin@1.com', '123123');//calling here is calling the spy
    expect(db.saveUser)//expect the spy to be called with certain values
    .toHaveBeenCalledWith({email: 'alvin@1.com', password: '123123'});
  })

})
