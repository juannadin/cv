import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../../../components/Header/index';
import { Header as HeaderProps, PersonalInfoType } from '../../../../data';

const headerProps: HeaderProps = {
  title: 'this is a title',
  subtitle: 'this is a subtitle',
  about: 'lorem ipsum about content',
  motto: 'this is my motto',
  personalInfo: [
    {
      type: PersonalInfoType.ADDRESS,
      value: 'Martinez, Buenos Aires, ARG',
    },
    {
      type: PersonalInfoType.EMAIL,
      value: 'juan.ignacio.nadin@gmail.com',
    },
    {
      type: PersonalInfoType.CELLPHONE,
      value: '+54 11 6332-2736',
    },
  ],
};

describe('Header', () => {
  test('render all components', () => {
    const { container } = render(<Header {...headerProps}/>);
    expect(container).toMatchSnapshot();
  });
})

