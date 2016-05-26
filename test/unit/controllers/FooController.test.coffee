describe 'FooController', ->
  res = null
  set = null
  id = "test"

  #beforeEach ->

  #afterEach ->

  describe "#show", ->
    beforeEach (done) ->
      server.inject { method: "GET", url: "/#{id}/foo" }
      res = response
      done()

    it "should be 200", (done) ->
      expect(res.statusCode).to.equal(200)
      done()
