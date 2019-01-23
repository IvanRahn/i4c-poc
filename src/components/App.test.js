import React from 'react';
import App from './App';
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new EnzymeAdapter()})

it('renders without crashing', () => {
  shallow(<App />);
  
});




