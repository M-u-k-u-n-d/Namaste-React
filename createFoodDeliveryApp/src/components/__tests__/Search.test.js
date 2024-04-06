import Body from "../Body";
import {fireEvent, render,screen} from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should render the body Component with Search",async ()=>{
    await act(()=> render(<BrowserRouter><Body/></BrowserRouter>));

    const searchButton = screen.getByRole("button", {name:"Search"});

    const searchInput = screen.getByTestId("searchInput");
    // console.log(searchInput);

    fireEvent.change(searchInput, {target : {value : "burger"}});
    fireEvent.click(searchButton);

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(2);
});