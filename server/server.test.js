const request = require('supertest');
const expect = require('expect');
const app = require('./server');

describe("Server",()=>{
  describe("# GET /",()=>{
    it('should return hello world response', (done)=>{
      // request(app)
      // .get('/')
      // .expect('Hello World!')
      // .end(done);

      request(app)
      .get('/')
      .expect(404)
      .expect((res)=>{
        expect(res.body).toInclude({//this expect is from expect package
          error:'Page not found'
        })
      })
      .end(done);

    })
  })

  describe("# GET /users",()=>{
    //assert 200
    //assert that your name and age exist in users array
    it('should return my name and age included', (done)=>{

      request(app)
      .get('/users')
      .expect(200)
      .expect((res)=>{
        expect(res.body).toInclude({
          name: 'alvin',
          age: 15
        })
      })
      .end(done);
    })
  })
})
