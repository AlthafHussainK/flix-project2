import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Home } from '../../pages'

jest.mock('react-router-dom')

describe('Homepage', () => {
  it('description', () => {
    const { getByText, getByTestId } = render(<Home />)
  })
})