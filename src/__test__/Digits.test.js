import toFixed from '../components/digits/Digits';
import {checkEmail} from "../pages/register/Register";

test('The check fixed number without decimal point', () => {
    const test = toFixed(20.55);
    expect(test).toBe("21");
});

test('The email check must be true if the email is valid', () => {
    const emailCheck = "intoyou@gmail.com"
    const emailResult = checkEmail(emailCheck);
    expect(emailResult).toBe(true);
})

test('The check returns a feedback message when the email is not valid', () => {
    const emailCheck = "intoyou"
    const emailResult = checkEmail(emailCheck);
    expect(emailResult).toBe('Your email must contain an @.');
})
