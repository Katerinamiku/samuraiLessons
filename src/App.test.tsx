import { render, screen } from '@testing-library/react';
import App from './App';
import {addMessage, addPost, state} from "./Redux/State";

test('renders learn react link', () => {
  render(<App  state={state} addPost={addPost} addMessage={addMessage}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

