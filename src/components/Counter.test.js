import {fireEvent, render,screen} from '@testing-library/react';
import Counter from './Counter';

test('should display the heading', () => { 
    render(<Counter/>);
    const header = screen.getByText("My Counter")
    expect(header).toBeVisible();
})

test('should have initial value 0 before user enters', () => { 
    render(<Counter/>);
    const value = screen.queryByText('0')
    expect(value).toBeVisible();
})

test('should have value 1 if the user enters 1', () => { 
    render(<Counter initialValue={1}/>);
    const one = screen.queryByText('1');
    expect(one).toBeVisible();
})

test('should have value 2 after clicking add button', () => { 
    render(<Counter initialValue={1}/>);
    const addBtn = screen.queryByText("Add")
    fireEvent.click(addBtn);
    const two = screen.queryByText('2');
    expect(two).toBeVisible();
})

test('should have value 5 after clicking add button twice', () => { 
    render(<Counter initialValue={3}/>);
    const addBtn = screen.queryByText("Add")
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    const five = screen.queryByText('5');
    expect(five).toBeVisible();
})

test('should have value 1 after clicking sub button', () => { 
    render(<Counter initialValue={2}/>);
    const subBtn = screen.queryByText("Sub")
    fireEvent.click(subBtn);
    const one = screen.queryByText('1');
    expect(one).toBeVisible();
})

