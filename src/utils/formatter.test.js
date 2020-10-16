import * as formatter from './formatter';

describe('formatter tests', () => {
  test('should return empty array when calling `parseResults` with empty array', () => {
    expect(formatter.parseResults([])).toStrictEqual([]);
  });

  test('should formatted array when calling `parseResults`', () => {
    const raw = [
      {title: 'some title', link: 'some link', snippet: 'some description'},
      {name: 'some name', url: 'some link', snippet: 'some description'}
    ];
    const expected = [
      {title: 'some title', link: 'some link', description: 'some description'},
      {title: 'some name', link: 'some link', description: 'some description'}
    ];
    expect(formatter.parseResults(raw)).toStrictEqual(expected);
  });
});