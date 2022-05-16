import { render, screen, fireEvent } from '@testing-library/react';
import Groceries from 'pages/groceries';

describe('<Groceries />', () => {
  test('renders empty list', () => {
    render(<Groceries/>);
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
  });

  test('add new item', () => {
    render(<Groceries/>);
    const button = screen.getByText('Add item');
    fireEvent.click(button);

    expect(screen.queryAllByRole('listitem')).toHaveLength(1);
    expect(screen.queryAllByRole('textbox')).toHaveLength(1);
  });

  test('delete item', () => {
    render(<Groceries/>);
    Date.prototype.toISOString =
      jest
        .fn()
        .mockImplementationOnce(() => 1)
        .mockImplementationOnce(() => 2)
        .mockImplementationOnce(() => 3);

    const button = screen.getByText('Add item');
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.queryAllByRole('listitem')).toHaveLength(3);

    const buttonsList = screen.queryAllByText('Delete');
    expect(buttonsList).toHaveLength(3);

    fireEvent.click(buttonsList[0]);
    expect(screen.queryAllByRole('listitem')).toHaveLength(2);
  });
});
