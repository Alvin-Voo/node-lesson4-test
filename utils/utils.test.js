const utils = require('./utils');
const expect = require('expect');

describe("Utils", ()=>{
  describe("#add", ()=>{
    it('should add two numbers',()=>{
      let res = utils.add(33,11);

      // if(res != 44) throw new Error(`Expected 44 but got ${res}`);
      expect(res).toBe(44).toBeA('number');
    })

    it('should async add two numbers',(done)=>{
      //done function is passed to tell mocha
      //to only finish when done is called
      utils.asyncAdd(3,4,(sum)=>{
        expect(sum).toBe(7).toBeA('number');
        done();
      })
    })
  })

  describe("#square", ()=>{
    it('should square a number',()=>{
      let res = utils.square(2);

      // if(res != 4) throw new Error(`Expected 4 but got ${res}`);
      expect(res).toBe(4).toBeA('number');
    })

    it('should async square a number',(done)=>{
      utils.asyncSquare(4,(sum)=>{
        expect(sum).toBe(16).toBeA('number');
        done();
      })
    })
  })

  it('should verify first and last names are set',()=>{
    let user = {
      age: 25,
      location: 'philly'
    }

    user = utils.setName(user, 'alvin voo');

    expect(user).toInclude({
      firstName: 'alvin',
      lastName: 'voo',
    }).toBeA('object');
  })

})
