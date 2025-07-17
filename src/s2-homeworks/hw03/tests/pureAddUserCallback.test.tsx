import {pureAddUserCallback, UserType} from '../HW3';

let initialState:  UserType[];
// const setName = (a: UserType[]) => {
//     initialState = a }
//  as React.Dispatch<React.SetStateAction<UserType[]>>;

const setName: React.Dispatch<React.SetStateAction<UserType[]>> = (a) => {
    initialState = typeof a === 'function' ? a(initialState) : a;
};

test.skip('name 1', () => {
    pureAddUserCallback('name', setName, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
