import React from "react";
//render to render app,fireEvenet to make event in input for example i can use screen to get some properties
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Login from "../Login";


import { Provider } from "react-redux"
import store from "../../../redux/store"
import { BrowserRouter } from 'react-router-dom';


// App wraper because in login component i use useSelector from redux and useHistory from router so i wrapp the components
const AppWrapper = ({ children }) => (
    <BrowserRouter>
        <Provider store={store}>
            {children}
        </Provider>
    </BrowserRouter>
);


//hint i can use act in this version to use async await for test callback function

// describe first argument to understant what i do in all this test,second argument CallBack Function
describe("Login describe statment", () => {

    //1 test
    test("check if placeholder correct", () => {
        const components = render(<Login />, { wrapper: AppWrapper },)// render component
        const usernameHolder = components.getByPlaceholderText('please Enter Username!')//access
        expect(usernameHolder).toBeInTheDocument();//expect to implement test (if the same place holder)
    });

    //test 2
    test("check name attribute username", () => {
        const components = render(<Login />, { wrapper: AppWrapper },)
        // i am using placeholder to check the attribute because i do not have a label to getBylabel
        const name = components.getByPlaceholderText('please Enter Username!')
        expect(name.getAttribute("name")).toBe('username');// check if it is same
    });


    //test 3
    test("check name should be a text", () => {
        const { getByPlaceholderText } = render(<Login />, { wrapper: AppWrapper })
        const nameInput = getByPlaceholderText('please Enter Username!');
        expect(nameInput.value).toMatch('') //her to match the value
        fireEvent.change(nameInput, { target: { value: 'testing' } })// make action with pass a value
        expect(nameInput.value).toMatch('testing');// check if passed
    });


    //4
    test("should be able to submit form ", () => {
        const mockFn = jest.fn() //mckFn for function
        const { getByRole } = render(<Login />, { wrapper: AppWrapper });
        const buttonNode = getByRole("button");//acces button
        fireEvent.submit(buttonNode); //action the buton
        //  expect(mockFn).toBeCalledTimes(1)   implement if submit 1 time so it is passed
    });
})
