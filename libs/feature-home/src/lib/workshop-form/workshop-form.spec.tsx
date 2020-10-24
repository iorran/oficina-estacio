import React from 'react';
import { render } from '@testing-library/react';

import WorkshopForm from './workshop-form';

describe('WorkshopForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkshopForm />);
    expect(baseElement).toBeTruthy();
  });
});
