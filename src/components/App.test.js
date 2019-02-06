import React from 'react';
import App from './App';
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import ReactDOM  from 'react-dom';
import HomePage from "./pages/HomePage/HomePage"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./../store"
import {render} from "react-testing-library"
Enzyme.configure({adapter: new EnzymeAdapter()})
it('renders without crashing', async () => {
  const {container} = render(<Provider store={store}>
                        <BrowserRouter>
                          <HomePage />
                        </BrowserRouter>
                        </Provider>);
  console.log(container.querySelectorAll('section'))
  expect(container.querySelectorAll('section').length).toEqual(1)
  
});




