import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: #f6f4ef;
  color: #3d3d3d;
  display: flex;
  flex-direction: column;

  .footer {
    margin-top: 4rem;
  }
`;

export const Container = styled.main`
  flex: 1;
  width: min(720px, 100%);
  margin: 0 auto;
  padding: 8.8rem 2.4rem 4rem;
`;

export const TopBar = styled.header`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 999px;
    color: #2f2f2f;
    font-size: 2.4rem;
    line-height: 1;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.06);
    }
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 500;
    color: #2f2f2f;
  }
`;

export const Updated = styled.p`
  font-size: 1.4rem;
  color: #8a8a8a;
  margin-bottom: 1.6rem;
`;

export const Card = styled.section`
  background: #ffffff;
  border-radius: 2rem;
  padding: 0.4rem 2.4rem;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02);
`;

export const Block = styled.article`
  padding: 2.2rem 0;

  & + & {
    border-top: 1px solid #eceae6;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #2f2f2f;
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.55;
    color: #4a4a4a;
    letter-spacing: 0;
  }
`;
