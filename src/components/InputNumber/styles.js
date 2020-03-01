import styled from "styled-components";

export const Container = styled.input`
  background: "#fff";
  color: #000;
  border: 1px solid #999;
  border-radius: 3px;
  padding: 8px 5px;
  outline: none;
  :focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
