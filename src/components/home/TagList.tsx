import styled from 'styled-components';
import { Medias } from '../../styles/Media';
import Container from '../layouts/Container';
import TagItem from './TagItem';
// --------------- function ---------------
export default function TagList() {
  return (
    <Container>
      <TagList_ul>
        <TagItem name='next' href='/images/tagIcon/nextjs.svg' />
        <TagItem name='react' href='/images/tagIcon/react.svg' />
        <TagItem name='typescript' href='/images/tagIcon/typescript.svg' />
      </TagList_ul>
    </Container>
  );
}
// --------------- Styled ---------------
const TagList_ul = styled.ul`
  width: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  padding-top: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-top: 2px solid var(--primary);
`;
