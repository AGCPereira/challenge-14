const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2022-10-07 12:16:03');
    expect(format_date(date)).toBe('10/07/2022');
});