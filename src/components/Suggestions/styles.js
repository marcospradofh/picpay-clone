import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    alignItems: 'center',
  }
}))`
  background: #1e222b;
  height: 130px;
`;