import PostListItem from '../../../components/PostListItem'
import { render } from '@testing-library/vue'

it('render a given title', () => {
  render(PostListItem, {
    props: {title: 'hello world!'}
  })

  expect(document.getElementByTagName('h2'))
    .toHaveTextContent('hello world!') 
});