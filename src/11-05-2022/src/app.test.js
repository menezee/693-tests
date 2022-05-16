import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

describe('Testing pokemon search', () => {
  beforeEach(() => {
    render(<App/>);
  });
  
  it('Should match snapshot', () => {
    const container = render(<App/>);
    expect(container).toMatchSnapshot();
  });
  
  it('Should render', () => {
    expect(screen.queryByLabelText('Insira um id')).toBeInTheDocument();
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });
  
  it('Should submit and render charizard', async () => {
    fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({ name: 'charizard' }) }),
    );
    
    await userEvent.type(screen.queryByLabelText('Insira um id'), '6');
    await userEvent.click(screen.queryByRole('button'));
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/6');
      expect(screen.queryByText('charizard')).toBeInTheDocument();
    });
  });
  
  it('Check for invalid ID', async () => {
    fetch = jest.fn(() => Promise.reject());
    
    await userEvent.click(screen.queryByRole('button'));
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(
        screen.getByText('Id inválido, digite novamente!'),
      ).toBeInTheDocument();
    });
  });
});
