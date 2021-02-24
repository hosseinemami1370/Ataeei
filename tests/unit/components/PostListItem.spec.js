import PostListItem from '../../../src/components/PostListItem'
import { fireEvent, render } from '@testing-library/vue'

function getPostTitle () {
  return document.getElementsByTagName('h2')[0]
}

function getPostLink () {
  return document.getElementsByTagName('a')[0]
}

it('render a given title', async () => {
  const { updateProps } = render(PostListItem, {
    props: {
      title: 'hello world!'
    }
  })

  expect(getPostTitle())
    .toHaveTextContent('hello world!')

  await updateProps({
    title: 'hello world agin!'
  })

  expect(getPostTitle())
    .toHaveTextContent('hello world agin!')
})

test('renders the site link', async () => {
  const { updateProps } = render(PostListItem, {
    props: {
      link: 'google.com'
    }
  })

  expect(getPostLink())
    .toHaveAttribute('href', 'google.com')

  await updateProps({
    link: 'facebook.com'
  })

  expect(getPostLink())
    .toHaveAttribute('href', 'facebook.com')
});

test('user can hide item', async () => {
  const { getByText, container } = render(PostListItem, {
    props: {
      title: 'Google',
      link: 'google.com'
    }
  })

  expect(container)
    .toContainHTML('<h2>Google</h2>')

  await fireEvent.click(getByText('Hide'))

  expect(container)
    .not.toContainHTML('<h2>Google</h2>')
});
