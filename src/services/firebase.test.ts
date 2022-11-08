import { mockFirebase } from "firestore-jest-mock";
import { mockCollection, mockDoc } from "firestore-jest-mock/mocks/firestore";

// It contains all the network calls, getQuiz, getCategories, getUsers, getUserWIthId, getCategory
describe("Testing all services", () => {
  mockFirebase({
    database: {
      users: [
        {
          id: "abc123",
          uid: "abc123",
          name: "Homer Simpson",
          quizzesTaken: [],
          totalScore: 0,
          email: "hello@xyz.com",
        },
        {
          id: "abc456",
          uid: "abc456",
          name: "Lisa Simpson",
          quizzesTaken: [],
          totalScore: 0,
          email: "hello@xy1z.com",
        },
      ],
      quizcategories: [
        {
          _id: "1",
          id: "1",
          categoryName: "Muffins",
          desription: "Muffins are tasty",
        },
        {
          _id: "2",
          id: "2",
          categoryName: "Cakes",
          desription: "Cakes are delicious",
        },
      ],
      quizzes: [
        {
          _id: "1",
          id: "1",
          categoryName: "Cakes",
          questions: [
            {
              statement: "Question 1",
              options: ["a", "b", "c", "d"],
            },
          ],
          answers: ["a"],
        },
      ],
    },
  });

  test("Get All Users", () => {
    const firebase = require("firebase");
    const db = firebase.firestore();

    return db
      .collection("users")
      .get()
      .then(() => {
        // Assert to get the collection of users
        expect(mockCollection).toHaveBeenNthCalledWith(1, "users");
      });
  });
  test("Get One User", () => {
    const firebase = require("firebase");
    const db = firebase.firestore();

    return db
      .collection("users")
      .doc("abc456")
      .get()
      .then(() => {
        // Assert that a collection or document ID was referenced for users database
        expect(mockCollection).toHaveBeenNthCalledWith(1, "users");
        expect(mockDoc).toHaveBeenCalledWith("abc456");
      });
  });

  test("Get All Categories", () => {
    const firebase = require("firebase");
    const db = firebase.firestore();

    return db
      .collection("categories")
      .get()
      .then(() => {
        // Assert to get the collection of categories
        expect(mockCollection).toHaveBeenNthCalledWith(1, "categories");
      });
  });
  test("Get One Category", () => {
    const firebase = require("firebase");
    const db = firebase.firestore();

    return db
      .collection("categories")
      .doc("1")
      .get()
      .then(() => {
        // Assert that a collection or document ID was referenced for categories database
        expect(mockCollection).toHaveBeenNthCalledWith(1, "categories");
        expect(mockDoc).toHaveBeenCalledWith("1");
      });
  });

  test("Get One Quiz", () => {
    const firebase = require("firebase");
    const db = firebase.firestore();

    return db
      .collection("quizzes")
      .doc("1")
      .get()
      .then(() => {
        // Assert that a collection or document ID was referenced for quizzes database
        expect(mockCollection).toHaveBeenNthCalledWith(1, "quizzes");
        expect(mockDoc).toHaveBeenCalledWith("1");
      });
  });
});
