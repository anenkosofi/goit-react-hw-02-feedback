import { ButtonContainer, Button } from './FeedbackOptions.styled';

export function FeedbackOptions({
  options: [good, neutral, bad],
  onLeaveFeedback,
}) {
  return (
    <ButtonContainer>
      <Button type="button" onClick={() => onLeaveFeedback(good)}>
        Good
      </Button>
      <Button type="button" onClick={() => onLeaveFeedback(neutral)}>
        Neutral
      </Button>
      <Button type="button" onClick={() => onLeaveFeedback(bad)}>
        Bad
      </Button>
    </ButtonContainer>
  );
}
