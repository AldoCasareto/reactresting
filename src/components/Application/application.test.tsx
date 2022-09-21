import { Application } from './Application';
import { render, screen } from '@testing-library/react';

describe('Application', () => {
  it('renders correctly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const secondaryHeading = screen.getByRole('heading', {
      level: 2,
    });
    expect(secondaryHeading).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    });

    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input',
    });
    expect(nameElement2).toBeInTheDocument();

    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(bioElement).toBeInTheDocument();

    const dropdownElement = screen.getByRole('combobox');
    expect(dropdownElement).toBeInTheDocument();

    const termElement = screen.getByRole('checkbox');
    expect(termElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions'
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
  });
});
