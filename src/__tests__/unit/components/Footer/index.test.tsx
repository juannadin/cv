import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../../../components/Footer/index';
import { Footer as FooterProps, PersonalInfoType } from '../../../../data';

const footerProps: FooterProps = {
  links: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/juanignaciogonzalez',
    },
    {
      name: 'Github',
      url: 'https://github.com/juannadin',
    },
  ],
};

describe('Footer', () => {
  test('render all components', () => {
    const { container } = render(<Footer {...footerProps}/>);
    expect(container).toMatchSnapshot();
  });
})

