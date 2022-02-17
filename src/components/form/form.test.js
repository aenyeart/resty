import { render } from 'node-sass';
import Form from './index.js';

describe('Testing the form', () => {

  const callback = jest.fn();
  
  render(<Form handleSubmit={callback}/>)

  it('should....', () => {

  })


})