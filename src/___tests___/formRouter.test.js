const request = require('supertest')
const express = require('express');
 
const app = express();
 
app.use(express.json());
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
