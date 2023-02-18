const request = require("supertest")("https://dummyjson.com")
const expect = require("chai").expect;

describe("POST Product DUMMYJSON", function(){
    it("Success Add New Product", async function(){
        const response = await request
            .post("/products/add")
            .send({title: "iPhone 14 Pro Max"});

        expect(response.body.title).to.eql('iPhone 14 Pro Max')
    })
})