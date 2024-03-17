import styled from 'styled-components';

interface ISpanProps {
  color: string;
}

export const StyledSpan = styled.span<ISpanProps>`
  color: ${(props) => props.color || '#000'};
`;

export const BoxSpan = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
`;
