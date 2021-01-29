import { getActiveUser, getUser } from "../../base/functions"

describe('test in functions file', () => {
    test('getUser method should return a userTest Object', () => {
        const userTest = {
            uuid: 'ABC123',
            userName: 'Sandra M'
        };
        const user = getUser();
        expect(user).toEqual(userTest);
    })    
    test('getActiveUser method should return a activeUserTest Object', () => {
        const name = 'Marcela'
        const activeUserTest = {
            uuid: 'ABC123',
            userName: name
        };
        const activeUser = getActiveUser(name);
        expect(activeUser).toEqual(activeUserTest)

    })    
})
