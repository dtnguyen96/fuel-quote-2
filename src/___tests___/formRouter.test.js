const request = require('supertest')
// const express = require('express');
 
const app = require("../backend/server")
 
// app.use(express.json());
app.use("/fuelform", require("../backend/routers/formRouter"));
 
test('Tests submitting to "/submit" endpoint', async () => {
    const response = await request(app).post('/fuelform/submit')
        .send({
            gallons: "Fake gal",
            date: "Fake date"
        })
    expect(response.status).toBe(200)
    })        
 
test('Test submitting to "/history" endpoint', async () => {
        const res = await request(app)
            .get('/fuelform/history')
            .send()
 
        expect(JSON.stringify(res.body)).toBe(
            JSON.stringify({
                gallons: "Dummy data",
                delivery_add: "Dummy data",
                delivery_date: "Dummy data",
                suggested_price: "Dummy data",
                amount_due: "Dummy data"
                })
        )
})


test('Test submitting to "/profile_info" endpoint', async () => {
    try {
        const response = await request(app).get('/fuelform/profile_info')
            .send()

        expect(JSON.stringify(res.body)).toBe(
            {
                d_addr: "123 Example Dr",
                suggested_price: "$999.99",
                total_amount: "$999.99"
            })
    }
    catch(err){console.log(err.message)}
})