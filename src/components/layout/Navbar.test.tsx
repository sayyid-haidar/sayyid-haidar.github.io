import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar mobile dialog', () => {
  it('opens modally, focuses its close action, and handles native cancellation', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const dialog = screen.getByRole('dialog', { name: 'Sayyid Haidar' })
    const closeButton = screen.getByRole('button', { name: 'Close menu' })
    expect(dialog).toHaveAttribute('open')
    expect(closeButton).toHaveFocus()

    fireEvent(dialog, new Event('cancel', { cancelable: true }))

    await waitFor(() => expect(dialog).not.toHaveAttribute('open'))
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveFocus()
  })
})
