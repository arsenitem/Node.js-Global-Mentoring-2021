import groupService from "../services/groupService";

describe("group controller methods", () => {
    test("find group by id returns null", async () => {
        const data = await groupService.findById();
        expect(data).toBe(null);
    });
    test("find by id", async () => {
        const result = {
            id: 0,
            name: "read_group",
            permissions: [
                "READ"
            ]
        }
        groupService.findById = jest.fn().mockResolvedValueOnce(result)
        const data = await groupService.findById(0);
        expect(data).toBe(result);
    });
    test("find all ", async () => {
        const result = [
            {}
        ]
        groupService.findAll = jest.fn().mockResolvedValueOnce(result)
        const data = await groupService.findAll('login', 1);
        expect(data).toHaveLength(1);
    });
    test("deleteById", async () => {
        const result = {
            id: 0,
            name: "read_group",
            permissions: [
                "READ"
            ]
        }
        groupService.deleteById = jest.fn().mockResolvedValueOnce(result)
        const data = await groupService.deleteById(0);
        expect(data).toBe(result);
    });
    test("deleteById returns null", async () => {
        groupService.deleteById = jest.fn().mockResolvedValueOnce(null)
        const data = await groupService.deleteById();
        expect(data).toBe(null);
    });
    test("addGroup", async () => {
        const result = {
            id: 0,
            name: "read_group",
            permissions: [
                "READ"
            ]
        }
        groupService.addGroup = jest.fn().mockResolvedValueOnce(result)
        const data = await groupService.addGroup(result);
        expect(data).toBe(result);
    });
    test("updateGroup", async () => {
        const result = {
            id: 0,
            name: "read_group",
            permissions: [
                "READ"
            ]
        }
        groupService.updateGroup = jest.fn().mockResolvedValueOnce(result)
        const data = await groupService.updateGroup(0,  "read_group", ["READ"]);
        expect(data).toBe(result);
    });
    test("addUsersToGroup true", async () => {
        groupService.addUsersToGroup = jest.fn().mockResolvedValueOnce(true)
        const data = await groupService.addUsersToGroup(0,  [0, 1]);
        expect(data).toBe(true);
    });
  });