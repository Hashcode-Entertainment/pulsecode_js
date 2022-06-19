import styled from 'styled-components';

const StyledPulseButton = styled.div`
  background: #1fb43f;
  border-radius: 23.8816px;
  width: 132px;
  height: 47.76px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24.0941px;
  line-height: 29px;
  cursor: pointer;
`;

export function PulseButton(props) {
  return (
    <StyledPulseButton onClick={props.onClick}>{props.text}</StyledPulseButton>
  );
}

export default PulseButton;
