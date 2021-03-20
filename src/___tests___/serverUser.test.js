const request = require('supertest');
const userRouter = require("../backend/routers/userRouter");
const express = require("express");

const app = require("../backend/server");

/*
test("POST /auth/", async () => {
    const newUser = {
        email: "newtest@gmail.com",
        password: "password",
        passwordVerify: "password"
  
    };
  
    await request(app).post("/auth/")
      .send(newUser)
      .expect(200)
      .then((res) => {
        // Check the response
        expect(res.body.email).toBe(newUser.email);
        expect(res.body.password).toBe(newUser.password);
        expect(res.body.passwordVerify).toBe(newUser.passwordVerify);
      });
  });
  */

test('GET /auth/loggedIn', async done => {
    const response = await request(app).get('/auth/loggedIn');
    expect(response.status).toBe(200);
    expect(response).toBeFalsy;
    done()
})

test('GET /auth/logout', async done => {
    const response = await request(app).get('/auth/logout');
    expect(response.status).toBe(200);
    done()
})

test('POST /auth/login', async done => {
    const existingUser = { email: "test@gmail.com", password: "password" }
    const response = await request(app).post('/auth/login').send(existingUser);
    expect(response.status).toBe(500);
    done()
})

test('POST /auth/login wrong credentials', async done => {
    const existingUser = { email: "t2est@gmail.com", password: "password" }
    const response = await request(app).post('/auth/login').send(existingUser);
    expect(response.status).toBe(401);
    done()
})
test('POST /auth/login wrong password', async done => {
    const existingUser = { email: "test@gmail.com", password: "passwossrd" }
    const response = await request(app).post('/auth/login').send(existingUser);
    expect(response.status).toBe(401);
    done()
})
test("POST /auth/", async done => {
    const newUser = {
        email: "newtest@gmail.com",
        password: "password",
        passwordVerify: "password"

    };

    const response = await request(app).post('/auth/').send(newUser);
    expect(response.status).toBe(200);
    done()
});
test("POST /auth/ too short password", async done => {
    const newUserWrong = {
        email: "wrong@gmail.com",
        password: "pas",
        passwordVerify: "pas"
    };
    const response = await request(app).post('/auth/').send(newUserWrong);
    expect(response.status).toBe(400);
    done()
});
test("POST /auth/ unmatched password", async done => {
    const newUserWrong = {
        email: "wrong@gmail.com",
        password: "password",
        passwordVerify: "notpassword"
    };
    const response = await request(app).post('/auth/').send(newUserWrong);
    expect(response.status).toBe(400);
    done()
});

test("POST /auth/ missing info", async done => {
    const newUserWrong = {
        email: "wrong@gmail.com",
        password: "password",
    };
    const response = await request(app).post('/auth/').send(newUserWrong);
    expect(response.status).toBe(400);
    done()
});

test("POST /auth/ existing user", async done => {
    const newUserWrong = {
        email: "test@gmail.com",
        password: "password",
        passwordVerify: "password"
    };
    const response = await request(app).post('/auth/').send(newUserWrong);
    expect(response.status).toBe(400);
    done()
});