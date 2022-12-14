import { Content } from './content';

describe('Notification Content', () => {
  it('should be to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be to create a notification content with less 5 characters', () => {
    expect(() => new Content('111')).toThrow();
  });

  it('should not be to create a notification content with more than 240 characters', () => {
    expect(() => new Content('r'.repeat(241))).toThrow();
  });
});
