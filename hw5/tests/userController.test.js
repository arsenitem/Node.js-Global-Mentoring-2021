import userService from "../services/userService";

describe("user controller methods", () => {
    test("find by id returns null", async () => {
        // userService.findById = jest.fn().mockResolvedValue(result)
        const data = await userService.findById();
        expect(data).toBe(null);
    });
    test("find by id", async () => {
        const result = {
            login: "user",
            age: 22,
            isdeleted: false,
            id: 0
        }
        userService.findById = jest.fn().mockResolvedValueOnce(result)
        const data = await userService.findById(0);
        expect(data).toBe(result);
    });
    test("find all ", async () => {
        const result = [
            {}
        ]
        userService.findAll = jest.fn().mockResolvedValueOnce(result)
        const data = await userService.findAll('login', 1);
        expect(data).toHaveLength(1);
    });
    test("deleteById", async () => {
        const result = {
            login: "user",
            age: 22,
            isdeleted: true,
            id: 0
        }
        userService.deleteById = jest.fn().mockResolvedValueOnce(result)
        const data = await userService.deleteById(0);
        expect(data.isdeleted).toBe(true);
    });
    test("deleteById returns null", async () => {
        userService.deleteById = jest.fn().mockResolvedValueOnce(null)
        const data = await userService.deleteById();
        expect(data).toBe(null);
    });
    test("addUser", async () => {
        const result = {
            login: "user",
            age: 22,
            isdeleted: false,
            id: 0
        }
        userService.addUser = jest.fn().mockResolvedValueOnce(result)
        const data = await userService.addUser(result);
        expect(data).toBe(result);
    });
    test("updateUser", async () => {
        const result = {
            login: "user updated",
            age: 22,
            isdeleted: false,
            id: 0
        }
        userService.updateUser = jest.fn().mockResolvedValueOnce(result)
        const data = await userService.updateUser(0,  "user updated", "pass", "age");
        expect(data).toBe(result);
    });
  });