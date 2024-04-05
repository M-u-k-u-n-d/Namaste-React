import {render,screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", ()=>{
    render(<RestaurantCard valu = {MOCK_DATA}/>);
    console.log(MOCK_DATA)

    const name = screen.getByText("The Belgian Waffle Co.");
    expect(name).toBeInTheDocument();
}) 