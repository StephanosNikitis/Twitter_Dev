import dummyService from "../../src/services/dummy-service.js";

test('result is true and return Learning JS', () => {
    //IMPLEMENTATION OF TEST
    const spy = jest.spyOn(dummyService, 'helper').mockImplementation(() => {
        return true
    })
    const result = dummyService.execute()
    expect(result).toBe('Learning JS')
})

test('result is false and return Learning ReactJS', () => {
    //IMPLEMENTATION OF TEST
    const spy = jest.spyOn(dummyService, 'helper').mockImplementation(() => {
        return false
    })
    const result = dummyService.execute()
    expect(result).toBe('Learning ReactJS')
})