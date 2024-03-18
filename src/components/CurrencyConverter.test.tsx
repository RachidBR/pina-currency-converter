
jest.mock("../libs/axios", () => ({
  __esModule: true, 
  default: {
    get: jest.fn(() => Promise.resolve({ data: { conversion_result: 100 } })),
  },
}));


import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrencyConverter from './CurrencyConverter'; 

describe('CurrencyConverter Component', () => {
  it('renders the currency conversion form elements', () => {
    render(<CurrencyConverter />);
    
    expect(screen.getByLabelText(/Currency From:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Currency To:/)).toBeInTheDocument();
   
  });

});