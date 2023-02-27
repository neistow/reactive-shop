import styled from 'styled-components';

type AppBtnProps = { variant: 'primary' | 'accent' };

const AppBtn = styled.button`
  background-color: ${(props: AppBtnProps) =>
          props.variant === 'primary' ? '#007bff' : '#ccc'};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

export default AppBtn;