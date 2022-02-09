import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

describe('UTILS', () => {
  it('getFullYear -> should behave get actual year', () => {
    const actualYear = new Date().getFullYear();
    expect(getFullYear()).toBe(actualYear);
  });
  it('getFooterCopy(true) -> should behave Holberton School', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });
  it('getFooterCopy(false) -> should behave Holberton School main dashboard', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
  it('getLatestNotification -> should behave Urgent requirement - complete by EOD', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
})