import toFixed from '../helpers/Digits';
import {checkEmail} from '../pages/register/Register';
import Button from '../components/button/Button';
import {render, screen} from '@testing-library/react';

test('The check gives a fixed number without a decimal point', () => {
    const test = toFixed(20.55);
    expect(test).toBe('21');
});

test('The email check must be true if the email is valid', () => {
    const emailCheck = 'intoyou@gmail.com'
    const emailResult = checkEmail(emailCheck);
    expect(emailResult).toBe(true);
});

test('The check returns a feedback message when the email is not valid', () => {
    const emailCheck = 'intoyou'
    const emailResult = checkEmail(emailCheck);
    expect(emailResult).toBe('Your email must contain an @.');
});

test('The check should render the Button component', () => {
    render(<Button/>)
    const input = screen.getByTestId('testButton')
    expect(input).toBeInTheDocument()
});
